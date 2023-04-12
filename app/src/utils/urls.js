const LICHESS_PIECE_URL_BASE = 'https://raw.githubusercontent.com/lichess-org/lila/master/public/piece';
const LICHESS_BOARD_URL_BASE = 'https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board';
const LICHESS_PIECES = {
    alpha: {},
    anarcandy: {},
    california: {},
    cardinal: {},
    cburnett: {},
    chess7: {},
    chessnut: {},
    companion: {},
    dubrovny: {},
    fantasy: {},
    fresca: {},
    gioco: {},
    governor: {},
    horsey: {},
    icpieces: {},
    kosal: {},
    leipzig: {},
    letter: {},
    libra: {},
    maestro: {},
    merida: {},
    pirouetti: {},
    pixel: {},
    reillycraig: {},
    riohacha: {},
    shapes: {},
    spatial: {},
    staunty: {},
    tatiana: {},
};

Object.entries(LICHESS_PIECES).forEach(([key]) => {
    LICHESS_PIECES[key] = {
        bb: `url('${LICHESS_PIECE_URL_BASE}/${key}/bB.svg')`,
        bk: `url('${LICHESS_PIECE_URL_BASE}/${key}/bK.svg')`,
        bn: `url('${LICHESS_PIECE_URL_BASE}/${key}/bN.svg')`,
        bp: `url('${LICHESS_PIECE_URL_BASE}/${key}/bP.svg')`,
        bq: `url('${LICHESS_PIECE_URL_BASE}/${key}/bQ.svg')`,
        br: `url('${LICHESS_PIECE_URL_BASE}/${key}/bR.svg')`,
        wb: `url('${LICHESS_PIECE_URL_BASE}/${key}/wB.svg')`,
        wk: `url('${LICHESS_PIECE_URL_BASE}/${key}/wK.svg')`,
        wn: `url('${LICHESS_PIECE_URL_BASE}/${key}/wN.svg')`,
        wp: `url('${LICHESS_PIECE_URL_BASE}/${key}/wP.svg')`,
        wq: `url('${LICHESS_PIECE_URL_BASE}/${key}/wQ.svg')`,
        wr: `url('${LICHESS_PIECE_URL_BASE}/${key}/wR.svg')`,
    };
});

export const PIECE_THEMES = {
    ...LICHESS_PIECES,
};

export const BOARD_THEMES = {
    blue_marble: `url('${LICHESS_BOARD_URL_BASE}/blue-marble.jpg')`,
    blue2: `url('${LICHESS_BOARD_URL_BASE}/blue2.jpg')`,
    blue3: `url('${LICHESS_BOARD_URL_BASE}/blue3.jpg')`,
    canvas2: `url('${LICHESS_BOARD_URL_BASE}/canvas2.jpg')`,
    green_plastic: `url('${LICHESS_BOARD_URL_BASE}/green-plastic.png')`,
    grey: `url('${LICHESS_BOARD_URL_BASE}/grey.jpg')`,
    horsey: `url('${LICHESS_BOARD_URL_BASE}/horsey.jpg')`,
    leather: `url('${LICHESS_BOARD_URL_BASE}/leather.jpg')`,
    maple: `url('${LICHESS_BOARD_URL_BASE}/maple.jpg')`,
    maple2: `url('${LICHESS_BOARD_URL_BASE}/maple2.jpg')`,
    marble: `url('${LICHESS_BOARD_URL_BASE}/marble.jpg')`,
    metal: `url('${LICHESS_BOARD_URL_BASE}/metal.jpg')`,
    ncf_board: `url('${LICHESS_BOARD_URL_BASE}/ncf-board.png')`,
    newspaper: `url('${LICHESS_BOARD_URL_BASE}/newspaper.png')`,
    olive: `url('${LICHESS_BOARD_URL_BASE}/olive.jpg')`,
    pink_pyramid: `url('${LICHESS_BOARD_URL_BASE}/pink-pyramid.png')`,
    purple_diag: `url('${LICHESS_BOARD_URL_BASE}/purple-diag.png')`,
    wood: `url('${LICHESS_BOARD_URL_BASE}/wood.jpg')`,
    wood2: `url('${LICHESS_BOARD_URL_BASE}/wood2.jpg')`,
    wood3: `url('${LICHESS_BOARD_URL_BASE}/wood3.jpg')`,
    wood4: `url('${LICHESS_BOARD_URL_BASE}/wood4.jpg')`,
};
