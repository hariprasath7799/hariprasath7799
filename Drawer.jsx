import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from 'react-router-dom';
import './Navbar1.css';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
       
      >
        <List   className="drawer" sx={{background: `rgb(12,11,140)`,

background:`linear-gradient(280deg, rgba(12,11,140,1) 45%, rgba(2,1,127,1) 45%, rgba(3,20,71,1) 46%)`,height:"100%",color:"white",paddingTop:"10vh"}}>
          
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/" exact activeClassName="active">  
           <ListItemText style={{color:"white"}}
           >Home</ListItemText></NavLink>
                
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/Resume" exact activeClassName="active">  
             <ListItemText style={{color:"white"}}>About</ListItemText></NavLink> 
                
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/Gallery" exact activeClassName="active">  
          <ListItemText style={{color:"white"}}>Gallery</ListItemText></NavLink>
                
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/Favourite" exact activeClassName="active">  
          <ListItemText style={{color:"white"}}>Favourite</ListItemText></NavLink>
                
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/Sports" exact activeClassName="active">  
          <ListItemText style={{color:"white"}}>Sports</ListItemText></NavLink>
                
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <NavLink to="/Transportation" exact activeClassName="active">  
          <ListItemText style={{color:"white"}}>Vehicles</ListItemText></NavLink>
                
              </ListItemIcon>
            </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto",backgroundColor:"rgba(11, 123, 208, 0.349)" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
