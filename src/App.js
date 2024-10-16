// App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import DashboardMetrics from './components/DashboardMetrics';
import FormAndMap from './components/FormAndMap';
import Login from './components/Login';
import ImageGrid from './components/ImageGrid';

const App = () => {
  return (
    <div className="container">
      {/* <Sidebar />
      <main>
        <DashboardMetrics />
        <FormAndMap />
      </main> */}
     
     <Login />
     <ImageGrid />
     </div>
  
  );
}

export default App;