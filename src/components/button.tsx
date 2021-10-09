import React, {Fragment} from 'react';

// component that represents a button
const GeneralButton = (props: {onClick: React.MouseEventHandler<HTMLButtonElement>, content: string}): JSX.Element =>{
    return(
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
                borderRadius: "3px",
                margin: "10px"
            }}
            onClick={props.onClick}>
            {props.content}
        </button>
    );
}

export default GeneralButton;