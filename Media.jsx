import { Box,Grid } from "@mui/material";
import Appplayer from "./AppPlayer";
import Video from "./Fav Video";
import Reveal from 'react-reveal/Reveal';

export default function Media(){
    return(
        <Box sx={{paddingTop:"8.5vh"}} className="Musicbody">
            <Grid container>
                <Grid xs={12} sx={{height:"102vh",paddingTop:"3vh"}}>
                <Reveal effect="zoomInUp" timeout="3500">
<Appplayer/>
</Reveal>
                </Grid>
                <Grid xs={12} sx={{padding:"10vh"}}>
                <Reveal effect="fadeInUp" timeout="4000">
                    <Video/>
                    </Reveal>
                </Grid>
            </Grid>
        </Box>
    )
}