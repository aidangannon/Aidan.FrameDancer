import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from "./components/frame";
import {FrameStatusEnum} from "./enums/frameStatusEnum";
import FramesProvider from "./state/framesContext";
import Frames from "./components/frames";
import AddFrame from "./components/addFrame";

ReactDOM.render(
    <FramesProvider>
        <AddFrame/>
        <Frames/>
    </FramesProvider>,
  document.getElementById('root')
);
