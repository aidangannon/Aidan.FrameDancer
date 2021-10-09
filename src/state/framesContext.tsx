import React, {createContext, useContext, useEffect, useState} from "react";
import FrameDto from "../dtos/frameDto";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import {Action, Action1Param} from "../delegates/action";

interface FramesContext{
    frames: FrameDto[],
    addFrame: Action1Param<FrameDto>,
    removeLastFrame: Action
}

const FramesContext = createContext<FramesContext>({
    frames: [],
    addFrame: x => {},
    removeLastFrame: () => {}
});

export const useFramesContext = (): FramesContext => useContext(FramesContext);

const FramesProvider = (props: {children: any}) =>{
    const framesData: FrameStatusEnum[] = [FrameStatusEnum.InProgress, FrameStatusEnum.NotStarted, FrameStatusEnum.Complete];
    const mapFrames = (frameData: FrameStatusEnum, index: number): FrameDto => {
        return {
            status: frameData,
            number: index
        };
    }
    const [frames, setFrames] = useState<FrameDto[]>(framesData.map(mapFrames));
    const addFrame = (frame: FrameDto) => setFrames([...frames, frame])
    const removeLastFrame = () => {
        const currentFrames = [...frames]
        currentFrames.pop()
        setFrames(currentFrames)
    }
    const updateFrame = (frame: FrameDto) => {
        const foundFrame = frames.find(x => x.number === frame.number) as FrameDto
        foundFrame.number = frame.number;
        foundFrame.status = frame.status;
    }
    return(
        <FramesContext.Provider value={{
                frames: frames,
                addFrame: addFrame,
                removeLastFrame: removeLastFrame
            }}>
            {props.children}
        </FramesContext.Provider>
    );
}

export default FramesProvider;