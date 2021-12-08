import React, {Fragment} from "react";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import FrameLegendItem from "./frameLegendItem";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: normal;
`;

const FrameLegend = () =>{
    return(
        <Container>
            <Heading>legend</Heading>
            <FrameLegendItem frameStatus={FrameStatusEnum.NotStarted}/>
            <FrameLegendItem frameStatus={FrameStatusEnum.InProgress}/>
            <FrameLegendItem frameStatus={FrameStatusEnum.Complete}/>
        </Container>
    );
}

export default FrameLegend;