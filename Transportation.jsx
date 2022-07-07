import Box from '@mui/material/Box';

import Grid from "@mui/material/Grid";
import './Transportationcss.css';
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import ProgressBar from "react-progressbar-on-scroll";
import { Typography } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import Honda from "./images/honda Cbr.jpg";
import R15 from './images/r15.jpg';
import Unicorn from "./images/unicorn.jpg" ;
import Yamaha from './images/yamaha r6.jpg';
import Bucatti from "./images/bugatti-chiron-sport-110-ans.jpg";
import Rolls from "./images/rolls royce.jpg" ;
import Hundai from "./images/hundaii20.jpg"; 
import Hondacity from "./images/honda city.jpg"; 
import Arthi from "./images/arthi travels.png" ;
import City from "./images/city.jpg";
import Pkm from "./images/pkm.jpg";
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from 'react-reveal/Reveal';

export default function App() {
  return (
    <>
      <div className="trans">
      <ProgressBar
    color="pink"
    gradient={true}
    colorGradient="yellow"
    height={5}
  />
  <div style={{textAlign:"center",color:"white"}}>
</div>
      <Parallax pages={3}>
          <ParallaxLayer
            offset={0.1}
            speed={1}
            style={{ backgroundColor: " ",marginTop:"1vh" }}
          >
            <Typography variant='h2' style={{textAlign:"center" ,color:"#ffa710",marginBottom:"4vh",backgroundColor:"rgba(10, 140, 99, 0.207)"}}>
              Vehicles
            </Typography>
                  <Box component="main">
                  <Reveal effect="fadeInUp" timeout="3000">
            <Grid container spacing={0} >
              <Grid md={3} >
              
              <Card sx={{ maxWidth: 350 }} >
              <h1 style={{textAlign:"center"}}>Bikes</h1>
              <CardActionArea class="cardt item-card card-block">
              <CardMedia
          component="img"
          height="290"
        
          image={R15}
          alt="Honda"
        />
        
      
            <h1 class="card-title mt-3 mb-3">R15-Race Bike</h1>
            
              <table cellPadding="9" cellSpacing="1">
              <tr>
                <th>Ex-Showroom Price*</th>
                <td>₹ 1.58 Lakh Onward</td>
                <th>Engine Capacity</th>
                <td>155.0 CC</td>
              </tr>
              <tr>
                <th>Gears</th>
                <td>6 Speed</td>
                <th>Brakes</th>
                <td>Hydraulic Disc</td>
              </tr>
              <tr>
                <th>Fuel Economy/Mileage</th>
                <td>30 Km/l</td>
                <th>Fuel Tank Capacity</th>
                <td>11.0 L</td>
              </tr>
             
              
            </table>
 
      </CardActionArea>
      </Card>
              </Grid>
              <Grid md={3} >
              <Card sx={{ maxWidth: 350 }} >
              <h1 style={{textAlign:"center"}}>Bikes</h1>
              <CardActionArea class="cardt item-card card-block">
              <CardMedia
          component="img"
          height="300"
          image={Unicorn}
          alt="Unicorn"
        />
        
            
        
            <h1 class="card-title  mt-3 mb-3">Unicorn</h1>
            <table cellPadding="10" cellSpacing="5">
              <tr>
                <th>Engine Capacity</th>
                <td>	162.7 cc</td>
                <th>Mileage </th>
                <td>	50 kmpl</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>	5 Speed Manual</td>
                <th>Kerb Weight</th>
                <td>140 kg</td>
              </tr>
              <tr>
                <th>140 kg</th>
                <td>	13 litres</td>
                <th>Seat Height</th>
                <td>	798 mm</td>
              </tr>
            </table>
 
      </CardActionArea>
      </Card>
              </Grid>
              <Grid md={3}>
              <Card sx={{ maxWidth: 350 }} >
              <h1 style={{textAlign:"center"}}>Bikes</h1>
              <CardActionArea class="cardt item-card card-block">

              <CardMedia
          component="img"
          height="300"
          image={Honda}
          alt="Honda"
        />
      
           <h2 class="card-title  mt-3 mb-3">Honda Cbr</h2>
           <p>
             <table cellPadding="10" cellSpacing="1">
               <tr>
                 <th>Engine Capacity</th>
                 <td>	1,000 cc</td>
                 <th>Transmission</th>
                 <td>	6 Speed Manual</td>
               </tr>
               <tr>
                 <th>Kerb Weight</th>
                 <td>	201 kg</td>
                 <th>Fuel Tank Capacity</th>
                 <td>	16.1 litres</td>
               </tr>
               <tr>
                 <th>Seat Height</th>
                 <td>	830 mm</td>
                 <th>Max Powe</th>
                 <td>	215 bhp</td>
               </tr>
              
             </table>
           </p> 
     </CardActionArea>
     </Card>
               </Grid>
               <Grid md={3}>
              <Card sx={{ maxWidth: 350 }} >
              <h1 style={{textAlign:"center"}}>Bikes</h1>
              <CardActionArea class="cardt item-card card-block">

              <CardMedia
          component="img"
          height="300"
          image={Yamaha}
          alt="Honda"
        />
      
           <h2 class="card-title  mt-3 mb-3">Yamaha</h2>
           <p>
             <table cellPadding="10" cellSpacing="1">
           
              <tr>
                <th>Engine type</th>
                <td>	599.0 ccm</td>
                <th>Power</th>
                <td>123.5 HP</td>
                
              </tr>
              <tr>
                <th>Fuel system</th>
                <td>Fuel Injectio</td>
                <th>Cooling system</th>
                <td>	Liquid</td>
                
              </tr>
              <tr>
                <th>Gearbox</th>
                <td>	6-speed</td>
                <th>Fuel consumption</th>
                <td>5.60 litres</td>
                
              </tr>
            
              
             </table>
           </p> 
     </CardActionArea>
     </Card>
               </Grid>

            </Grid>
            </Reveal>
            </Box>
          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
            speed={1}
            
          />

          <ParallaxLayer offset={1.1} speed={-0.2} style={{ opacity: 1,paddingTop:"7vh" }}>
          <Box component="main">
          <Reveal effect="fadeInUp" timeout="3000">

            <Grid container>
              <Grid xs={3}>
              <Card sx={{ maxWidth: 350 }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Cars</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Rolls}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                    <h2>Rolls Royce</h2>
                                    <p>
                                      Rolls Royce has actually changed ownership a few times. In the late 90s and early 00s, Volkswagen bought the rights to the famous Rolls Royce mascot, as well as the grill – while BMW had rights to the famous logo and the actual name of the brand.

                                        Confusion ended around 2003, when the companies finally struck a deal. BMW now produces and runs Rolls Royce cars as you see them today.
                                  
                                        Rolls Royce actually sold motors and chassis for cars alone up until the mid-1940s. From 1946, they started building and selling their own complete vehicles.
                                     Rolls Royce is, believe it or not, known for helping to build nuclear submarines! They are a major defense support across the world.
                                      </p>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>
                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350 }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Cars</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Bucatti}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                    <h2>Bucatti</h2>
                                    <p>The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI’s history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art, form and technique, that pushes boundaries beyond imagination.</p>
                                <p>The Skyview option was developed in accordance with the attributes that characterize the CHIRON. The symbolic horseshoe grill, and the distinctive C-bar on the side, still define it as unmistakably BUGATTI, as do its pronounced lines and generous surfaces. From inside, the glass roof enables a view into another dimension, flooding the cockpit with natural light.</p>

                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350 }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Cars</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Hundai}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h2>Hundai</h2>
                                   <p>The all-new i20 has been inspired from Hyundai’s design DNA of “sensuous sportiness” with a dynamic look on the outside & luxurious feeling on the inside. Its breathtaking presence casts a magnetic charm; while its connected and intuitive features enhance your comfort and convenience. Truly a class above the rest.</p>
                               <p>Oxyboost air purifier with air quality indicator
                                Breathe in fresh air through the air purifier as you cruise along. Air purifier maintains healthy environment inside cabin</p>
                              <p>Electric sunroof
                                Electrically controlled smart sunroof with one touch operation for added convenience</p>    
                             <p></p>                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350 }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Cars</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Hondacity}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h2>Honda</h2>
                                   <p>A Stately Stunner
                                    The contours of the Honda City are strikingly unmistakable. That dash of panache. That magnetic presence. The roads will be overwhelmed. Get ready.</p>
                                    <p>A World Of Convenience
                                      Honda's 'Man Maximum, Machine Minimum' philosophy is utilized in designing a cabin space that has nooks and corners to comfortably accommodate your world in every drive.</p>
                                <p>
                                  1.5 Litres i-VTEC Petrol Engine
                                  The heart of the 4th Gen Honda City throbs with Honda technology. The refined 1.5 Litres i-VTEC petrol engine strikes an immaculate balance by providing an impressive power of 119 ps with a mileage of 17.4 km/l^.</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                </Grid>
                </Reveal>
                </Box>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0.8} style={{ opacity: 0.7 }}>
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <br/>
            <br/>
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "40%", marginLeft: "5%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={2} style={{ opacity: 1 }}>

          <Box component="main" >
          <Reveal effect="fadeInUp" timeout="4000">

            <Grid container >
              <Grid xs={3}>
              <Card sx={{ maxWidth: 350,    backgroundColor:"#b47508c1"
 }} >
              <CardActionArea style={{ backgroundColor:"#b47508c1"}}>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Travels</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Arthi}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h3>Arthi Travels</h3>
                                     
                                     <p>Arthi Travels providing travel solutions to their passengers with best in class quality by operating brand new fleets with well experienced professionals. Some of the Important routes of Arthi Travels includes Coimbatore, Thenkasi, Alangulam, Sivakasi, Rameshwaram and Thiruchendhur.</p>
                                 <p>We offer good Logistics Network with our offices and also high quality distribution facilities which are staffed by dedicated teams of the top of experts. we have good experiences in this field</p>
                               </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>
                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350, backgroundColor:"#b47508c1"}} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Travels</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={City}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h6>City Travels</h6>
                                     <p>CityTravel, through its huge database of hotels worldwide, believes in helping travelers make an informed and smart decision when it comes to booking the most affordable accommodations online. CityTravel guarantees best price offers with instant confirmation online. CityTravel also utilizes a secure commerce server which encrypts your credit card information and encodes it into a non-usable form. Should you have any inquiries after submitting your reservation request, our qualified and friendly agents are available 24 hours a day, 7 days a week to assist you.

                                    </p>
                                 <p>Oxyboost air purifier with air quality indicator
                                  Breathe in fresh air through the air purifier as you cruise along. Air purifier maintains healthy environment inside cabin</p>
                                <p>Searching for your favourite bus operator in Singapore or the Top 10 Bus Operators in Coimbatore can be a daunting task. But thanks to redBus, this process has been made simple by a mere click of a button. The redBus website and application offers an informative look inside the exciting world of bus travel in Singapore. Apart from providing information on local landmarks and attractions in Coimbatore, the redBus platform aims at drastically improving your travel experience in Coimbatore. Updated bus schedules, fares, timings, and much more, help travellers get from one landmark to another with great ease. Search for City Travels Coimbatore reviews on the redBus platform before booking a bus ticket online.</p>    

                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350, backgroundColor:"#b47508c1" }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Travels</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="600"
          image={Pkm}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h6>PKM Travels</h6>
                                     <p>We at PKM Travels organize tour services to variety of places in and around south India. We do all kind of tours and packages like Family Tour, Corporate Tours, College Industrial visit, Temple Tour Packages and Caravan for Cini Industries and Packages</p>
                                      <p>PKM Travels offers a full Range of Vehicles from 4-50 seaters and operates in both the luxury(A/C) & regular segments(Non A/C). To ensure that our customers enjoy a comfortable travel experience, We provide Vehicles with GPS, Interior Cameras with Emergency Alarm.</p>
                                  <p>
                                    PKM Travels offering various tour packages like Family Tour, Office Outing, College Industrial visit and services like Contract Bus Services, Caravan Services with High segment of Luxury</p>
                                                       </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                <Grid xs={3}>
                <Card sx={{ maxWidth: 350, backgroundColor:"#b47508c1" }} >
              <CardActionArea>

           

                
          <div id="cards_landscape_wrap-2">
        <h1>Travels</h1>
           
        
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                <CardMedia
          component="img"
          height="300"
          image={Hondacity}
          alt="Honda"
        />
                                </div>
                                <div class="text-container" style={{textAlign:"justify"}}>
                                <h2>Honda</h2>
                                   <p>A Stately Stunner
                                    The contours of the Honda City are strikingly unmistakable. That dash of panache. That magnetic presence. The roads will be overwhelmed. Get ready.</p>
                                    <p>A World Of Convenience
                                      Honda's 'Man Maximum, Machine Minimum' philosophy is utilized in designing a cabin space that has nooks and corners to comfortably accommodate your world in every drive.</p>
                                <p>
                                  1.5 Litres i-VTEC Petrol Engine
                                  The heart of the 4th Gen Honda City throbs with Honda technology. The refined 1.5 Litres i-VTEC petrol engine strikes an immaculate balance by providing an impressive power of 119 ps with a mileage of 17.4 km/l^.</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </CardActionArea>
                </Card>

                </Grid>
                </Grid>
                </Reveal>
                </Box>
          </ParallaxLayer>
        </Parallax>


        </div>
    </>
  );
}
