import React from 'react';
import classes from './GraphicSelector.module.scss';
import { v4 as uuidv4 } from 'uuid';

import TextSelect from '../TextSelect/TextSelect';

const GraphicSelector = ({ name, options, selectedOption, onClick }) => {
    const graphicComponentSelector = (type, props) => {
        const controls = {
            textSelect: (
                <TextSelect {...props} />
            ),
            imageSelect: (
                <div>image select heresdfadf</div>
            ),
        };

        return controls[type] ? controls[type] : null;
    };

    return (
        <div className={classes.graphicSelector}>
            <div className={classes.buttonGroup}>
                {Object.entries(options).map(([key, value]) => {
                    return (
                        <button 
                            key={uuidv4()}
                            type="button"
                            onClick={(e) => onClick(name, value.name)}
                            className={(value.name === selectedOption) ? classes.active : '' }
                        >
                            {value.displayName}
                        </button>
                    );
                })}
            </div>
            <div className={classes.optionPanels}>
                {Object.entries(options).map(([key, value]) => ( 
                    <div 
                        key={uuidv4()}
                        className={classes.optionPanel}
                    >
                        {value.name !== 'none' && value.name === selectedOption && 
                            graphicComponentSelector(value.type, {...value}) 
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GraphicSelector;