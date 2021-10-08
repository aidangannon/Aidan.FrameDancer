import React, {Fragment} from 'react';
import FrameDto from "../dtos/frameDto";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import frameStatusToNameParser from './services/frameStatusToNameParser';
import ComponentStylesDto from "../dtos/componentStylesDto";
import styleBuilder from "./services/styleBuilder";
import ReactTooltip from "react-tooltip";
import FramesProvider from "../state/framesContext";

const Frame = ({frame}: {frame: FrameDto}): JSX.Element =>{
    const frameStyles: ComponentStylesDto<FrameStatusEnum> = {
        styles:[{
            style: {
                    backgroundColor: "darkseagreen"
                },
                index: FrameStatusEnum.Complete
            }, {
                style: {
                    backgroundColor: "cornflowerblue"
                },
                index: FrameStatusEnum.NotStarted
            }, {
                style: {
                    backgroundColor: "salmon"
                },
                index: FrameStatusEnum.InProgress
            }
        ],
        baseStyle:{
            margin: "10px",
            width: "15px",
            height: "15px"
        }
    }
    const style = styleBuilder(frameStyles, frame.status);
    console.log()
    return(
        <Fragment>
            <div style={style} data-tip data-for={frame.number.toString()}/>

            <ReactTooltip id={frame.number.toString()} place="top" effect="solid">
                {"frame "+frame.number}
                <br/>
                {frameStatusToNameParser(frame.status)}
            </ReactTooltip>
        </Fragment>
    );
}

export default Frame;