import {FrameStatusEnum} from "../enums/frameStatusEnum";

export default interface FrameDto{
    status: FrameStatusEnum,
    number: number
}