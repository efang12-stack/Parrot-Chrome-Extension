// contentScript.ts
console.log("Content script injected");
const getImageUrls = () => {
  const images = document.querySelectorAll('img');
  const urls = Array.from(images).map(img => img.src);
  console.log("HELLO TEST TEST")
  console.log("Extracted image URLs: ", urls);
  return urls;
};

// Send image URLs to the background script
chrome.runtime.sendMessage({ action: "processImages", urls: getImageUrls() });
