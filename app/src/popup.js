document.addEventListener('DOMContentLoaded', documentEvents, false);

const DROPDOWN_MENU_PARAMS = [
    {
        elementId: 'board-theme-select',
        storageKey: 'BoardTheme',
        msgCmd: 'setBoardTheme',
    },
    {
        elementId: 'piece-theme-select',
        storageKey: 'PieceTheme',
        msgCmd: 'setPieceTheme',
    },
    {
        elementId: 'highlight-color-use-custom',
        storageKey: 'HighlightColorUseCustom',
        msgCmd: 'highlightColor',
    },
    {
        elementId: 'highlight-color-value',
        storageKey: 'HighlightColorValue',
        msgCmd: 'highlightColor',
    },
];

function dropDownMenuActions(elementId, storageKey, msgCmd) {
    const selectMenu = document.getElementById(elementId);

    chrome.storage.sync.get(storageKey, (result) => {
        if (selectMenu.type === 'checkbox') {
            selectMenu.checked = result[storageKey];
        } else {
            selectMenu.value = result[storageKey];
        }
    });

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

        chrome.storage.sync.set({ [storageKey]: value }, () => {
            console.log(`${storageKey} saved as ${value}`);
        });
    });
}

function documentEvents() {
    // Setup dropdown menus
    DROPDOWN_MENU_PARAMS.forEach((it) => {
        dropDownMenuActions(it['elementId'], it['storageKey'], it['msgCmd']);
    });
}
