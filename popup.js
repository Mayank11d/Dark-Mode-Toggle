document.getElementById('toggle-dark-mode').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: toggleDarkMode
      });
  });
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
      body.style.backgroundColor = '#121212';
      body.style.color = '#ffffff';
  } else {
      body.style.backgroundColor = '';
      body.style.color = '';
  }
}
