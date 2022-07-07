import React, { useState } from 'react';
import './App.css';
import Fam1 from './images/1.jpg';
import Fam2 from './images/7.jpg';
import Fam3 from './images/3.jpg';
import Fam4 from './images/4.jpg';
import Fam5 from './images/5.jpg';
import Fam6 from './images/6.jpg';
import Sky1 from './images/Sky1.jpg';
import Sky2 from './images/Sky2.jpg';
import Sky3 from './images/Sky12.jpg';
import Sky4 from './images/Sky14.jpg';
import Sky5 from './images/Sky10.jpg';
import Sky6 from './images/Sky6.jpg';
import Sky7 from './images/Sky7.jpg';
import Sky8 from './images/Sky8.jpg';
import Sky9 from './images/Sky9.jpg';
import Honda from "./images/honda Cbr.jpg";
import R15 from './images/r15.jpg';
import Unicorn from "./images/unicorn.jpg" ;
import Yamaha from './images/yamaha r6.jpg';
import Bucatti from "./images/bugatti-chiron-sport-110-ans.jpg";
import Rolls from "./images/rolls royce.jpg" ;
import Hundai from "./images/hundaii20.jpg"; 
import Hondacity from "./images/honda city.jpg"; 

import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';
import { Card,Button } from '@mui/material';
function HideShow() {
  const [family, setIsFamily] = useState(false);
  const [myClick,setIsMyclick] =useState(false);
const[bike,setIsBike]=useState(false);
  return (
    <div className="App">
        <div className='Apps'>
        <ul>
     <li><Button color='primary' size="large" sx={{marginRight:'10vh',margin:'auto'}}variant="contained"
        onClick={() => [setIsFamily(true), setIsMyclick(false),setIsBike(false)]}
       >
        My Click
      </Button></li> 

     <li><Button
       variant="contained" sx={{marginLeft:'10vh',margin:'auto'}} size="large"onClick={() => [setIsMyclick(true),setIsFamily(false),setIsBike(false)]}
       >
      Family
      </Button>
      
      </li> 
      <li><Button
       variant="contained" sx={{marginLeft:'10vh',margin:'auto'}} size="large"onClick={() => [setIsMyclick(false),setIsFamily(false),setIsBike(true)]}
       >
      Bike
      </Button></li> 

      <li><Button
       variant="contained" sx={{marginLeft:'10vh',margin:'auto'}} size="large"onClick={() => [setIsMyclick(true),setIsFamily(true),setIsBike(true)]}
       >
      All
      </Button></li> 

      </ul>
      </div>
      {family && (
        <Zoom cascade>
            <div>
                <Card className='my'>
            <ul className='galfam'>
                <li><img src={Sky1} height="350px" width="600px"alt='fam'/></li>
                <li><img src={Sky2} height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky3}height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky4}height="350px" width="600px"alt='fam'/></li>
                <li><img src={Sky5}height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky6}height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky7}height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky8}height="350px" width="600px" alt='fam'/></li>
                <li><img src={Sky9}height="350px" width="600px" alt='fam'/></li>
            </ul>
            </Card>
            </div>
        </Zoom>
      )}


      {myClick && (
        <Zoom cascade>
        <div>
            <Card className='my'>
        <ul className='galfam'>
            <li><img src={Fam1} height="250px" width="200px"alt='fam'/></li>
            <li><img src={Fam2} height="250px" width="200px" alt='fam'/></li>
            <li><img src={Fam3}height="250px" width="400px" alt='fam'/></li>
            <li><img src={Fam4} height="250px" width="300px"alt='fam'/></li>
            <li><img src={Fam5}height="250px" width="300px" alt='fam'/></li>
            <li><img src={Fam6}height="250px" width="300px" alt='fam'/></li>
        </ul>
        </Card>
        </div>
    </Zoom>
      )}

{bike && (
        <Fade cascade>
        <div>
            <Card className='my'>
        <ul className='galfam'>
            <li><img src={Honda} height="250px" width="400px"alt='fam'/></li>
            <li><img src={Hondacity} height="250px" width="400px" alt='fam'/></li>
            <li><img src={Bucatti}height="250px" width="400px" alt='fam'/></li>
            <li><img src={Rolls} height="250px" width="400px"alt='fam'/></li>
            <li><img src={R15}height="250px" width="400px" alt='fam'/></li>
            <li><img src={Yamaha}height="250px" width="400px" alt='fam'/></li>
            <li><img src={Unicorn}height="250px" width="400px" alt='fam'/></li>
            <li><img src={Hundai}height="250px" width="500px" alt='fam'/></li>


        </ul>
        </Card>
        </div>
    </Fade>
      )}

    </div>
  );
}

export default HideShow;