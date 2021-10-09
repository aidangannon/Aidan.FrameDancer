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

ReactDOM.render(
    <FramesProvider>
        <RenderPage>
            <div>

            </div>
            <div>
                <AddFrame/>
                <RemoveFrame></RemoveFrame>
                <Frames/>
            </div>
            <div>

            </div>
        </RenderPage>
    </FramesProvider>,
  document.getElementById('root')
);
