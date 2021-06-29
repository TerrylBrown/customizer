import React, { useReducer, createContext } from 'react';
import customizationData from '../fixtures/customizations';

const graphicsContext = createContext();
const { Provider } = graphicsContext;

const initialState = Object.entries(customizationData).find(([key, value]) => {
        return value.name === 'graphics'
    })[1].options;

const reducer = (state, action) => {
    const actions = {
        UPDATE_GRAPHICS: action.payload
    };

    return actions[action.type]
        ? actions[action.type]
        : state;
};

const GraphicsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
};

export { graphicsContext, GraphicsProvider };