import scrapedin from "scrapedin"

const email = window.localStorage.getItem("user-email")
const password = window.localStorage.getItem("user-password")
const getScraper = async (email: string, password: string) =>
  await scrapedin({ email: email, password: password })
export const getProfile = await getScraper(email, password)
