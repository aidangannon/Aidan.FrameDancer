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

ReactDOM.render(
    <FramesProvider>
        <NavBar/>
        <RenderPage>
            <div style={{gridColumn: 3, gridRow: 2}}>
                <FrameLegend/>
            </div>
            <div style={{gridColumn: 2, gridRow: 2}}>
                <Frames/>
            </div>
        </RenderPage>
    </FramesProvider>,
  document.getElementById('root')
);
