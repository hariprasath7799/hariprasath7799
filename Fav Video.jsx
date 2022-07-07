import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Shantha from './videos/Santhakaram Pujakasayanam Song.mp4';
import Nature from './videos/2 Minutes Of Beautiful Scenerys On Planet EarthNature Is PowerEpisode 01_v720P.mp4';
import Mukuntha from './videos/Mukundha Mukundha Song_two_hearts_Radha Krishna_two_hearts_Vishnu Avatar_two_hearts_ Dasavatharam_two_hearts_ WhatsApp Status Tamil_two_hearts_ ( 1080 X 1080 ).mp4';
import { Box,Grid } from '@mui/material';
export default function Video() {
   
        return (
            <Box>
                <Grid container>
                    <Grid xs={12}>
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.278)"}}>
            <Carousel>
                <div>
                <video width="100%" height="50%" controls style={{padding:"10vh"}}>
                <source src={Shantha} type="video/mp4"/>
   
                    </video>
                   
                    <p style={{marginBottom:"5vh"}}className="legend">Shanthakaram Pujakasayanam - Dhasavatharam Movie 1976</p>

                 

                </div>
                <div>
                <video width="100%" height="50%" controls style={{padding:"10vh"}}>
                <source src={Nature} type="video/mp4"/>
                    
                    </video>
                    <p style={{marginBottom:"5vh"}} className="legend">Nature Video</p>
                </div>
                <div sx={{mt:100}}>
                <video width="58%" height="50%" controls style={{padding:"7vh"}}>
                <source src={Mukuntha} type="video/mp4"/>
                    
                    </video>
                    <p  style={{marginBottom:"3vh"}}className="legend">Mukuntha</p>
                </div>
            </Carousel>
            </div>
            </Grid>
            </Grid>
            </Box>
        );
    }
