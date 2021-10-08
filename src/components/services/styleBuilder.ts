import ComponentStylesDto from "../../dtos/componentStylesDto";
import {CSSProperties} from "react";
import StylesDto from "../../dtos/stylesDto";

export default <T>(styles: ComponentStylesDto<T>, index: T): CSSProperties =>
{
    return {...(styles
        .styles
        .find(x => x.index === index) as StylesDto<T>)
        .style, ...styles.baseStyle}
};