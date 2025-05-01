import React from 'react';

const App = () => {
  const handleClick = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillForm' });
      });
  };

  return (
    <div>
      <h1>Job Auto Fill</h1>
      <button onClick={handleClick}>Auto Fill</button>
    </div>
  );
};

export default App;
