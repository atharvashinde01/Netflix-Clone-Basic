import React from 'react';
import "../css/Overlay.css";
import ReactPlayer from "react-player/youtube"
import CloseIcon from '@material-ui/icons/Close';

const Overlay = ({changeOverlay, selectedTrailer}) => {
    return (
        <div className="overlay">
            <div className="overlay__close">
                <CloseIcon onClick={() => changeOverlay(false)} fonstSize="large" style={{fill:"white", cursor:"pointer"}}/>
            </div>
            <ReactPlayer controls url={selectedTrailer}/>
        </div>
    )
}

export default Overlay
