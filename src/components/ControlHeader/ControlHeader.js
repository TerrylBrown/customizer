import React from 'react';
import classes from './ControlHeader.module.scss';

const ControlHeader = ({name, selectedOption}) => (
    <div className={classes.controlHeader}>
        <h2>{name}</h2>
        <p>{selectedOption}</p>
    </div>
);

export default ControlHeader;