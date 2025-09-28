import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot instead of ReactDOM
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');  // Get the root DOM node
const root = createRoot(container);  // Create a root

root.render(<App />);  // Render your App component
