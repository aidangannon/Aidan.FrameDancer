import React, {Fragment, ReactElement} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr 1fr;
  grid-gap: 20px;
  padding-top: 100px;
`;

const RenderPage = ({children}: {children: any}): JSX.Element =>{
    return (
        <Container>
            {children}
        </Container>
    );
}

export default RenderPage;