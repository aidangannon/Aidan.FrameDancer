import React, {Fragment} from 'react';
import {useFramesContext} from "../state/framesContext";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import {randomInt} from "crypto";
import GeneralButton from "./button";

// component that represents a button to add frame
const RandomizeFrame = (): JSX.Element =>{
    const framesContext = useFramesContext();
    const getFrame = (x: number): FrameStatusEnum => {
        switch (x) {
            case 0:
                return FrameStatusEnum.Complete
            case 1:
                return FrameStatusEnum.InProgress
            case 2:
                return FrameStatusEnum.NotStarted
            default:
                return FrameStatusEnum.Complete
        }
    }
    return(
        <GeneralButton
            onClick={x => framesContext.updateFrame({
                number: 0,
                status: getFrame(Math.floor(Math.random() * 3))
            })}
            content={"Randomize Frame"}/>
    );
}

export default RandomizeFrame;