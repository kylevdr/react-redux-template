const initialState = {
};

export default function reducerTemplate(state = initialState, action) {
    switch(action.type) {
        case "ACTION_ONE": {
            return state;
        }
        case "ACTION_TWO": {
            return state;
        }
        default: {
            return state;
        }
    }
}