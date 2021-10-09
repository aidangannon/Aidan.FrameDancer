import React, {Fragment, ReactElement} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 8);
  grid-gap: 20px;
`;

const RenderPage = ({children}: {children: any}): JSX.Element =>{
    return (
        <Container>
            {children}
        </Container>
    );
}

export default RenderPage;