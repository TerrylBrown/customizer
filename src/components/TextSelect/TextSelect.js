import React, { useContext, useEffect } from 'react';
import { graphicsContext } from '../../context/GraphicsContext';
import { colorHex } from '../../helpers/colorsHelper';
import { v4 as uuidv4 } from 'uuid';
import ColorSelector from '../ColorSelector/ColorSelector';

const TextSelect = () => {
    const graphicsState = useContext(graphicsContext);
    const textSettings = graphicsState.state.text;

    const handleTextboxChange = (value) => {
        graphicsState.dispatch({
            type: 'UPDATE_GRAPHICS',
            payload: {
                ...graphicsState.state,
                text: {
                    ...graphicsState.state.text,
                    value
                }
            }                
        });
    };

    const handleFontClick = (font) => {
        graphicsState.dispatch({
            type: 'UPDATE_GRAPHICS',
            payload: {
                ...graphicsState.state,
                text: {
                    ...graphicsState.state.text,
                    font
                }
            }                
        });
    };

    const handleTextColorChange = (name, color) => {
        graphicsState.dispatch({
            type: 'UPDATE_GRAPHICS',
            payload: {
                ...graphicsState.state,
                text: {
                    ...graphicsState.state.text,
                    colorSelect: {
                        ...graphicsState.state.text.colorSelect,
                        selectedOption: colorHex(color)
                    }
                }
            }                
        });
    };

    return (
        <>
            <div>
                <h4>Text Input</h4>
                <input 
                    type="text" 
                    value={textSettings.value} 
                    onChange={(e) => handleTextboxChange(e.target.value)}
                />
            </div>

            <div>
                <h4>Font Type</h4>
                {textSettings.fonts.map(font => (
                    <div key={uuidv4()}>
                        <input 
                            type="radio"                            
                            id={font}  
                            name="text-font" 
                            checked={textSettings.font === font}
                            onChange={(e) => handleFontClick(font)}
                        />
                        <label htmlFor={font}>{font}</label>
                    </div>
                ))}
            </div>

            <div>
                <h4>Color</h4>
                <ColorSelector          
                    name="textColor"
                    options={textSettings.colorSelect.options} 
                    selectedOption={textSettings.colorSelect.selectedOption} 
                    onChange={handleTextColorChange}
                />
            </div>
        </>
    )
};

export default TextSelect;