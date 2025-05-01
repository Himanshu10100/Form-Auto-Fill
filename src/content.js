chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillForm') {
      const inputs = document.querySelectorAll('input');
      if (inputs.length) {
        inputs[0].value = 'John Doe'; // Example autofill
      }
    }
  });  