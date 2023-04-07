export const authUrl = "https://app.amplemarket.com/login"

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: authUrl })
  }
})
