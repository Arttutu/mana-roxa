import { createClient } from "@prismicio/client"

export const Client = createClient("mana-roxa", {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})
