import React, {useEffect, useRef} from 'react';

function AbleComponent(props) {
    let modifiedSoruce = `lecture_videos/${props.lectureName[1]}/${props.lectureName[0]}`
    // const [videoTranscript, setVideoTranscript] = useState([]);
    //
    // function refreshVideo(e) {
    //     const tempTranscript = e.target.value;
    //     console.log("changed value is:",tempTranscript);
    //     setVideoTranscript([...videoTranscript, tempTranscript]);
    // }

    let transcript = `transcripts/${props.lectureName[1]}/${props.transcript}`
    transcript = transcript.replace('.mp4', '.vtt').trim()
    console.log("transcript ",transcript)

    const videoRef = useRef();
    const previousProps = useRef(props);

    useEffect(() => {
        if (props.current === props) {
            return;
        }
        if (videoRef.current) {
            videoRef.current.load();
        }
        previousProps.current = props;
    }, [props]);

    return (
        <main role="main">
            <div id="player">
                <video id="video1" ref={videoRef} controls preload="auto" width={600} height={600} data-able-player
                       data-skin={2020} data-transcript-div="transcript" autoPlay playsInline>
                    <source type="video/mp4"
                            src={modifiedSoruce}/>
                    <track kind="captions" src={transcript}
                           srcLang="en" label="English" default/>
                </video>
            </div>
            <div id="transcript"/>
        </main>
    );
}

export default AbleComponent;