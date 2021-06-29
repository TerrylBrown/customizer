import React from 'react';
import './App.scss';
import ProductImageContainer from './components/ProductImageContainer/ProductImageContainer';
import ControlsList from './components/ControlsList/ControlsList';
import { CustomizationProvider } from './context/CustomizationContext';
import { GraphicsProvider } from './context/GraphicsContext';

function App() {
  return (
    <div>
      <CustomizationProvider>
        <GraphicsProvider>
          <div className="container">
            <ProductImageContainer />
            <ControlsList />
          </div>
        </GraphicsProvider>
      </CustomizationProvider>
    </div>
  );
}

export default App;
