chrome.contextMenus.create({
    id: "myExtension",
    title: "My Extension",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "myExtension") {
      chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
      }, function(selection) {
        var url = "https://example.com/search?q=" + encodeURIComponent(selection[0]);
        chrome.tabs.create({ url: url });
      });
    }
  });