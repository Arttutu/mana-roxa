import GithubProvider from "next-auth/providers/github"

export const options = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 10000, // Aumente o tempo limite para 10 segundos (10000ms)
      },
    }),
    // ...add more providers here
  ],
}
