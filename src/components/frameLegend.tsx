import React, {Fragment} from "react";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import FrameLegendItem from "./frameLegendItem";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
`;

const FrameLegend = () =>{
    return(
        <Container>
            <h1>Legend</h1>
            <FrameLegendItem frameStatus={FrameStatusEnum.NotStarted}/>
            <FrameLegendItem frameStatus={FrameStatusEnum.InProgress}/>
            <FrameLegendItem frameStatus={FrameStatusEnum.Complete}/>
        </Container>
    );
}

export default FrameLegend;