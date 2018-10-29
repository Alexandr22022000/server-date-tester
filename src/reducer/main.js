import ACTIONS from '../actions/types';

const defaultState = {
    localDate: new Date(),
    serverDate: new Date(),
    serverDateString: new Date() + "",
    server: new Date() + "",
};

const conveniences = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_DATE:
            return {
                ...state,
                localDate: action.date,
            };

        case ACTIONS.GET_DATE:
            return {
                ...state,
                serverDate: action.date,
                serverDateString: action.dateString,
                server: action.server,
            };

        default:
            return state;
    }
};

export default conveniences;