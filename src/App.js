import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px]'>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
};

export default App;
