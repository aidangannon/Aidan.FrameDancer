import React, {Fragment} from 'react';
import {useFramesContext} from "../state/framesContext";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import {randomInt} from "crypto";

const AddFrame = (): JSX.Element =>{
    const framesContext = useFramesContext();
    const getFrame = (x: number): FrameStatusEnum => {
        switch (x){
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
        <div style={{textAlign: "left", margin: "20px", marginBottom: "10px"}}>
            <button
                style={{
                    backgroundColor: "salmon",
                    padding: "10px",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "14px",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                    borderRadius: "3px"
                }}
                onClick={x =>
                    framesContext
                        .addFrame({
                            number: framesContext.frames.length - 1,
                            status: getFrame(Math.floor( Math.random() * 3 ))
                        })}>
                Add Frame
            </button>
        </div>
    );
}

export default AddFrame;