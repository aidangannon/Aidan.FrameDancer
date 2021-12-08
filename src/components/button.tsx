import React, {Fragment} from 'react';
import styled, {css} from 'styled-components'

const Button = styled.button`
  background-color: salmon;
  padding: 10px;
  border: none;
  color: white;
  font-weight: lighter;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  border-radius: 2px;
  margin: 5px 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
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