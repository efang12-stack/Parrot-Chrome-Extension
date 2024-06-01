// background.ts
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'processImages') {
      message.urls.forEach((url: any) => {
          // Assuming your server can process one URL at a time
            fetch(`http://127.0.0.1:5000/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ imageUrl: url })
            })
            .then(response => response.json())
            .then(data => {
              // Ensure sender.tab.id is defined before passing it as an argument
              console.log("Description from backend:", data.description);
              if (sender.tab?.id) {
                chrome.tabs.sendMessage(sender.tab.id, { action: "speakText", text: data.description });
              }
            })
            .catch(error => console.error('Error processing image:', error));
      });
  }
});
