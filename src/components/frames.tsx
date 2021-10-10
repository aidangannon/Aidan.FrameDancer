import React, {Fragment} from 'react';
import {useFramesContext} from "../state/framesContext";
import FrameDto from "../dtos/frameDto";
import Frame from "./frame";
import styled from "styled-components";

const renderFrames = (frames: FrameDto[]) =>
    frames.map(
        (x, index) =>
            <Frame
                frame={{status: x.status, number: x.number}}
                key={index}/>
    );

const StyledFrames = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20px);
  grid-template-rows: repeat(auto-fit, 20px);
  grid-gap: 1px;
  grid-auto-rows: 20px;
  margin-top: 20px;
`;

// component that represents a collection of frames
const Frames = (): JSX.Element =>{
    const framesContext = useFramesContext();
    return(
        <StyledFrames>
            {renderFrames(framesContext.frames)}
        </StyledFrames>
    );
};
export default Frames;