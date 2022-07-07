import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import hari from './images/hari.jpeg';

import Grid from '@mui/material/Grid';
import Idli1 from './images/idli1.jpg';
import Idli2 from './images/idli2.jpg';
import Idli3 from './images/idli3.jpg';
import Idli4 from './images/idli4.jpg';
import Poori1 from './images/Poori1.jpg';
import Poori2 from './images/Poori2.jpg';
import Poori3 from './images/poori3.jpg';
import Poori4 from './images/poori4.jpg';
import Poori5 from './images/poori5.jpg';
import Poori6 from './images/poori6.jpg';
import Aapam1 from './images/aapam1.jpg';
import Aapam2 from './images/aapam2.jpg';

import Aapam3 from './images/aapam3.jpg';

import Aapam4 from './images/aapam4.jpg';

import Aapam5 from './images/aapam5.jpg';
import Aapam6 from './images/aapam6.jpg';
import Lunch1 from './images/lunch1.jpg';
import Lunch2 from './images/lunch2.jpg';
import Lunch3 from './images/lunch3.jpg';
import Lunch4 from './images/lunch4.jpg';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import './FavouriteCss.css';
import Dinner2 from './images/dinner2.jpg';
import Dinner1 from './images/dinner1.jpg';
import Dinner3 from './images/dinner3.jpg';
import Media from './Media';
import {
 
  Avatar,
  Button,
  Tab,
  Tabs,
 

 
} from "@mui/material";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Animated} from "react-animated-css";
import { NavLink } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Favourite() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
  
    <Box sx={{ display: 'flex' }}>
        
      <CssBaseline />
      
      
       
      
      <Drawer variant="permanent" open={open}>
      <Box sx={{background: 'rgb(3,20,71)',
background: `linear-gradient(280deg, rgba(3,20,71,1) 0%, rgba(0,190,152,1) 4%, rgba(18,5,87,1) 100%)`,height:"100vh"}} >

         <Toolbar>
          <IconButton
          
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,paddingTop:10,
              ...(open && { display: 'none',backgroundColor:'white' }),
            }}
          >
            <MenuIcon sx={{color:"white"}} />
          </IconButton>
          </Toolbar>
          <Typography sx={{display:'none',marginRight:15,marginLeft:"22px", paddingTop:"10px",... (open&&{display:"block"})}}>
<center><img src={hari} alt="im" height="190" width="190" style={{borderRadius:"10px"}}/></center>
          </Typography>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color:"white"}}/> : <ChevronLeftIcon sx={{color:"white"}} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
         
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 < a href ="#fb"><FastfoodIcon sx={{color:"white"}} /> </a>
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                 <a href="#fb" style={{color:"#92F9D0",fontSize:"18px"}}> Favourite Breakfast</a>
                  </ListItemText>
                  
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <a href="#fl"><RestaurantIcon sx={{color:"white"}}/> </a>
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, }}>
                 <a href="#fl" style={{color:"#92F9D0",fontSize:"18px"}}> Favourite Lunch</a>
                  </ListItemText>
                  
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <a href="#fd"><DinnerDiningIcon sx={{color:"white"}} /> </a>
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                 <a href="#fd" style={{color:"#92F9D0",fontSize:"18px"}}> Favourite Dinner</a>
                  </ListItemText>
                  
              </ListItemButton>

            </ListItem>
        
        </List>
        <Divider />
        <List>
         
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <NavLink to ='/Media' exactpath style={{color:"#9EF2FA",fontSize:"18px"}}> <LibraryMusicIcon sx={{color:"white"}} /> </NavLink> 
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                 <NavLink to ='/Media' exactpath style={{color:"#9EF2FA",fontSize:"18px"}}> Favourite Music</NavLink>
                  </ListItemText>
                  
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <NavLink to ='/Media' exactpath><OndemandVideoIcon sx={{color:"white"}}/> </NavLink> 
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <NavLink to ='/Media' exactpath> Favourite Videos</NavLink> 
                  </ListItemText>
                  
              </ListItemButton>

            </ListItem>
        
        </List>
        </Box>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1,}}>
        <DrawerHeader />
        <Typography variant='h4' sx={{textAlign:"center",marginBottom:"5vh"}}>
           <a id="fb"> </a>Favourite BreakFast
          </Typography>
        <Box sx={{ flexGrow: 1 }}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>

      <Grid container spacing={2} sx={{boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px",maxHeight:"80em"}}>

        <Grid item xs={8} md={8} sx={{paddingTop:"5vh"}}>
         
      
<Typography variant="h5" sx={{textAlign:"center"}}>
  Idli
</Typography>
<Typography paragraph sx={{textAlign:"justify",display:'flex',alignItems:"center",justifyContent:'center'}}>
<p>
          <p>1. The earliest mention of Idli is in a 10th Century Kannada text ‘Vaddaradhane’ as ‘iddalage’.</p>
          <p>2. Idli has countless variations as people of South India and Sri Lanka emigrated throughout the world.</p>
          <p>3. Idlis are also easily digestible, which strengthens the point of them being very healthy breakfast choices.</p>
          <p>4. An idli fills you up with fewer calories. Each idli contains 39 calories & contains no saturated fat or cholesterol.</p>
          <p>6. Idli has countless variations as people of South India and Sri Lanka emigrated throughout the world.</p></p>
        
          </Typography>
         
        </Grid>
        <Grid item xs={6} md={4} sx={{paddingTop:"5vh",background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`}}>
        <ImageList sx={{ width:450, height:250 }} rows={2} cols={3}>
     
     <ImageListItem>
       <img
         src={Idli1}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
        

       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Idli2}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Idli3}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Idli4}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Idli1}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Idli1}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
    
 </ImageList>
        </Grid>
        </Grid>
        </Animated>

        </Box>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>

        <Box sx={{ flexGrow: 1,p:0.2}}>
      <Grid container spacing={2} sx={{marginTop:"7vh",boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px",maxHeight:"200em"}}>
        <Grid item xs={6} md={4} sx={{display:"flex",justifyContent:'center',alignItems:'center',background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)` }}>
         

          <ImageList sx={{ width:450, height:450,paddingTop:5 }} rows={2} cols={3}>
     
     <ImageListItem>
       <img
         src={Aapam1}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
        

       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Aapam2}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Aapam3}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Aapam4}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Aapam5}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Aapam6}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
    
 </ImageList>
        </Grid>
        <Grid item xs={8} md={8}>
                 
<Typography variant="h5" sx={{textAlign:"center"}}>
  Aappam
</Typography>
<Typography paragraph sx={{textAlign:"justify",display:"flex",justifyContent:'center',alignItems:'center'}} xs={3} md={5} lg={8}>
<p><ul>
            <li>Beneficial in gastric problems, acidity and constipation: When it comes to your diet, you should remember that abstinence is essential because eating as much of the healthiest food as possible can help you consume the calories you need and even give you these gastric problems. In this case, Appam in breakfast can be beneficial for people with gastric issues like constipation. Idli uttapam, Rawa dosa, poha, and upma, like appam, can be a good breakfast option. They are low fried, high calorie and rich in nutrients. Also, by using less oil and more vegetables, you can further increase the goodness of your South Indian breakfast.</li>
            <li>Boost Your Immunity And Overall Health: Traditional ingredients used in making South Indian dishes include spices like curry leaves, turmeric, rai, etc., all of which have healing and medicinal properties. In this way, it can heal your hurt and pain as well. Spices contain fresh and traditional ingredients (used in South Indian cuisine). Simultaneously, it is also beneficial in strengthening the immune system. At the same time, its antioxidant properties are also considered very helpful for the body. Besides, you can also include Appam in the post-workday diet. For people with leaky gut or Hashimoto's thyroid or any autoimmune condition, it is a great alternative meal.</li>
            <li>Help you lose weight: Nuts, veggies and pulses used extensively in South Indian foods make for an excellent source of fibre, complex carbohydrates and protein. All this makes it a balanced, healthy snack, which is easy to digest. Consuming appam can remain satisfied and energetic for a long time. Thus, we avoid unnecessary food. This will not make you hungry again and will also help in losing weight. At the same time, most of the items from this dish are also low in calories, making an excellent snack for those who want to lose weight.</li>
            <li>Beneficial for intestinal health: Starting the day with just the right food, your whole day can pass quickly and energetically. Appam is perfectly healthy and a perfect meal for a nutritious breakfast. Many foods from South Indian cuisine such as Appam are fermented and thus enriched with Vitamin B-12. So they are easy to digest and are suitable for your intestine. In this way, it is beneficial for your entire digestive system in every way.</li>
           
          </ul></p>        
          </Typography>
        </Grid>
        </Grid>
        </Box>
</Animated>

        <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2} sx={{marginTop:"7vh",boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px",maxHeight:"200em"}}>
        <Grid item xs={8} md={8}>
         
        <Fade big cascade>
<Typography variant="h5" sx={{textAlign:"center"}}>
  Poori
</Typography>
</Fade>
<Fade cascade>
<Typography paragraph sx={{textAlign:"justify",display:"flex",justifyContent:'center',alignItems:'center',paddingLeft:'2vh'}}>
<p>
              <p>1. Poori or Puri is a traditional Indian fried bread that is delicious to enjoy with almost any main dish. It’s a simple unleavened bread made from just whole wheat flour, salt, and water. Here I share my poori recipe with step-by-step photos and the best tips for making puri at home – crispy, fluffy, and soft and I bet you’ll love making homemade puri to enjoy with your favorite meals!</p>

              
             <p>2. A basic poori recipe is made with whole wheat flour, salt, and water. These are only three ingredients you need. A bit of oil or ghee can be added to the whole wheat dough optionally. The dough is not leavened or fermented, so it’s a wonderfully quick and easy bread to make.</p> 
             <p>3. Small balls of dough are rolled and flattened, and quickly fried in hot oil. The poori puffs up to create light, crispy pillows that just beg to be bitten into. Inside is soft and tender, and perfect for using to scoop up a hearty curry.</p> 
            <p> 4. Make a batch of this poori recipe for a snack now or for your dinner tonight, then have leftovers with breakfast in the morning. There is never a wrong time to enjoy soft and crispy poori!.</p> 
             
            </p>        
          </Typography>
          </Fade>
        </Grid>
        <Grid item xs={6} md={4} sx={{display:"flex",justifyContent:'center',alignItems:'center',background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`}}>
          <Fade cascade>

        <ImageList sx={{ width:450, height:250 }} rows={2} cols={3}>
     
     <ImageListItem>
       <img
         src={Poori1}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
        

       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Poori2}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Poori3}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Poori4}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Poori5}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
     <ImageListItem>
       <img
         src={Poori6}
        
         alt="hello"
         loading="lazy"
         className="hover-zoom1"
       />
     </ImageListItem>
    
 </ImageList>
 </Fade>
        </Grid>
        
        </Grid>
        </Box>



        <Box sx={{ flexGrow: 1, p:2 }}>
        <Typography variant="h4" sx={{textAlign:"center",paddingTop:"7VH",paddingBottom:"5vh"}}>
 <a id="fl"></a> My Favourite Lunch
</Typography>
<Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
<div>
<Zoom cascade>
        <Grid container spacing={1}>

        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px"}}>
       <div>
     <div style={{background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`,height:"34vh",maxHeight:"34vh",paddingTop:"5vh"}}>
        <ImageListItem >
       <img
         src={Lunch1}
        style={{borderRadius:"10px",}}
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
       </ImageListItem>
       </div>
       <Typography variant="h5" sx={{textAlign:"center",paddingTop:"2VH",paddingBottom:"2vh"}}>
       KALA CHANA - Black Garbanzo beans with Coconut
</Typography>

        <Typography paragraph sx={{textAlign:"justify",display:"flex",justifyContent:'center',alignItems:'center'}}>
        <p>Kala Chana, simply translated to Black Garbanzo beans or gram, is the lesser known of the two Garbanzo beans, but is super healthy. Its also known as Bengal Gram. These are bought dry and you have to soak it overnight for best results. This is also known as Chana Bhaji.
                    These are power packed with protein, has tons of fiber and is low in calories which makes it perfect for healthy eating. If you take the time to sprout these, it has a lot more nutritional value.</p>

        </Typography>
        </div>
        </Grid>
      
       
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px"}}>
        <div>
        <div style={{background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`,height:"34vh",maxHeight:"34vh",paddingTop:"3vh"}}>
        <ImageListItem>
       <img
         src={Lunch2}
        style={{borderRadius:"10px"}}
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
       </ImageListItem>
       </div>
       <Typography variant="h5" sx={{textAlign:"center",paddingTop:"2VH",paddingBottom:"2vh"}}>
         Briyani
</Typography>

        <Typography paragraph sx={{textAlign:"justify",display:"flex",justifyContent:'center',alignItems:'center'}}>
        <p>Biryani is one of the most loved dishes in India. Every state here has created its own version; right from Hyderabadi, Lucknowi, Kolkata, Dindigul, Sindhi and many more. The fondness for this dish is truly unmatchable. Biryani is made up of – freshly cooked aromatic rice, marinated with a combination of spices and the meat of your choice (Chicken, Mutton, Fish or Egg). We all can agree that there is no love greater than the LOVE FOR BIRYANI! Curly Tales is taking you on the food tour of Biryani and giving you all the information that you need to know about your favorite dish Biryan</p>

        </Typography>
        </div>
        </Grid>
       
      
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px",maxWidth:"100em",p:2}}>
        <div>   
     <div style={{background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`,height:"34vh",maxHeight:"34vh",paddingTop:"3vh"}}>
        <ImageListItem>
       <img
         src={Lunch3}
        style={{borderRadius:"10px"}}
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
       </ImageListItem>
       </div>
       <Typography variant="h5" sx={{textAlign:"center",paddingTop:"2VH",paddingBottom:"2vh"}}>
       Kottu Parotta
</Typography>

        <Typography paragraph sx={{textAlign:"justify"}}>
        <p style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
                Vegetable Kothu Parotta - a shredded flaky multi-layered Indian flatbread stir-fried with assorted vegetables and essential spices. It is incredibly popular street food in South Indian state Tamil Nadu and Sri Lanka. The name literally translates as "shredded parotta". Perfect for a light weeknight dinner and a great way to use up leftover parottas.</p>
           <p style={{}}> Kothu Parotta can be prepared with assorted vegetables / egg / chicken lamb. </p>
           <p>There are two common variations available. One is the addition of curry sauce, the other without sauce. It is one versatile dish that can be prepared with any available vegetables, leftover parottas and/or leftover curry sauce. Though this dish is available in most of the restaurants now, street-side stalls are most preferred. This is a great way to transform left-over parottas into totally a new dish without much effort. Check out one more interesting street dish Chilli Parotta made with left over parotta.</p>

        </Typography>
        </div>    
</Grid>


<Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{boxShadow: '1px 3px 11px 7px rgba(0,0,0,0.42)',borderRadius:"10px"}}>
<div>
<div style={{background: `#053b48`,
background: `linear-gradient(90deg,#053b48 0%, #020b38 80%)`,height:"34vh",maxHeight:"34vh",paddingTop:"3vh"}}>

<ImageListItem>
       <img
         src={Lunch4}
        style={{borderRadius:"10px"}}
         alt="hello"
         loading="lazy"
         className="hover-zoom"
       />
       </ImageListItem>
       </div>
       <Typography variant="h5" sx={{textAlign:"center",paddingTop:"2VH",paddingBottom:"2vh"}}>
       Tomato Rice
</Typography>

        <Typography paragraph sx={{textAlign:"justify",}}>
        <p>Thakkali Sadam is a popular rice dish from the Tamil Nadu cuisine. It is a slightly spicy rice dish that is made with tomato, spices and rice. In the Tamil language, ‘thakkali‘ means tomato and ‘sadam‘ is rice.</p>
              <p>I love to make a big batch of this tomato rice and serve it for lunch all week long, as it is an ideal dish for packing in a tiffin.</p>
              <p>If you are looking for a quick recipe to make meal that is delicious and nutritious, look no further than this simple tomato rice! It requires only one pot, leaving very little clean up.</p>

        </Typography>
        </div>
</Grid>

        </Grid>
        </Zoom>
        </div>
</Animated>
        </Box>

        <Box sx={{ flexGrow: 1, p:2 }}>
        <Typography variant="h4" sx={{textAlign:"center",paddingTop:"7VH",paddingBottom:"5vh"}}>
 <a id="fd"></a> My Favourite Dinner
</Typography>
<Zoom cascade>
        <Grid container spacing={2}>
          
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Card sx={{ maxWidth: 500 }}>
        <div class="cards">
              <div class="face face1">
                <div class="content">
                  <span class="stars"></span>
                  <h2 class="python">Veg Fried Rice</h2>
                  <p class="python"> indian cuisine has been influenced with many overseas cuisines, which has adapted to the local taste buds. fried rice recipe is one such adapted version from the asian cuisine transformed to a popular street food recipes. it has many variations and this recipe post is dedicated to the simple and easy veg fried recipe.<br/>basically, the fried rice recipe is generally made with egg omelette and choice meat added to it with finely chopped veggies. it makes it a complete meal and balanced diet meal in the south-east asian cuisine. having said that, the same recipe has been improvised in india to meet to the local dietary requirements, especially by skipping egg yolk and meat protein.</p>
                </div>
              </div>
              <div class="face face2">
                <img src={Dinner2} alt="dinner" height="280vh"/>
              </div>
            </div>
</Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card sx={{ maxWidth: 500 }}>
          <div class="cards">
              <div class="face face1">
                <div class="content">
                  <span class="stars"></span>
                  <h2 class="java">Puthina Rice</h2>
                  <p class="java">an easy and flavoured rice based recipe made with mint leaves, coriander leaves and mixed vegetables. traditional pulao or pulav are made with combination of mint and coriander leaves, but this recipe has more pudina leaves in it. it is an ideal lunch box or tiffin box recipe which can be served as it is or with yoghurt based raita.<br/>
                    mostly pudina rice and pudina chutney is prepared because of its great taste, it also has to offer several health benefits. mint pulao is highly recommended during indigestion as it is a good source of antioxidants and phytonutrients. secondly, it is also served for common cold or running nose problem.lastly, mint leaves are good source of vitamin and minerals.</p>
                </div>
              </div>
            
              <div class="face face2">
               
                <img src={Dinner1} height="300vh"/>
                
              
              </div>
              
            </div>
         </Card>

</Grid>
<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
<Card sx={{ maxWidth: 500 }}>
<div class="cards">
              <div class="face face1">
                <div class="content">
              
                  <h2 class="cSharp">Jeera Rice</h2>
                 
                
                  <p class="cSharp">an easy and flavoured rice recipe made with cumin seeds, ghee and basmati rice. it is typically served with choice of dal recipes, preferably dal tadka recipe, but can be served with any gravy based curries.<br/>the jeera rice recipe is not rocket science and yet i would like to share some tips and suggestions to it. firstly, the recipe looks very appealing and appetite if made with long grain basmati rice. but not mandatory and can also be cooked with sona masuri or any short grain edible rice. secondly, if you are opting for a pressure cooker method, add a generous amount of cooking oil or olive oil while preparing. adding oil ensures the rice cooks perfectly and does not turn sticky and mushy. lastly, the rice can be served with any north indian curries and gravies but my personal choice is kadai paneer and dal fry recipe.</p>
                 
                </div>
              </div>
              <div class="face face2">
                <img src={Dinner3} alt="dinner"/>
              </div>
            </div>   
</Card>
</Grid>
          </Grid>
          </Zoom>
          </Box>
      </Box>
    </Box>
    
  );
}
