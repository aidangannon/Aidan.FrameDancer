import React, {createContext, useContext, useEffect, useState} from "react";
import FrameDto from "../dtos/frameDto";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import {Action} from "../delegates/action";

interface FramesContext{
    frames: FrameDto[],
    addFrame: Action<FrameDto>
}

const FramesContext = createContext<FramesContext>({frames: [], addFrame: x => {}});

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
    useEffect(() => console.log(frames))
    const addFrame = (frame: FrameDto) => setFrames([...frames, frame])
    return(
        <FramesContext.Provider value={{
                frames: frames,
                addFrame: addFrame
            }}>
            {props.children}
        </FramesContext.Provider>
    );
}

export default FramesProvider;