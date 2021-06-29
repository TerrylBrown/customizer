import React, { useContext } from 'react';
import { customizationContext } from '../../context/CustomizationContext';
import { graphicsContext } from '../../context/GraphicsContext';
import { productImageSelector } from '../../helpers/productImageSelector';
import { colorHex } from '../../helpers/colorsHelper';
import classes from './ProductImageContainer.module.scss';

const ProductImageContainer = () => {
    const customizationState = useContext(customizationContext);
    const graphicsState = useContext(graphicsContext);
    
    const getColor = (name) => {
        return colorHex(customizationState.state[name]);
    }

    const getGraphicsOverlay = (type) => {
        const graphics = {
            text: (
                <div 
                    className={`${classes.textWrapper} ${classes[customizationState.state.product]}`}
                    style={{ 
                        fontFamily: graphicsState.state.text.font,
                        color: graphicsState.state.text.colorSelect.selectedOption
                    }}
                >
                    {graphicsState.state.text.value}
                </div>
            ),
            image: (
                <div className={classes.imageWrapper}>
                    ..image to go here
                </div>
            )
        };

        return graphics[type] ? graphics[type] : false;
    };

    return (
        <div className={classes.imageWrapper}>
            {productImageSelector(
                customizationState.state.product, 
                {
                    sleeve: getColor('sleeve'),
                    body: getColor('body'),
                }
            )}
            {getGraphicsOverlay(customizationState.state.graphics)}            
        </div>
    )
};

export default ProductImageContainer;