import React from 'react';
import './global.css';
import Routes from './routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

function App() {
  return (
    <Routes />
  );
}

export default App;
