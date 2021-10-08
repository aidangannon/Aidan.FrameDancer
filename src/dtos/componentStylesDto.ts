import StylesDto from "./stylesDto";
import {CSSProperties} from "react";

export default interface ComponentStylesDto<T>{
    styles: StylesDto<T>[],
    baseStyle: CSSProperties
}