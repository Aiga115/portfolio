import {Typography} from "@mui/material";
import { Link } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

const HeaderStyles = makeStyles(() => ({
    ul:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"40px",
        width:"100%",
        fontFamily:"PT Mono",
        marginBottom:"50px"
    }
    ,
    li:{
        textDecoration:"none",
        color: "#0e34a0",
        "&:hover":{
            color:"red"
        },
    }
  }));

  
function Index(){
    const classes = HeaderStyles();
    return (
        <header className={classes.ul}>
            <Link className={classes.li} to="/">_about-me</Link>
            <Link className={classes.li}  to="/my-experience">_experience</Link>
            <Link className={classes.li} to="/my-applications">_let's have some fun</Link>
        </header>
    )
}

export default Index;