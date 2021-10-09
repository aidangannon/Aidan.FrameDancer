import React, {Fragment} from 'react';
import {useFramesContext} from "../state/framesContext";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import {randomInt} from "crypto";
import GeneralButton from "./button";

// component that represents a button to add frame
const RemoveFrame = (): JSX.Element =>{
    const framesContext = useFramesContext();
    return(
        <GeneralButton
            onClick={x => framesContext.removeLastFrame()}
            content={"Remove Frame"}/>
    );
}

export default RemoveFrame;