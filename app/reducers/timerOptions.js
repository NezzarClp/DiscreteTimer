import _ from 'lodash';

const initialState = {
    optionsList: [
        {
            id: '1',
            duration: 3,
        },
        {
            id: '2',
            duration: 5,
        },
        {
            id: '3',
            duration: 7,
        },
        {
            id: '4',
            duration: 1,
        },
    ],
};

const timerOptions = (state = initialState, action) => {
    switch (action.type) {
        case 'INSERT_OPTION': {
            const newOptionsList = _.cloneDeep(state.optionsList);
            newOptionsList.push(action.payload);

            return {
                ...state,
                optionsList: newOptionsList,
            }
        }
        case 'REMOVE_OPTION': {
            const removeID = action.payload.id;
            const newOptionsList = _.cloneDeep(state.optionsList);

            newOptionsList = newOptionsList.filter((timerOption) => (
                !(timerOption.id === removeID)
            ));

            return {
                ...state,
                optionsList: newOptionsList,
            }
        }
        default:
            return state;
    }
};

export default timerOptions;
