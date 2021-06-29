import React, { useContext } from 'react';
import customizationData from '../../fixtures/customizations';
import { customizationContext } from '../../context/CustomizationContext';
import classes from './ControlsList.module.scss';
import { v4 as uuidv4 } from 'uuid';

import ControlHeader from '../ControlHeader/ControlHeader';
import ColorSelector from '../ColorSelector/ColorSelector';
import ProductSelector from '../ProductSelector/ProductSelector';
import GraphicSelector from '../GraphicSelector/GraphicSelector';

const ControlsList = () => {
    const customizationState = useContext(customizationContext);

    const handleOptionChange = (name, value) => {
        customizationState.dispatch({
            type: 'UPDATE_CUSTOMIZATIONS',
            payload: {
                ...customizationState.state,
                [name]: value
            }
        })
    };

    const controlSelector = (type, props) => {
        const controls = {
            productSelector: (
                <ProductSelector                  
                    {...props.option}    
                    selectedOption={props.selectedOption} 
                    onChange={props.handleOptionChange}                
                />
            ),
            colorSelector: (
                <ColorSelector          
                    {...props.option}    
                    selectedOption={props.selectedOption} 
                    onChange={props.handleOptionChange}                
                />
            ),
            graphicSelect: (
                <GraphicSelector          
                    {...props.option}    
                    selectedOption={props.selectedOption} 
                    onClick={props.handleOptionChange}                
                />
            ),
        };

        return controls[type] ? controls[type] : null;
    };

    return (
        <div className={classes.controlsWrapper}>
            {customizationData.map(option => (
                <div className={classes.controlItem} key={uuidv4()}>
                    <ControlHeader 
                        name={option.displayName} 
                        selectedOption={customizationState.state[option.name]}
                    />
                    {controlSelector(option.type, {                        
                        option: {...option},
                        selectedOption: customizationState.state[option.name],
                        handleOptionChange: handleOptionChange
                    })}
                </div>
            ))}
        </div>
    );
};

export default ControlsList;