import React, { Fragment } from "react";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import styled from "styled-components";
import frameStatusToColorMapper from "./services/frameStatusToColorMapper";
import frameStatusToNameParser from "./services/frameStatusToNameParser";

const Frame = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({frameStatus}: {frameStatus: FrameStatusEnum}) => frameStatusToColorMapper(frameStatus)};
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
`;

const Text = styled.p`
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
  font-size: 16px;
  text-align: left;
  font-weight: lighter;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: right;
`;

const FrameLegendItem = ({frameStatus}: {frameStatus: FrameStatusEnum}) =>{
    return(
        <Grid style={{alignContent: "inline"}}>
            <Text>{frameStatusToNameParser(frameStatus)}</Text>
            <Frame frameStatus={frameStatus}/>
        </Grid>
    );
}

export default FrameLegendItem;