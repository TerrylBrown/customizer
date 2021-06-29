import React from 'react';
import classes from './ProductSelector.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { productImageSelector } from '../../helpers/productImageSelector';
import { colorHex } from '../../helpers/colorsHelper';

const ProductSelector = ({ name, options, selectedOption, onChange }) => (
    <div className={classes.wrapper}>
        {options.map(option => (
            <div key={uuidv4()} className={classes.productSelector}>
                <input 
                    type="radio" 
                    id={`${name}-${option}`} 
                    name={name} 
                    checked={selectedOption === option} 
                    value={option}
                    onChange={(e) => onChange(name, option)}
                />
                <label htmlFor={`${name}-${option}`}>
                    {productImageSelector(option, {
                        body: colorHex('white'),
                        sleeve: colorHex('grey'),                            
                    })}
                </label>
            </div>
        ))}
    </div>
);

export default ProductSelector;