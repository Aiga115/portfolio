import { Typography, Box, Container, Grid, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { makeStyles } from "@mui/styles";

const AboutStyles = makeStyles(() => ({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "PT Mono",
  },
  button: {
    textTransform: "lowercase",
    fontFamily: "PT Mono",
    color: "#f36717",
  },
}));

function Index() {
  const classes = AboutStyles();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "46px",
              fontFamily: "Source Sans Pro",
              fontWeight: "bold",
            }}
          >
            Aigul Zhyldyzbekova
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row} sx={{ p: "0px" }}>
          <Box sx={{ width: "40%" }}>
            <Typography sx={{ fontFamily: "PT Mono" }}>Hi!</Typography>
            <Typography
              sx={{
                fontFamily: "PT Mono",
                fontSize: "14px",
                lineHeight: "2.2",
              }}
            >
              She is Aigul. She started with a simple HTML, CSS and now after
              almost one year, she is developing a whole admin and user
              interface using React, Redux along with Redux thunk, or Redux saga
              middlewares. She has always been flexible, determined, and
              self-confident. In her free time, she likes drawing, editing
              videos, and watching anime. Yes, she is an anime geek, but the
              most important is that I like the way how she always looks for a
              more creative and interesting approach to doing something. Do you
              want to find out how?)
            </Typography>
          </Box>
          <Box className={classes.column}>
            <Typography className={classes.text}>Any questions: </Typography>
            <hr />
            <hr />
            <Grid sx={{ width: "120%" }}>
              <Grid item className={classes.row}>
                <Typography className={classes.text}>/ Number</Typography>
                <Button
                  variant="text"
                  startIcon={<LocalPhoneOutlinedIcon />}
                  className={classes.button}
                >
                  +393312823710
                </Button>
              </Grid>
              <Grid item className={classes.row}>
                <Typography className={classes.text}>/ Chat</Typography>
                <Button
                  variant="text"
                  onClick={() => (window.location = "https://t.me/aigakira")}
                  startIcon={<SendOutlinedIcon />}
                  className={classes.button}
                >
                  @aigakira
                </Button>
              </Grid>
              <Grid item className={classes.row}>
                <Typography className={classes.text}>/ Gmail</Typography>
                <Button
                  variant="text"
                  onClick={() =>
                    (window.location = "mailto:aiguljhyldyzbekkyzy@gmail.com")
                  }
                  startIcon={<EmailOutlinedIcon />}
                  sx={{ fontSize: "10px" }}
                  className={classes.button}
                >
                  aiguljhyldyzbekkyzy@gmail.com
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
