// src/utils/chromeUtils.ts
export const fetchAndReadText = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['contentScript.js']
      }, () => {
        if (chrome.runtime.lastError) {
            console.error("Script injection failed: ", chrome.runtime.lastError.message);
        } else {
            console.log("Script injected successfully");
        }
      });
    }
  });
};

export const speakMessage = (message: string) => {
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);

}