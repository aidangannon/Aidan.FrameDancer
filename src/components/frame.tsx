import React, {Fragment} from 'react';
import FrameDto from "../dtos/frameDto";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import frameStatusToClassParser from "./services/frameStatusToClassParser";
import ComponentStylesDto from "../dtos/componentStylesDto";
import styleBuilder from "./services/styleBuilder";

const Frame = ({frame}: {frame: FrameDto}): JSX.Element =>{
    const frameStyles: ComponentStylesDto<FrameStatusEnum> = {
        styles:[
            {style: {
                    backgroundColor: "darkseagreen"
                },
                index: FrameStatusEnum.Complete
            },
            {style: {
                    backgroundColor: "cornflowerblue"
                },
                index: FrameStatusEnum.NotStarted
            },
            {style: {
                    backgroundColor: "orange"
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
    console.log(style);
    return(
        <Fragment>
            <div style={style}/>
        </Fragment>
    );
}

export default Frame;