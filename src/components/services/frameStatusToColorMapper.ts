import {FrameStatusEnum} from "../../enums/frameStatusEnum";

const frameStatusToColorMapper = (frameStatus: FrameStatusEnum): string =>{
    switch (frameStatus) {
        case FrameStatusEnum.Complete:
            return "darkseagreen";
        case FrameStatusEnum.InProgress:
            return "salmon";
        case FrameStatusEnum.NotStarted:
            return "cornflowerblue";
        default:
            return "";
    }
}

export default frameStatusToColorMapper;