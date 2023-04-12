import scrapedin from "scrapedin"

let email, password
const getScraper = async (email: string, password: string) =>
  await scrapedin({ email: email, password: password })
export const getProfile = await getScraper(email, password)
