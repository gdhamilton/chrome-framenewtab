// frame_new_tab.js
// because regressions are so 90's
// George Hamilton <dminus@dmin.us>
// https://bitbucket.org/dminus/

function openFrameHandler(info, tab) {
    var tgt = info.frameUrl;

    if (tgt === undefined) {
        return;
    }

    chrome.tabs.create({
        "index": tab.id + 1,
        "active": true,
        "url": tgt
    });
}

var menu_item = chrome.contextMenus.create({
    "title": "Open frame in tab",
    "contexts": ["page"],
    "onclick": openFrameHandler
});
