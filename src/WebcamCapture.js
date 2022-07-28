import React from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
};

function WebcamCapture() {
    const webcamRef = React.useRef(null);

    return <div className='webcamCapture'>
        <Webcam
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
        />       

        <RadioButtonUncheckedIcon />
    </div>
}

export default WebcamCapture;