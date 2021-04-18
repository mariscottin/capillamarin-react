export const initialState = {
    user: null,
    novedades: null,
    homilias: null
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case "SET_NOVEDADES":
            return {
                ...state,
                novedades: action.novedades,
            };
        case "SET_HOMILIAS":
            return {
                ...state,
                homilias: action.homilias,
            };
        default:
            return state;
    }
}

export default reducer;