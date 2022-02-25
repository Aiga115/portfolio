import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const GreetingStyles = makeStyles(() => ({
  box: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  img: {
    marginBottom: "-17px",
  },
}));

function Index() {
  const classes = GreetingStyles();
  return (
    <Box sx={{width:"700px"}}>
      <Box className={classes.box}>
        <Typography sx={{ fontFamily: "PT Mono", width: "615px" }}>
          Passionate about programming :)
        </Typography>
        <img
          height={55}
          className={classes.img}
          src="/static/cute-girl.gif"
          alt="cute-girl.gif"
        />
      </Box>
      <hr />
    </Box>
  );
}

export default Index;
