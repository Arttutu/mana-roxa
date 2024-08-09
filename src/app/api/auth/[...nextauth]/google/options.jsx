import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "../../../../../../prisma/db"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { error } from "console"
import { redirect } from "next/dist/server/api-utils"

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
          alert("Usuario não encontrado " + error)
        }
        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid profile email",
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    // ...add more providers here
  ],
  //usando callback da sessao para vincular usuario do banco com o usuario da sessao
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        /*   const verificarEmail = await db.user.findFirst({
          where: {
            email: session.user.email,
          },
        })
        if (verificarEmail) {
          redirect("/login?error=AccountAlreadyLinked")
        } */
        session.user.id = parseInt(token.sub)
      }
      return session
    },
  },

  pages: {
    signIn: "/login",
  },
}
