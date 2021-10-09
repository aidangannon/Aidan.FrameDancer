import React, {Fragment} from 'react';
import {useFramesContext} from "../state/framesContext";
import FrameDto from "../dtos/frameDto";
import Frame from "./frame";

const renderFrames = (frames: FrameDto[]) => frames.map((x, index) => <Frame frame={{status: x.status, number: x.number}} key={index}/>);

// component that represents a collection of frames
const Frames = (): JSX.Element =>{
    const framesContext = useFramesContext();
    return(
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 20px)",
            gridTemplateRows: "repeat(auto-fit, 20px)",
            gridGap: "grid-gap: 5px",
            gridAutoRows: "20px"
        }}>
            {renderFrames(framesContext.frames)}
        </div>
    );
};
export default Frames;