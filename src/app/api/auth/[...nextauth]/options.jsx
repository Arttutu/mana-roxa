import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import db from "../../../../../prisma/db"
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import bcrypt from "bcrypt"

export const options = {
  // Ccriando o adpatdor do  auth.js para po prisma passando banco de dados do prisma
  adapter: PrismaAdapter(db),
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Digite seu e-mail",
        },
        password: {
          label: "Senha",
          type: "password",
          placeholder: "Digite sua senha",
        },
      },
      async authorize(credentials) {
        try {
          const encontrarUsuario = await db.user.findFirst({
            where: {
              email: credentials.email,
            },
          })
          if (encontrarUsuario) {
            console.log("usario encontrado")
            const senhaCerta = bcrypt.compareSync(
              credentials.password,
              encontrarUsuario.password
            )
            if (senhaCerta) {
              console.log("usuario correto")
              delete encontrarUsuario.password
              return encontrarUsuario
            }
          }
        } catch (error) {
          console.log("Erro ao autorizar um usuario " + error)
        }
        return null
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 20000, // Aumente o tempo limite para 20 segundos (20000ms)
      },
    }),

    // ...add more providers here
  ],
  //usando callback da sessao para vincular usuario do banco com o usuario da sessao
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = parseInt(token.sub)
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}
