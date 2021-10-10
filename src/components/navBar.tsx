import styled from "styled-components";
import React from "react";
import RemoveFrame from "./removeFrame";
import AddFrame from "./addFrame";
import RandomizeFrame from "./randomizeFrame";

const Bar = styled.div`
  padding: 20px;
  background-color: powderblue;
  text-align: center;
`;

const NavBar = () =>{
    return(
        <Bar>
            <RemoveFrame/>
            <AddFrame/>
            <RandomizeFrame/>
        </Bar>
    );
}

export default NavBar;