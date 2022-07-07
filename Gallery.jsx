import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SimpleImageSlider from "react-simple-image-slider";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import One from './images/11.jpg';
import Two from'./images/6.jpg';
import Three from'./images/3.jpg';
import Four from'./images/4.jpg';
import Five from'./images/5.jpg';
import Myclick1 from'./images/MyClick1.jpg';
import Myclick2 from'./images/MyClick2.jpg';
import Myclick3 from'./images/MyClick3.jpg';
import Myclick4 from'./images/MyClick4.jpg';
import Myclick5 from'./images/MyClick5.jpg';
import Myclick6 from'./images/MyClick6.jpg';
import HideShow from "./Gallery HideShow";
const images = [
   Myclick1,
   Myclick2,
   Myclick3,
   Myclick4,
   Myclick5,
   Myclick6,
   
  ];

  
 
export default function Gallery(){
    return(
             <Box sx={{ flexGrow: 1 }}>
              

            <div class="im">
        <Grid container>
  <Grid item xs={12} md={12}>
    
  <Typography gutterBottom variant="h4" component="div">
           <h4 class="animate-charcter" style={{marginTop: "30vh"}}>Welcome To My Gallery</h4>
          </Typography>
         
         
 
  </Grid>
  
  </Grid>
 
  </div>
  <div className="gallery">
  <Grid container>
  <Grid item xs={1} md={12} sx={{p:5}}>

  <div className="imgslider1" >
  
          <SimpleImageSlider
        width="1450px"
        height="700px"
        images={images}
        showBullets={true}
        showNavs={true}
        style={{p:10}}
      />
      
          </div>
<div className="imgslider2">
<ImageList sx={{ width:1515, height: 550 }} rows={3} cols={3} rowHeight={500}>
     
        <ImageListItem>
          <img
            src={One}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"

          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={Two}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={Three}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={Four}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom1"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={Five}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom1"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={One}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom1"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={One}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={One}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={One}
           
            alt="hello"
            loading="lazy"
            className="hover-zoom"
          />
        </ImageListItem>
    </ImageList>
</div>
 
<div class="container-fluid" id="sp">
        
        <ul>
          <li>
            <span>Family</span>
            <img src={Myclick1} alt="h"/></li>
          
          <li>
            <span>Vacation Aazhiyar</span>
            <img src={Myclick2}alt="h"/></li>
          
          <li>
            <span>My Friend</span>
            <img src={Myclick3}alt="h"/></li>
          
          <li>
            <span>Vacation</span>
            <img src={Myclick4} alt="h"/>/
          </li>
          
          <li>
            <span>Friends</span>
            <img src={Myclick6} alt="h" />
          </li>
          <li>
            <span>Friends</span>
            <img src={Myclick5} alt="h" />
          </li>
          <li>
            <span>Friends</span>
            <img src={Five} alt="h" />
          </li>
          

         

          
        </ul>
      </div>
    </Grid>
    </Grid>
    </div>
    <Grid container>
      <Grid xs={12} height="100vh">
<HideShow/>
      </Grid>
    </Grid>
  </Box>
 
    );
}