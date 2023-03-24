import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "../Assets/RainOnWindowsGif.gif";
import "../App.css";
import weatherImages from "./icons";

export default function ForecastCard(props){
    const imageSrc = weatherImages[props.condition];

    return(
        <>
        <Container className={props.class}>
            <h2 className="cardDate">{props.day}</h2>
            <img className="icons" src={imageSrc}/>
            <h2 className="cardCond">{props.condition}</h2>
            <h2 className="cardTemp">High Temp: {props.high}°</h2>
            <h2 className="cardTemp">Low Temp: {props.low}°</h2>
        </Container>
        </>
    )
}