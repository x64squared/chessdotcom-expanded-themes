export function loadCSS(file, id) {
    if (document.getElementById(id)) {
        return;
    } else {
        let link = document.createElement('link');
        link.href = chrome.runtime.getURL(file);
        link.id = id;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('html')[0].appendChild(link);
    }
}

export function unloadCSS(id) {
    let cssNode = document.getElementById(id);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}
