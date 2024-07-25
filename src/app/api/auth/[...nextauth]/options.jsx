import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import db from "../../../../../prisma/db"
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const options = {
  // Ccriando o adpatdor do  auth.js para po prisma passando banco de dados do prisma
  adapter: PrismaAdapter(db),
  // Configure one or more authentication providers
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
    }),
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
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
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id
      }
      return session
    },
    callbacks: {
      async signIn({ account, profile }) {
        if (account.provider === "google") {
          return (
            profile.email_verified && profile.email.endsWith("@example.com")
          )
        }
        return true // Do different verification for other providers that don't have `email_verified`
      },
    },
  },
}
