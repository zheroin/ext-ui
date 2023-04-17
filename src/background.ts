import testHandle from "./api/test"

export const authUrl = "https://example.com"
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: authUrl })
  }
})
console.log("Here background")
export {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "test") {
    testHandle()
    sendResponse({ data: "success" })
  }
})
export {}
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, "toggle")
  console.log("message sent")
})
