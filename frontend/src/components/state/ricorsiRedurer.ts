import { FETCHING, SUCCESS, ERROR } from './actionTypes';
// import { InitialState } from "../interfaces/interfaces";

export const initialState: {
    status: string | undefined;
    response: object | undefined;
} = {
    status: '',
    response: {}
};

const ricorsiReducer = (
    state: any,
    action: { type: string; response?: object }
) => {
    switch (action.type) {
        case FETCHING:
            return { ...initialState, status: FETCHING };

        case SUCCESS:
            return {
                ...initialState,
                status: SUCCESS,
                response: action.response
            };

        case ERROR:
            return {
                ...initialState,
                status: ERROR,
                response: action.response
            };

        default:
            return state;
    }
};

export default ricorsiReducer;
