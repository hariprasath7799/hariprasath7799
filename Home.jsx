import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { createMuiTheme,responsiveFontSizes} from '@material-ui/core';


import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

//import { styled } from '@mui/material/styles';

//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import rc from './images/PicsArt_12-25-08.37.41.png';
import hari from './images/Hari Prasath1.jpg';
import education from './images/education.jpg';
import Achivements from './images/achivement.jpg';
import Skills from './images/skills.jpg';
import Hobbies from './images/hobbies.jpg';
import LazyShow from "./LazyScroll";


/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const Home = () => {
 

  return (
    <div className='home'>
    <React.Fragment>
       
   
      <CssBaseline />
      <div className='contain'>
    
       <div className='top'>
        <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={0} sx={{paddingTop:"6vh"}}>
        <Grid item xs={3} className="imggrid">
        <LazyShow>
         <div className='img'>

          <img src={rc} alt='img' style={{height:"16vh" }}  class="rotate linear infinite"/>
         </div>
         </LazyShow>
         
        </Grid>
        <Grid item xs={6}>
         <div className='harigrid'>
         <Grid item sm={6} xs={6}>
          <LazyShow>
            <Card sx={{maxWidth:400,width:400,marginLeft:'8vh'}}>
              <CardActionArea>
                <CardMedia  sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"12vh",width:300}}>
             <center><img src={hari} style={{ height: "25vh", width: "52vh"}} alt="hari"/></center> 
             </CardMedia>
             </CardActionArea>
             </Card>
              </LazyShow>
            <Typography variant="h6" gutterBottom>
              <LazyShow>
          <div class="autoWritter">
        <h2 class="text-center autoWrite-text" style={{letterSpacing:"10px" ,fontWeight:"bold", textAlign:"center",paddingLeft:"80px",marginTop:"-14px"}}>Hari Prasath</h2>
        </div>
        </LazyShow>
        </Typography>
        </Grid>
        </div>
        
        </Grid>
       
        <Grid item xs={3} >
        <div className="contactgrid">
        <LazyShow>
          <Card sx={{ maxWidth:350,backgroundColor:'rgba(13, 13, 13, 0.042)'}}>
          <CardActionArea >
          <CardContent>
        <Typography variant="h6" gutterBottom sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<h2 style={{color:"red"}}>Contact Me:</h2>
</Typography>
<Typography variant="subtitle1" gutterBottom>
<table>
  <tr>
    <th style={{color:"yellow"}}>Email Id:</th>
    <td style={{color:"white"}}>hariprasathbest10@gmail.com</td>
  </tr>
  <tr>
    <th style={{color:"green"}}>Phone No:</th>
    <td style={{color:"white"}}>9842666947</td>
  </tr>
  <tr>
    <th style={{color:"pink"}}>Address:</th>
    <td style={{color:"white"}}>Idikarai,Coimbatore-641022</td>
  </tr>
  <th style={{color:"orange"}}>
    Website:
  </th>
  <td style={{color:"white"}}>www.hari.com</td>
</table>
</Typography>
</CardContent>
</CardActionArea>
</Card>
</LazyShow>
</div>
         </Grid>
         
         </Grid>
       
        
    
    </Box>
    </div>


    <div className='act'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      

        <Grid item xs={3} sx={{maxHeight:'400em'}}>
        <div className='card'>
        <LazyShow>
    <Card sx={{ maxWidth: 345, marginTop:'0vh', height:"54vh",maxHeight:'400em'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={education}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            EDUCATION
          </Typography>
          <Typography variant="body2" color="text.primary">
           <h4>Percentage</h4>
         
           <p>SSLC :89.2%</p>
         
          <p> HSC :72%</p>
       
           <p> COLLEGE :69%</p>
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </LazyShow>
    </div>
    </Grid>
   
    <Grid item xs={3}>
    <div className='card'>
         <LazyShow>
         <Card sx={{ maxWidth: 345, marginTop:'0vh',height:"54vh",maxHeight:'100em'}}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="200"
               image={Achivements}
               alt="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Achivements
               </Typography>
               <Typography variant="body2" color="text.primary">
                <h6>My School Day Achivements</h6>
                <p>3rd std: 100 Meter = 2nd Prize</p>
                <p>7th std: 100 Meter = 1st Prize</p>
                <p>8th std: 100 Meter = 1st Prize -> Relay = 2nd Prize</p>
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
         </LazyShow>
        </div>
         </Grid>
         <Grid item xs={3}>
         
         <div className='card'>
          <LazyShow>
         <Card sx={{ maxWidth: 345, marginTop:'0vh',height:"54vh",maxHeight:'100em'}}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="200"
               image={Skills}
               alt="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Skills
               </Typography>
               <Typography variant="body2" color="text.primary">
               <h5>My Skills:</h5>
               <li>HTML</li>
               <li>CSS</li>
               <li>Javascript</li>
               <li>Bootstrap</li>
               <li>Semantic Ui</li>
               <li>ReactJs</li>
               <li>Material UI</li>
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
         </LazyShow>
        </div>
         </Grid>
         <Grid item xs={3}>
         <div className='card'>
         <LazyShow>
         <Card sx={{ maxWidth: 345, marginTop:'0vh',height:"54vh",maxHeight:'100em'}}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="200"
               image={Hobbies}
               alt="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Hobbies
               </Typography>
               <Typography variant="body2" color="text.primary">
                <h5>My Hobbies Are:</h5>
                <li>Reading Scriptures</li>
                <li>Yoga</li>
                <li>Body Building</li>
                <li>Listening Music</li>
                <li>Playing Cricket</li>
                <li>Playing Carrom</li>
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
         </LazyShow>
        </div>
         </Grid>
    </Grid>
    </Box>
    </div>
  
      </div>
  





  
    </React.Fragment>
    </div>
  );
};
export default Home;