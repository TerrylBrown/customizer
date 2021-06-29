import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomizationControl = ({ name, options, selectedOption, onChange }) => (
    <div>
        {options.map(option => (
            <div key={uuidv4()}>
                <input 
                    type="radio" 
                    id={`${name}-${option}`} 
                    name={name} 
                    checked={selectedOption === option} 
                    value={option}
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor={`${name}-${option}`}>{option}</label>
            </div>
        ))}
    </div>
);

export default CustomizationControl;