import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typewriter from "typewriter-effect";
import Container from '@mui/material/Container';
import hari from './images/hari.jpeg';
import LazyShow from "./LazyScroll";
import DenseTable from './Table';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
 
  padding: theme.spacing(3),
  textAlign:"center",
  fontSize:"40px",
  font:"bolder",
  fontFamily:"sans-serif",
  
}));


export default function Resume() {
  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item xs={12}>
        <LazyShow>
  <div id="hero" class="hero route bg-image">
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
        
          <h1 class="hero-title mb-4">I am Hari Prasath</h1>
          <p class="hero-subtitle"  style={{color:"white"}}>
          <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Designer,")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Web Developer,")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Photographer")
  .pauseFor(1000)
  .deleteAll()

  .typeString("Designer,")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Web Developer,")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Photographer")
  .start();
  }}
 />
  </p>
        </div>
      </div>
    </div>
  </div>
  </LazyShow>
        </Grid>
       
      </Grid>
    </Box>
     
     <CssBaseline />
     
     <div className='containerres'>
     <Container maxWidth="lg">
     <main id="main">

    
<section id="about" class="about-mf sect-pt4 route">
  <div class="container">
   
      
        <div class="box-shadow-full">
       <Box sx={{height: 'auto',flexGrow: 1 }}>
       <Grid container spacing={2}>
       
       

          
            

        <Grid item xs={2} md={6}>
        <LazyShow>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 10, md:0.1 }}>
        <Grid item xs={6}>
                  <div class="about-img">
                    <img src={hari} class="img-fluid rounded b-shadow-a" style={{width:"200px",borderRadius:"10px"}}alt=""/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                  <div class="about-info">
                    <p><span class="title-s">Name: </span> <span>Hari Prasath</span></p>
                    <p><span class="title-s">Profile: </span> <span>full stack Web developer</span></p>
                    <p><span class="title-s">Email: </span> <span>hariprasathbest10@gmail.com</span></p>
                    <p><span class="title-s">Phone: </span> <span>9842666947</span></p>
                  </div>
                  </Grid>
                  </Grid>
                  </LazyShow>
<LazyShow>
              <div class="skill-mf">
                    <p class="title-s">Skill</p>
                    <span>HTML</span> <span class="pull-right">85%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width:" 85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS</span> <span class="pull-right">75%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>BOOTSTRAP</span> <span class="pull-right">80%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "80%" }}aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>SEMANTIC UI</span> <span class="pull-right">80%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span class="pull-right">50%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>REACTJS</span> <span class="pull-right">70%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  
               </div>
               </LazyShow>
                </Grid>
                <Grid item xs={6} md={6}>
              <LazyShow>
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                     Iam Hari Prasath From Coimbatore Tamilnadhu India.
                    </p>
                    <p class="lead">
                     I'm Passionate in Html,Css,Bootstrap,Senmantic ui,Javascript and Mysql
                    </p>
                    <p class="lead">
                     
                    </p>
                    
                     <table class="table" id="tbl">
        
           
        
        <tbody>
            <tr>
                <th>Name:</th>
                <td>Hari Prasath</td>
                
            </tr>
            <tr>
                <th>D.O.B:</th>
                <td>29/07/1998</td>
                
            </tr>
            <tr>
                <th>Phone No:</th>
                <td>9842667645</td>
                
            </tr>
            <tr>
                <th>Email Id:</th>
                <td>hariprasathbest10@gmail.com</td>
               
            </tr>
            <tr>
                <th>Website:</th>
                <td>www.hariprasath.com</td>
               
            </tr>
            <tr>
                <th>Education:</th>
                <td>Msc.software System</td>
                
            </tr>
           
            

        </tbody>
    </table>
                  </div>
                  </LazyShow>
                  </Grid>
               
                
             
    
    </Grid>
        </Box>
        </div>
        </div>
           
              </section>
              </main>
     </Container>
    
     <LazyShow>
     <Div>{"DETAILS"}</Div>;
    </LazyShow>
     <Container maxWidth="lg">
     <Box sx={{ width: '100%',paddingTop:"8vh" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"60vh"}}>
      <CardActionArea>
        <CardMedia >
        <center><SchoolIcon   color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9923" }} /></center>
          </CardMedia>
        <CardContent>
          
          <Typography gutterBottom variant="h4" component="div">
            <center>Education</center>
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
           <h1 style={{textAlign:"center"}}>School-SSLC</h1>
          
<h3 style={{textAlign:"center"}}>Swathanthara Higher Secondary School</h3>
<h4 style={{textAlign:"center"}}>Year: 2008-2014</h4>
<h4 style={{textAlign:"center"}}>Mark: 446</h4>
<h4 style={{textAlign:"center"}}>Percentage: 89%</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
        <Grid item xs={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"60vh"}}>
      <CardActionArea>
        <CardMedia >
       <center> <SchoolIcon   color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9925" }} /></center>
        
        </CardMedia>
         
       
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          <center>Education</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h1 style={{textAlign:"center"}}>School-HSC</h1>
       
<h3 style={{textAlign:"center"}}>RangaSwamy Naidu Higher Secondary School</h3>
<h4 style={{textAlign:"center"}}>Year: 2014-2016</h4>
<h4 style={{textAlign:"center"}}>Subject:Biology</h4>
<h4 style={{textAlign:"center"}}>Mark: 857</h4>
<h4 style={{textAlign:"center"}}>Percentage:72.2%</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
        <Grid item xs={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"60vh"}}>
      <CardActionArea>
        <CardMedia>
       <center> <SchoolIcon   color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9925" }} /></center>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          <center>Education</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h1 style={{textAlign:"center"}}>College</h1>
         
<h3 style={{textAlign:"center"}}>KG College Of Arts & Science</h3>
<h4 style={{textAlign:"center"}}>Year: 2016-2021</h4>
<h4 style={{textAlign:"center"}}>Subject:Msc.Software Systems</h4>
<h4 style={{textAlign:"center"}}>CGPA:6.9</h4>
<h4 style={{textAlign:"center"}}>Percentage:69%</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
        <Grid item xs={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"59vh"}}>
      <CardActionArea>
        <CardMedia>
        <center><PsychologyIcon color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9925" }}/></center>
        </CardMedia>
         
        
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
           <center> Skills</center>
           
          </Typography>
          <Typography variant="body2" color="text.secondary">
         <center>
                  <h3>Html</h3>
                  <h3>Css</h3>
                  <h3>Bootstrap</h3>
                  <h3>Javascript</h3>
                  <h3>Semantic UI</h3>
                  <h3>Reactjs</h3>
                  <h3>Material UI</h3>
                  <h3>Mysql</h3>
                </center> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
        <Grid item xs={4} md={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"59vh"}}>
      <CardActionArea>
        <CardMedia>
<center><SportsBaseballIcon color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9925" }}/></center>
        </CardMedia>
        
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            <center>Hobbies</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <center><h3>Reading Scriptures</h3>
           <h3>Listening Music</h3>
           <h3>Yoga</h3>
           <h3>Body Building</h3>
           <h3>Foodball</h3>
           <h3>Cricket</h3>
           <h3>Carrom</h3></center> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
        <Grid item xs={4} md={4}>
          <LazyShow>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",height:"59vh"}}>
      <CardActionArea>
        <CardMedia>
<center><EmojiEventsIcon color="primary" sx={{ fontSize: 100,position: 'relative', boxShadow: "0 0 0 10px #00ff9925"}}/></center>

        </CardMedia>
         
        
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
           <center>Achivements</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <center>
<h3>3rd Std: 100 Meter= 2nd Prize</h3>
<h3>7th Std: 100 Meter= 2nd Prize</h3>
<h3>8th Std: 100 Meter= 1st Prize</h3>
<h3>9th Std: Relay= 2nd Prize</h3>
<h3>9th Std: Javelin throw= 1st Prize</h3>
<h3>9th Std: Shot Put= 2nd Prize</h3>



           </center>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
        </Grid>
      </Grid>
    </Box>
    </Container>
    
    
    </div>
    <LazyShow>
    <Grid container sx={{paddingTop:"2vh",paddingBottom:"1vh"}}>
      <Grid item xs={12} sx={{backgroundColor:"rgb(3,20,71)",color:'white',height:'10vh'}}>
        <center><h2 style={{paddingTop:'3vh'}}>@Hari Prasath 2022</h2></center>
        </Grid>
        </Grid>
        </LazyShow>
   </React.Fragment>

  );
}
