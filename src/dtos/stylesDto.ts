import {CSSProperties} from "react";

export default interface StylesDto<T>{
    index: T,
    style: CSSProperties
}