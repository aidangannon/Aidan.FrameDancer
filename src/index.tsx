import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from "./components/frame";
import {FrameStatusEnum} from "./enums/frameStatusEnum";
import FramesProvider from "./state/framesContext";
import Frames from "./components/frames";
import AddFrame from "./components/addFrame";
import ReactTooltip from "react-tooltip";
import RenderPage from "./pages/renderPage";
import RemoveFrame from "./components/removeFrame";
import styled from "styled-components";
import NavBar from "./components/navBar";
import FrameLegend from "./components/frameLegend";

interface IContainer{
    column: number,
    row: number
}

const Container = styled.div`
  grid-column: ${(props: IContainer) => props.column};
  grid-row: ${(props: IContainer) => props.row};
  background-color: white;
  padding: 10px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const MainContainer = styled.div`
  background-color: aliceblue;
  height: 1000px;
`;

ReactDOM.render(
    <FramesProvider>
        <MainContainer>
            <NavBar/>
            <RenderPage>
                <Container column={3} row={2}>
                    <FrameLegend/>
                </Container>
                <Container  column={2} row={2}>
                    <Frames/>
                </Container>
            </RenderPage>
        </MainContainer>
    </FramesProvider>,
  document.getElementById('root')
);
