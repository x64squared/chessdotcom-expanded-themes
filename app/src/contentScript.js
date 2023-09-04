import { BOARD_THEMES, PIECE_THEMES } from './utils/urls.js';
import { loadCSS, unloadCSS } from './utils/utils.js';

console.log('hello world from contentScript!');
let root = document.documentElement;

function setPieceTheme(pieceTheme) {
    if (pieceTheme === 'default') {
        unloadCSS('ccThemesPiece');
    } else if (pieceTheme) {
        loadCSS('./styles/ccThemesPiece.css', 'ccThemesPiece');
        let pieceThemeUrls = PIECE_THEMES[pieceTheme];
        console.log(`changing piece theme to ${pieceTheme}`);
        Object.entries(pieceThemeUrls).forEach(([key, value]) => {
            root.style.setProperty(`--${key}-svg`, value);
            root.style.setProperty(`--theme-piece-set-${key}`, value)
        });
    }
}

function setBoardTheme(boardTheme) {
    if (boardTheme === 'default') {
        unloadCSS('ccThemesBoard');
    } else if (boardTheme) {
        loadCSS('./styles/ccThemesBoard.css', 'ccThemesBoard');
        let boardImageUrl = BOARD_THEMES[boardTheme];
        console.log(`changing board image to ${boardImageUrl}`);
        root.style.setProperty('--board-background-img', boardImageUrl);
    }
}

function setHighlightSquareColor() {
    chrome.storage.sync.get('HighlightColorUseCustom', (result) => {
        if (!result.HighlightColorUseCustom) {
            unloadCSS('ccThemesHighlightSquare');
        } else {
            chrome.storage.sync.get('HighlightColorValue', (result) => {
                loadCSS('./styles/ccThemesHighlightSquare.css', 'ccThemesHighlightSquare');
                root.style.setProperty('--highlight-square-color', result.HighlightColorValue);
            });
        }
    });
}

// load saved settings
chrome.storage.sync.get('BoardTheme', (result) => {
    setBoardTheme(result.BoardTheme);
});

chrome.storage.sync.get('PieceTheme', (result) => {
    setPieceTheme(result.PieceTheme);
});

chrome.storage.sync.get('HighlightColorValue', (result) => {
    setHighlightSquareColor(result.HighlightColorValue);
});

// listen for theme updates
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(`Received message: ${JSON.stringify(request)}`);
    if (request.cmd === 'setBoardTheme') {
        setBoardTheme(request.value);
    } else if (request.cmd === 'setPieceTheme') {
        setPieceTheme(request.value);
    } else if (request.cmd === 'highlightColor') {
        setHighlightSquareColor();
    }
});
