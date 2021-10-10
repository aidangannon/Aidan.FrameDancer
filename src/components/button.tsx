import React, {Fragment} from 'react';
import styled, {css} from 'styled-components'

const Button = styled.button`
  background-color: salmon;
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  border-radius: 3px;
  margin: 5px;
`

// component that represents a button
const GeneralButton = ({onClick, content}: {onClick: React.MouseEventHandler<HTMLButtonElement>, content: string}): JSX.Element =>{
    return(
        <Button
            onClick={onClick}>
            {content}
        </Button>
    );
}

export default GeneralButton;