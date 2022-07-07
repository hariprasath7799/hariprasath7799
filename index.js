import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Resumecss.css';
import './Gallerycss.css';
import './Transportationcss.css';
//import './App1.css';
//import ResponsiveAppBar from './Home';
//import Resume from './Resume';
//import MiniDrawer from './MiniDrawer';
//import Gallery from './Gallery';
import Header from './Navigation';
//import Parallaxs from './Parallex Scroll';
//import Music from './React Music Player';
//import ReactM from './React Music';
//import Portfoliogallery from './Profolio Gallery';
//import App1 from './App1';
//import Navbar from './Navbar1';
//import Video from './Video';
import reportWebVitals from './reportWebVitals';

//import Deck from './Music Player';
//import Appplayer from './AppPlayer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     
 <Header/>
   
  
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
