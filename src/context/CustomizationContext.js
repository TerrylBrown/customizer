import React, { useReducer, createContext } from 'react';
import customizationData from '../fixtures/customizations';

const customizationContext = createContext();
const { Provider } = customizationContext;

const initialState = {}
Object.entries(customizationData).forEach(([key, value]) => {
    initialState[value.name] = value.defaultOption
});

const reducer = (state, action) => {
    const actions = {
        UPDATE_CUSTOMIZATIONS: action.payload
    };

    return actions[action.type]
        ? actions[action.type]
        : state;
};

const CustomizationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
};

export { customizationContext, CustomizationProvider };