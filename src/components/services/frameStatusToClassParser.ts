import {FrameStatusEnum} from "../../enums/frameStatusEnum";

const frameStatusToClassParser = (frameStatus: FrameStatusEnum): string =>
    "."+FrameStatusEnum[frameStatus]
        .replace(new RegExp("(?<=[A-Za-z])(?=[A-Z][a-z])|(?<=[a-z0-9])(?=[0-9]?[A-Z])"), "-")
        .toLowerCase();

export default frameStatusToClassParser;