import { Typography, Card, Container, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CardStyles = makeStyles(() => ({
  main: {
    "&.MuiCardMedia-root": {
      backgroundColor: "burlywood",
    },
  },
  box: {
    display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
  },
  button:{
    "&.MuiButtonBase-root.MuiButton-root":{
      color:"#f36717",
      textTransform:"none",
      borderColor: "#f36717",
      fontFamily:"PT Mono"
    }
  }
}));

function Index({ apps }) {
  const classes = CardStyles();
  return (
    <Box className={classes.box}>
      {apps.map((app) => (
        <Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={app.image}
                alt="taking notes"
                className={classes.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Source Sans Pro",fontWeight:900}}>
                  {app.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontFamily:"Source Sans Pro",color:"grey"}}>
                  {app.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="outlined" className={classes.button} onClick={() => (window.location = app.website)}>
                Want to try
              </Button>
            </CardActions>
          </Card>
        </Card>
      ))}
    </Box>
  );
}

export default Index;
