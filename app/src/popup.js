document.addEventListener('DOMContentLoaded', documentEvents, false);

const DROPDOWN_MENU_PARAMS = [
    {
        elementId: 'board-theme-select',
        storageKey: 'BoardTheme',
        msgCmd: 'setBoardTheme',
        defaultValue: 'default',
    },
    {
        elementId: 'piece-theme-select',
        storageKey: 'PieceTheme',
        msgCmd: 'setPieceTheme',
        defaultValue: 'default',
    },
    {
        elementId: 'highlight-color-use-custom',
        storageKey: 'HighlightColorUseCustom',
        msgCmd: 'highlightColor',
        defaultValue: false,
    },
    {
        elementId: 'highlight-color-value',
        storageKey: 'HighlightColorValue',
        msgCmd: 'highlightColor',
        defaultValue: '#9cc700',
    },
];

function dropDownMenuActions(elementId, storageKey, msgCmd, defaultValue) {
    const selectMenu = document.getElementById(elementId);

    // load saved values on open
    chrome.storage.sync.get(storageKey, (result) => {
        if (Object.keys(result).length > 0) {
            if (selectMenu.type === 'checkbox') {
                selectMenu.checked = result[storageKey];
            } else {
                selectMenu.value = result[storageKey];
            }
        } else {
            // first time opening, set default values
            chrome.storage.sync.set({ [storageKey]: defaultValue }, () => {
                console.log(`First time setup: ${storageKey} saved as ${defaultValue}`);
            });
        }
    });

    // send message to contentScript on value change
    selectMenu.addEventListener('change', (event) => {
        const value = selectMenu.type === 'checkbox' ? selectMenu.checked : event.target.value;

        console.log(`new value: ${value}`);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    cmd: `${msgCmd}`,
                    value: value,
                },
                () => {
                    console.log(`Sending message for ${msgCmd}!`);
                }
            );
        });

        // update stored value
        chrome.storage.sync.set({ [storageKey]: value }, () => {
            console.log(`${storageKey} saved as ${value}`);
        });
    });
}

function documentEvents() {
    // Setup dropdown menus
    DROPDOWN_MENU_PARAMS.forEach((it) => {
        dropDownMenuActions(it['elementId'], it['storageKey'], it['msgCmd'], it['defaultValue']);
    });
}
