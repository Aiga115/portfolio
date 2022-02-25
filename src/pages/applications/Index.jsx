import {Typography,Card,Container} from "@mui/material";
import { useState } from "react";
import CardApp from "../../components/AppCards/Index"

function Index(){

    const apps = [
        {
            id: 1,
            image:"/static/notes.png",
            title:"Let's take quiz",
            desc:"Very easy to use quiz application. For each question you are given only 15 seconds",
            website:"https://quizapp.hostman.site/"
        },
        {
            id:2,
            image:"/static/onlineshop.png",
            title:"Go to shopping!",
            desc:"Application where you can buy and add to card clothes",
            website:"https://mywardrobe.hostman.site/"
        },
        {
            id:3,
            image:"/static/snakeapp.png",
            title:"Let's play",
            desc:"Sneak game is old but still very popular. So let's jump in?",
            website:"https://snake-application.hostman.site/"
        }
    ]

    return (
        <Container maxWidth="lg">
            <CardApp apps = {apps}/>
        </Container>
    )
}

export default Index;