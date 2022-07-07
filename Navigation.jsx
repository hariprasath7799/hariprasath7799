import React, { useState } from "react";
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Lion from './images/lion.png';
import './Navbar1.css';
import './Navigationcss.css';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';

import {
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Home from "./Home";
import Resume from "./Resume";
import Gallery from "./Gallery";
import Favourite from "./Favourite";
import Sports from "./Sports";
import Transport from "./Transportation";
import Contact from "./Contact";
import Media from "./Media";
const drawerWidth = 240;
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <div className="navigation">
    <BrowserRouter>
    <React.Fragment>
        
      <AppBar sx={{ background: 'rgb(1,68,75)',
background: `linear-gradient(0deg, rgba(1,68,75,1) 0%, rgba(1,42,68,1) 37%, rgba(1,8,59,1) 100%)`,    boxShadow: "0 10px 20px rgba(2, 82, 71, 0.590)"
 }}>
        <Toolbar>
        <Avatar
        alt="Remy Sharp"
        src={Lion}
        sx={{ width: 60, height: 60 }}
      />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%",color:"#e1a60e" }}>
                My Profile
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <nav>
                               <NavLink to="gffg" exact> <a><Tab style={{color:"white"}} label="" /></a> </NavLink>

              <NavLink to="/" exact activeClassName="active" style={{color:"white",width:'50px'}}> <a ><Button style={{width:'14vh',color:'white'}}>Home</Button></a> </NavLink>
                <NavLink to="/Resume" exact activeClassName="active">  <a><Button style={{width:'14vh',color:'white'}}>About</Button></a></NavLink> 
                <NavLink to="/Gallery" exact activeClassName="active">  <a><Button style={{width:'14vh',color:'white'}}>Gallery</Button></a></NavLink> 
               <NavLink to="/Favourite" exact activeClassName="active">  <a><Button style={{width:'16vh',color:'white'}}>Favourite</Button></a></NavLink>
               <NavLink to="/Sports" exact activeClassName="active">  <a><Button style={{width:'15vh',color:'white'}}>Sports</Button></a> </NavLink>
               <NavLink to="/Transportation" exact activeClassName="active">  <a><Button style={{width:'18vh',color:'white'}}>Transportation</Button></a></NavLink> 
               <NavLink to="/Contact" exact activeClassName="active">  <Button style={{width:'16vh',color:'white'}}>Contact</Button></NavLink>
               <div class="animation start-home"></div>
               </nav>
                
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Resume' element={<Resume/>} />
      <Route exact path='/Gallery' element={<Gallery/>} />
      <Route exact path='/Favourite' element={<Favourite/>} />
      <Route exact path='/Sports' element={<Sports/>} />
      <Route exact path='/Transportation' element={<Transport/>} />
      <Route exact path='/Contact' element={<Contact/>} />
      <Route exact path='/Media' element={<Media/>} />


      </Routes>
     
    </React.Fragment>
    </BrowserRouter>
    </div>
  );
};

export default Header;
