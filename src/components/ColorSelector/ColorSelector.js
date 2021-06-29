import React from 'react';
import classes from './ColorSelector.module.scss';
import { colorHex } from '../../helpers/colorsHelper';
import { v4 as uuidv4 } from 'uuid';

const ColorSelector = ({ name, options, selectedOption, onChange }) => (
    <div className={classes.colorSelector}>
        {options.map(option => (
            <div key={uuidv4()}>
                <input 
                    type="radio" 
                    id={`${name}-${option}`} 
                    name={name} 
                    checked={selectedOption === option} 
                    value={option}
                    onChange={(e) => onChange(name, option)}
                />
                <label htmlFor={`${name}-${option}`} style={{backgroundColor: colorHex(option)}}></label>
            </div>
        ))}
    </div>
);

export default ColorSelector;