import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
  <ChakraProvider>
  <BrowserRouter>
  <App />
</BrowserRouter>
</ChakraProvider>
</DndProvider>
);


