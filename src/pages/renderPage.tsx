import React, {Fragment, ReactElement} from "react";

const RenderPage = (props: {children: any}): JSX.Element =>{
    // TODO: add service
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "[col1-start] 25% [col1-end col2-start] 25% [col2-end]",
            gridGap: "grid-gap: 5px",
        }}>
            {props.children}
        </div>
    );
}

export default RenderPage;