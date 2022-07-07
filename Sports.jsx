import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './SportsCss.css';
import Spain from './images/spain.jpg';
import Brazil from './images/brazil.jpg';
import Belgium from './images/belgium.jpg';
import Messi from './images/messi.jpg';
import Ronald from './images/ronaldo.jpg';
import Pele from "./images/pele.jpg";
import India from './images/india.jpg';
import Newz from './images/newzland.jpg';
import Auz from './images/australia.jpg';
import Dhoni from './images/dhoni.jpg';
import Maradona from "./images/Maradona.jpg" ;
import Willaiam from './images/williamson.jpg';
import Starc from "./images/starc.jpg" ;
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { LightSpeed } from 'react-reveal';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import ProgressBar from "react-progressbar-on-scroll";

const drawerWidth = 240;

export default function Sports() {
  return (
   
    <Box sx={{ display: 'flex' }}>
    
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop:"16vh",
            background: 'rgb(3,20,71)',
background: `linear-gradient(280deg, rgba(3,20,71,1) 0%, rgba(0,190,152,1) 4%, rgba(18,5,87,1) 100%)`,height:"100vh"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
         
            <ListItem>
              <ListItemButton>
                <ListItemIcon >
                <a href="#cricket"> <SportsCricketIcon sx={{color:'white'}} /> </a> 
                </ListItemIcon>
               
                <a href="#cricket">  <ListItemText sx={{color:'white'}}>
              Cricket
                    </ListItemText></a>
                 
              </ListItemButton>

            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                <a href="#Cricket"> <SportsCricketIcon sx={{color:'white'}}/> </a> 
                </ListItemIcon>
               
                <a href="#crickett">  <ListItemText sx={{color:'white'}}>
              Top 3 Cricket Teams
                    </ListItemText></a>
                 
              </ListItemButton>

            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                <a href="#Cricket"> <SportsCricketIcon sx={{color:'white'}} /> </a> 
                </ListItemIcon>
               
                <a href="#cplayers">  <ListItemText sx={{color:'white'}}>
              Top 3 Cricket Players
                    </ListItemText></a>
                 
              </ListItemButton>

            </ListItem>
        <ListItem>
            <ListItemButton>
              
                <ListItemIcon>
                <SportsSoccerIcon sx={{color:'white'}}/>
                </ListItemIcon>
                <a href='#football'> <ListItemText sx={{color:'white'}}>
                   Football
                </ListItemText></a>
              
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
              
                <ListItemIcon>
                <SportsSoccerIcon sx={{color:'white'}}/>
                </ListItemIcon>
              <a href='#ft'>  <ListItemText sx={{color:'white'}}>
                  Top 3 Football Teams
                </ListItemText></a>
              
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
              
                <ListItemIcon>
                <SportsSoccerIcon sx={{color:'white'}}/>
                </ListItemIcon>
               <a href='#fp'><ListItemText sx={{color:'white'}}>
                 Top 3 Football Players
                </ListItemText></a> 
              
            </ListItemButton>
        </ListItem>
        </List>
      </Drawer>
    
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
       
        <div className='sports' sx={{marginTop:"40vh"}}>
    <ProgressBar
    color="pink"
    gradient={true}
    colorGradient="yellow"
    height={5}
  />
        <Box sx={{ flexGrow: 1,p:2 }}>
<Bounce bottom>
            <Typography variant='h3' sx={{textAlign:"center" ,textShadow:" 2px 3px 4px ",marginBottom:"5vh"}}>
              <a id="football"></a> Football
           
            </Typography>
            <Typography variant='h4' sx={{textAlign:"center" ,textShadow:" 2px 3px 4px ",marginBottom:"5vh"}}>
              <a id="ft"></a> Football Teams
           
            </Typography>

            </Bounce>
            <LightSpeed left>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          
        <div class="card1 d-flex position-relative flex-column">
            
            <div class='imgContainer'>
                
                <img src={Brazil}/>
            </div>
            <div class="content" style={{textAlign:"justify"}}>
                <h2>Brazil</h2>
                <p>Brazil is also the only country to have qualified for every FIFA World Cup and the sole country to have recorded the most goals of all time. Brazil has also produced some of the world's top players, such as Ronaldo de Assis Moreira, better known as Ronaldinho; Edson Arantes do Nascimento, better known as Pelé; and Neymar da Silva Santos Junior, better known as Neymar.

                    Marta Vieira da Silva, also known as Marta, is a female footballer of Brazil’s women's football team who maintains the record for most goals scored during the FIFA Women's World Cup tournament.
                    
                    It's difficult to pinpoint exactly what makes Brazil so excellent at football. It's likely that it's just a game of numbers. Brazil has one of the world's largest populations and is a wonderful breeding place for players among a vast devoted audience. Futsal is quite popular in Brazil. Compact pitches, five-a-side teams, and heavier balls emphasize close control, technique, and space usage.
                    
                    From Rio de Janeiro to Amazonas, Brazilians practiced barefoot on the streets, and it's a unique brand of football that's played on Brazil's bumpy concrete streets. Talented players must compete against one another to gain the attention of clubs, and so this intense drive is reflected in Brazil's passionate club rivalries and violent derbies like as the Fla-Flu, the Paulista, and the Derby of Millions. Finally, it is impossible to overestimate the significance of coming from a winning culture. Success invariably fosters more success.
                    
                    </p>
            </div>
        </div>




        </Grid>
        <Grid item xs={6} md={4}>
        <div class="card1 d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src={Spain}/>
            </div>
            <div class="content"  style={{textAlign:"justify"}}>
                <h2>Spain</h2>
                <p>Though they missed the inaugural World Cup in 1930, Spain qualified for the next one. Their first appearance in the competition was an unmitigated success, as they managed to knock out Brazil in the round of 16. They won the game 3-1, scoring all three of their goals within an 11-minute period in the first half. In the quarter-finals, they drew 1-1 in the first match against hosts and eventual champions Italy, but lost the replay 0-1.</p>
                <p>After failing to qualify for the next two World Cups, the Spanish Football Federation decided to appoint the legendary Helenio Herrera as coach. In the qualifiers for the 1960 European Championship, they advanced to the quarter-finals by defeating Poland 7-2 on aggregate. However, they forfeited their tie against the USSR due to dictator Franco’s political disagreements with the Soviets.</p>
                <p>This appearance seemed to breathe new life into the Spanish team. In the Euro 1984 qualifiers, they entered the last match against Malta needing a victory by 11 goals or more to claim the top spot in their group. Though they only lead 3-1 at half time, they went on to score nine goals in second half, cinching the top spot and qualifying for the final tournament. The second-placed Netherlands missed out on the tournament altogether.</p>
            </div>
        </div>



        </Grid>
        <Grid item xs={6} md={4}>
       
        <div class="card1 d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src={Belgium}/>
            </div>
            <div class="content" style={{textAlign:"justify"}}>
                <h2>Belgium</h2>
                <p>The post-war period brought additional difficulties for Belgium. Out of eight major tournaments from 1950 to 1968, the team qualified for just a single one: the 1954 World Cup. After a 4-4 opener against England, Belgium lost 1-4 to Italy and failed to qualify for the knockout rounds. In the 1958 World Cup qualifiers, they were drawn as a “lucky loser” and given the chance to play against Israel, but they refused as they felt that the second chance was beneath them.</p>
                <p>By the late ‘70s, Belgium was ready to move up to the big leagues. Under the leadership of coach Guy Thys, they proved their mettle by coming in first in a tough Euro 1980 group that included Italy, England, and Spain. In the final match, they again lost to West Germany on an 88’ minute goal from Horst Hrubesch. This generation of players -- led by Jean-Marie Pfaff, Eric Gerets, and Jan Ceulemans -- would later become known as the “golden generation.”</p>
            </div>
        </div>
            
    
       



       </Grid>
        </Grid>
        </LightSpeed>
        <Bounce top>
        <h2 style={{textAlign:"center" ,textShadow:" 2px 3px 4px ", marginBottom: "10vh",paddingTop:"5vh"}}>
          <a id="fp"></a>Top 3 Foot Ball Players</h2>
          </Bounce>
<LightSpeed right>
        <Grid container spacing={2}  >
        <Grid item xs={6} md={3.3} id="card1">
          
        <div class="containers" id="fbp" style={{marginTop:"4vh" }}>
          
                   <h2>Lionel Messi</h2>
                   <div class="imgcontainer" style={{  display: 'flex',
  
    justifyContent: 'center',}}>
                    <img src={Messi} class="rounded img-fluid" alt='lionel' width="240vh"/>
                   </div>
                   <br/>
                   <div class="content">
                       <table>
                           <tr>
                               <th>
                                 Name: 
                               </th>
                               <td>Lionel Andress Messi</td>
                           </tr>
                           <tr>
                            <th>
                                Date of birth: 
                            </th>
                            <td>24 June 1987 (age 34)</td>
                        </tr>
                        <tr>
                            <th>
                                Place of birth:
                            </th>
                            <td>Rosario, Santa Fe, Argentina</td>
                        </tr>
                        <tr>
                            <th>
                                Height:
                            </th>
                            <td>1.69 m (5 ft 7 in)</td>
                        </tr>
                       </table>
                       <br/>
                       <p>Messi started playing football as a boy and in 1995 joined the youth team of Newell’s Old Boys (a Rosario-based top-division football club). Messi’s phenomenal skills garnered the attention of prestigious clubs on both sides of the Atlantic. At age 13 Messi and his family relocated to Barcelona, and he began playing for FC Barcelona’s under-14 team. He scored 21 goals in 14 games for the junior team, and he quickly graduated through the higher-level teams until at age 16 he was given his informal debut with FC Barcelona in a friendly match.</p>
                   </div>
               </div>
           




        </Grid>
        <Grid item xs={6} md={3.3} id="card2">
       
                   <h2>Ronaldo</h2>
                <div class="imgcontainer" style={{  display: 'flex',
  
  justifyContent: 'center',}}>
                    <img class="rounded" src={Ronald} width="260vh"/>
                </div>
                <br/>
                <div class="content">
                    <table>
                        <tr>
                            <th>
                              Name: 
                            </th>
                            <td>Cristiano Ronaldo dos Santos Aveiro</td>
                        </tr>
                        <tr>
                         <th>
                             Date of birth: 
                         </th>
                         <td>5 February 1985 (age 37)</td>
                     </tr>
                     <tr>
                         <th>
                             Place of birth:
                         </th>
                         <td>Funchal, Madeira, Portuga</td>
                     </tr>
                     <tr>
                         <th>
                             Height:
                         </th>
                         <td>1.87 m (6 ft 2 in)</td>
                     </tr>
                    </table>
                    <br/>
                    <p>Cristiano Ronaldo dos Santos Aveiro was born on February 5, 1985, in Madeira, Portugal to Maria Dolores dos Santos Aveiro and José Diniz Aveiro. Cristiano has an elder brother, Hugo and two elder sisters, Elma and Liliana Cátia. His name was inspired by the former US-president, Ronald Reagan, whom his father was influenced by.
                        .</p>
                        

                        </div>
             



        </Grid>
        <Grid item xs={6} md={3.3} id="card3">
       
                <h2>Pele</h2>
                <div class="imgcontainer" style={{  display: 'flex',
  
  justifyContent: 'center',}}>
                   <img src={Pele} width="250vh"/>
                </div>
                <br/>
                <div class="content">
                    <table>
                        <tr>
                            <th>
                              Name: 
                            </th>
                            <td>Pele</td>
                        </tr>
                        <tr>
                         <th>
                             Date of birth: 
                         </th>
                         <td>23 October 1940 (age 81)</td>
                     </tr>
                     <tr>
                         <th>
                             Place of birth:
                         </th>
                         <td>Edson Arantes do Nascimento</td>
                     </tr>
                     <tr>
                         <th>
                             Height:
                         </th>
                         <td>	1.73 m (5 ft 8 in)</td>
                     </tr>
                    </table>
                    <br/>
                    <p>Goalscorer supreme, Pele was also the focal point of attack for club and country. His goalscoring stats are simply incredible; he is the only player to score more than 1200 senior goals.</p>
                   <p>Pele, even more so than all the other legends on this list, brought his best game when it mattered the most. The youngest ever player (17 years and 249 days) to score in a World Cup, Pele scored twice in the 1958 edition's final against Sweden.</p>
                </div>
           
            
    
       



       </Grid>
        </Grid>
        </LightSpeed>
        
        <Flip right>
        <Container maxWidth="lg" sx={{paddingTop:"0vh",marginTop:"15vh"}} id="ma">
<Grid container>
<Grid xs={4} sx={{paddingTop:"9vh"}}>


<img src={Maradona}width="300px" height="500px" class="img-rounded img-fluid" />


</Grid>
<Grid xs={8}>

<div class="pa" style={{marginLeft:"3vh" , textAlign:"justify", fontFamily: "Georgia, Times New Roman, Times, serif" ,fontSize:"15px"}}>
        <h1>Diego Armando Maradona</h1>
        <br/>
        <p>Diego Maradona, in full Diego Armando Maradona, (born October 30, 1960, Lanus, Buenos Aires, Argentina—died November 25, 2020, Tigre, Buenos Aires), Argentine football (soccer) player who is generally regarded as the top footballer of the 1980s and one of the greatest of all time. Renowned for his ability to control the ball and create scoring opportunities for himself and others, he led club teams to championships in Argentina, Italy, and Spain, and he starred on the Argentine national team that won the 1986 World Cup.</p>
        <p>Maradona displayed football talent early, and at age eight he joined Las Cebollitas (“The Little Onions”), a boys’ team that went on to win 136 consecutive games and a national championship. He signed with Argentinos Juniors at age 14 and made his first-division debut in 1976, 10 days before his 16th birthday. Only four months later he made his debut with the national team, becoming the youngest Argentine ever to do so. Although he was excluded from the 1978 World Cup-winning squad because it was felt that he was still too young, the next year he led the national under-20 team to a Junior World Cup championship.</p>
    <p>Maradona moved to Boca Juniors in 1981 and immediately helped them gain the championship. He then moved to Europe, playing with FC Barcelona in 1982 (and winning the Spanish Cup in 1983) and then SSC Napoli (1984–91), where he enjoyed great success, raising the traditionally weak Naples side to the heights of Italian football. With Maradona the team won the league title and cup in 1987 and the league title again in 1990. Maradona’s stint with Napoli came to an end when he was arrested in Argentina for cocaine possession and received a 15-month suspension from playing football. Next he played for Sevilla in Spain and Newell’s Old Boys in Argentina. In 1995 he returned to Boca Juniors and played his last match on October 25, 1997.</p>    
    </div>

</Grid>


</Grid>




        </Container>
        </Flip>
        <h2 style={{textShadow: "1px 2px 3px",textAlign:"center",marginTop:"10vh"}}><a id="cricket"></a>Cricket</h2>
        <center><h2 style={{marginBottom:"5vh", textShadow: "0px 1px 2px"}}><a id="crickett"></a>Top 3 Cricket Teams</h2></center>

        <Zoom right>
        <Grid container>
          <Grid xs={4}>
          <div class="card1 d-flex position-relative flex-column">
         
         <div class='imgContainer'>
             
             <img src={Auz} alt='aus'/>
         </div>
         <div class="content">
             <h2>Australia</h2>
             <p>The Australian Cricket Team is one of the oldest national teams in cricketing history. They were involved in the first-ever Test match in 1877, first-ever ODI in 1971, first-ever T20I in 2005 and the first-ever Day/Night Test in 2015. They have been participating in all the multi-nation tournament organized by the ICC over the years.
                 </p>
                 <p>Australian cricket team has participated in every edition of the ICC Cricket World Cup since 1975. They have won the title most number of times, which is 5 including a hat trick of titles from 1999 to 2007. The two other victories were in 1987 and 2015. They were Runners Up in the inaugural edition in 1975 and 1996. They have co-hosted a World Cup tournament with New Zealand in 1992 and 2015.</p>
         </div>
     </div>

          </Grid>
          <Grid xs={4}>
          <div class="card1 d-flex position-relative flex-column">
         <div class='imgContainer'>
             <img src={India} alt='india'/>
         </div>
         <div class="content">
             <h2>India</h2>
             <p>The Indian team was an integral part of international cricket events since they played their first-ever Test match way back in 1932. They have participated in every multi-nation tournament organized by the ICC over the years.
             </p>
                <p>The Indians kick started their T20 World Cup campaign with a win in the inaugural edition of the tournament held in South Africa. They later played another Final in the 2014 World T20 when they lost to Sri Lanka cricket team. The 2016 edition of the tournament was conducted in India.</p>
                
                <p>The ICC Champions Trophy (earlier known as ICC Knockout Trophy) is the most successful tournament for the subcontinent team as they won it twice (once shared) and finished as Runners Up twice. They lost to New Zealand in the second edition in 2000 that was conducted in Kenya.



                    They shared the trophy with Sri Lanka in the next edition in 2002 as the Final could not be completed due to persistent rain even on the reserve day. Later, they became single champions for the first time in 2013 in England and Wales. However, they lost the Final against Pakistan cricket team in the 2017 edition in the same nation. India has hosted the Champions Trophy in 2006.
                </p>
                      </div>
     </div>

          </Grid>
          <Grid xs={4}>
          <div class="card1 d-flex position-relative flex-column">
         <div class='imgContainer'>
             <img src={Newz} alt='newz'/>
         </div>
         <div class="content">
             <h2>Newzland</h2>
             <p>It was 15–17 February 1894, the first team representing New Zealand played New South Wales at Lancaster Park in Christchurch.

                They won by 160 runs. Hence, thereafter the New Zealand Cricket Council was formed by the end of 1894. The cricket fantasy and craze never stopped.</p>
             <p>In the year 1930, Black Caps played their first test cricket against England in Christchurch and became the 5th country to play Test cricket.

                The first victory of test cricket by New Zealand was in 1956 against the West Indies at Eden Park in Auckland. The first ODI was played against Pakistan in Christchurch in the 1972–73 season. They were named Black Caps in 1998.</p>    
            
            <p>
                Until 11 January 2019, New Zealand has played 1296 Internationals, winning 488, losing 589, tying 11 and drawing 165 matches while 43 matches ended yielding no result. The team holds the 3rd position in Tests and ODI’s and 6th in T20 as per ICC. New Zealand, in 2015 for the very first time they reached finals in the ICC Cricket World Cup after beating South Africa in the semi-final in 2015.
            </p>
            </div>
            </div>
          





          </Grid>
        </Grid>
        </Zoom>
        <Zoom bottom>
        <h2 style={{textAlign:"center",textShadow: "2px 3px 4px",marginBottom:"7vh",paddingTop:"5vh" }}><a id="cplayers"></a>Top 3 Cricket Players</h2>
        <Grid container spacing={2} sx={{marginTop:"10vh",paddingTop:"5vh"}} >
        <Grid item xs={6} md={3.3} id="card1">
          
        <div class="containers" id="fbp" style={{marginTop:"4vh" }}>
          
                   <h2>Dhoni</h2>
                   <div class="imgcontainer" style={{  display: 'flex',
  
    justifyContent: 'center',}}>
                    <img src={Dhoni} class="rounded img-fluid" alt='lionel' width="240vh"/>
                   </div>
                   <br/>
                   <div class="content">
                   <table>
                        <tr>
                            <th>
                              Name: 
                            </th>
                            <td>Mahendra Singh Dhoni</td>
                        </tr>
                        <tr>
                         <th>
                             Date of birth: 
                         </th>
                         <td>	7 July 1981 (age 40)</td>
                     </tr>
                     <tr>
                         <th>
                             Batting:
                         </th>
                         <td>	Right-handed</td>
                     </tr>
                     <tr>
                         <th>
                             Height:
                         </th>
                         <td>	1.80 m (5 ft 11 in)</td>
                     </tr>
                     <tr>
                        <th>
                            Role
                        </th>
                        <td>Wicket-keeper batsman</td>
                    </tr>
                    </table>
                    <br/>
                    <ul>
                        <li> Dhoni is the only captain to have won three ICC trophies -- T20 World Cup in 2007, ODI World Cup in 2011 and the ICC Champions Trophy in 2013.</li>
                        <li> Dhoni is the only captain to have won three ICC trophies -- T20 World Cup in 2007, ODI World Cup in 2011 and the ICC Champions Trophy in 2013.</li>
                        <li>Dhoni last played for India in the 2019 World Cup semi-final against New Zealand in July 2019.</li>
                        <li>Dhoni fell for a duck in his debut match for India -- an ODI against Bangladesh at Chattogram on December 23, 2004.</li>
                        <li>Dhoni is the fifth most successful wicket-keeper in Tests with 294 dismissals -- 256 catches and 38 stumpings. He is the third most successful glovesman in ODIs with 444 dismissals in 350 games, including 321 catches and 123 stumpings.</li>
                        <li>Chennai Super Kings Captain Dhoni is the most successful wicket-keeper in the IPL with 152 dismissals in 208 games -- 113 catches and 39 stumpings.</li>
                        <li>Dhoni wore jersey No 7 during his career. He has a special preference for the number 7 since his birthday falls on July 7. July too is the 7th month. So, the number seven keeps repeating in various forms for Dhoni.</li>
                    </ul>
                   </div>
               </div>
           




        </Grid>
        <Grid item xs={6} md={3.3} id="card2">
       
        <h2>Williamson</h2>
                <div class="imgcontainer" style={{  display: 'flex',
  
  justifyContent: 'center',}}>
                    <img class="rounded" src={Willaiam} width="260vh"/>
                </div>
                <br/>
                <div class="content" style={{textAlign:"Justify"}}>
                <table>
                     <tr>
                         <th>
                           Name: 
                         </th>
                         <td>	Kane Stuart Williamson</td>
                     </tr>
                     <tr>
                      <th>
                          Date of birth: 
                      </th>
                      <td>	8 August 1990 (age 31)</td>
                  </tr>
                  <tr>
                      <th>
                          Batting:
                      </th>
                      <td>Right-handed</td>
                  </tr>
                  <tr>
                      <th>
                          Height:
                      </th>
                      <td>	5 ft 8 in (1.73 m)</td>
                  </tr>
                  <tr>
                    <th>
                        Role:
                    </th>
                    <td>Top-order batsman</td>
                </tr>
                 </table>
                 <br/>
           
                    
                    <li>Kane Williamson are a sensitive and emotional person. The hard knocks of this world have more effects on Kane Williamson than they have on most other people, and Kane Williamson lose some of the enjoyment of life in consequence. What other people say and think of Kane Williamson is taken by Kane Williamson to heart.</li>
                <li>Kane Williamson are having the feelings of confidence and optimism. Kane Williamson always feel that things will turn out well and have the ability to make this come to pass. Extremely kind and tolerant of others, Kane Williamson are also very practical, and can gain complete understanding of total concepts from the most minor detail.</li>
                <li> Kane Williamson are highly sympathetic, which makes Kane Williamson a good friend. Kane Williamson are loyal and patriotic and are thus a first class citizen. Kane Williamson are, or would be a most lovable parent.</li>
                <li>Kane Williamson like to share Kane Williamson's knowledge with others and this is where Kane Williamson actually start to learn as dissemination of knowledge will help Kane Williamson in remembering things in a better manner. </li>
            
                     

                        </div>
             



        </Grid>
        <Grid item xs={6} md={3.3} id="card3">
       
                <h2>Starc</h2>
                <div class="imgcontainer" style={{  display: 'flex',
  
  justifyContent: 'center',}}>
                <img src={Starc}height="180vh" width="250vh" alt='starc'/>
                </div>
                <br/>
                <div class="content">
                <table>
                     <tr>
                         <th>
                           Name: 
                         </th>
                         <td>	Mitchell Aaron Starc</td>
                     </tr>
                     <tr>
                      <th>
                          Date of birth: 
                      </th>
                      <td>	30 January 1990 (age 32)</td>
                  </tr>
                  <tr>
                      <th>
                          Bowling:
                      </th>
                      <td>	Left-arm fast</td>
                  </tr>
                  <tr>
                      <th>
                          Height:
                      </th>
                      <td>	1.97m (6 ft 6 in)</td>
                  </tr>
                 </table>
                 <br/>
                 <ul>
                     <li>Starc began his career as a wicketkeeper before being convinced to quit the gloves and turn into a fast bowler. He idolized Adam Gilchrist.  When Starc had initially started playing cricket as a child, he played as a wicketkeeper-batsman.</li>
                     <li>Starc was a junior cricketer for the Berala Sports Cricket Club in Sydney, Australia where he was known to keep wickets and bowl at the same time. He attended the Homebush Boys High School, representing the school’s 1st-grade cricket team.</li>
                     <li>Mitchell Starc is the first bowler to bowl in a day-night test match ever, and first bowler to use pink ball in a test match.</li>
                     <li>Starc earned his first international call-up for Australia’s 2010 tour to India, debuting in an ODI.</li>
                     <li>Starc made his Test debut for Australia on 1 December 2011 in the first Test of the two-Test series against New Zealand in Brisbane.

                    </li>
                    <li>Starc holds the record for the second fastest test fifty (32 balls) by an Australian. He did this during Australia’s second innings against South Africa on 4th December 2012.</li>
                 </ul>
                </div>
           
            
    
       



       </Grid>
        </Grid>
        </Zoom>
      </Box>
      
      </div>
    </Box>
   
    </Box>
    
    
  );
}
