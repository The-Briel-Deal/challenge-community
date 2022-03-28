import React from "react";
import CardOutline from "./CardOutline";
import cardData from "./cardData.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function makeCard(props){
    return(
      <CardOutline
    className="outline"
    userid= {props.userid}
    name={props.name}
    desc={props.desc}
    UserIneterest={props.UserInterest}
    time={props.time}
    creator= {props.creator}
    />
    );
  }





  function DataCards() {
      return(
    <div className="app">
      <dl className="dictionary">{cardData.map(makeCard)}</dl>
    </div>
      );
  }

  export default DataCards;
