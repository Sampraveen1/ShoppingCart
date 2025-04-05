import React, { useEffect, useRef } from 'react'


interface BackgroundVideoWrapperProps {
    videoSrc: string;
    children: React.ReactNode;
}



const BackgroundVideoWrapper: React.FC<BackgroundVideoWrapperProps> = ({ videoSrc, children }) => {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            //  videoRef.current.playbackRate = 3; // Adjust speed (1.0 is normal, increase for faster)
        }
    }, []);

    return (
        <div style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',margin:'10px'}}>
            <video 
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'97%',
                objectFit:'cover',
                zIndex: -1,
                borderRadius:'20px'
              }}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            <div style={{ position:'relative',zIndex:1, width:'100%',height:'100%'}}>
                {children}
            </div>
        </div>
    )
}

export default BackgroundVideoWrapper;