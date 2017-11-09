const initialState = {
    page: 'START'
};

const main = (state = initialState, action) => {
    switch (action.type) {
        case 'STARTERR': {
            return {
                ...state,
                page: 'MAIN',
            };
        }
        default:
            return state;
    }
};

export default main
