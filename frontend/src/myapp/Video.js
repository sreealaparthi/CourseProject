// import "./Video.css"

import React from "react";

function Video(props) {
    let modifiedSoruce = `lecture_videos/${props.lectureName[1]}/${props.lectureName[0]}`
    console.log("modified ", modifiedSoruce)
    return (
        props.lectureName === "" ? <h1>Please Select a video from the course catalog</h1> :
            <div className="Video">
                <React.Fragment key={props.lectureName}>
                    {/*<video  id="video" controls preload="metadata" width="640" height="440" autoPlay muted>*/}
                    {/*    <source*/}
                    {/*        src={modifiedSoruce}*/}
                    {/*        type="video/mp4"></source>*/}
                    {/*    <track label="English" kind="subtitles" srcLang="en"*/}
                    {/*           src="transcripts/textanalytics/tm-lec1-transcription-english.vtt" default></track>*/}
                    {/*</video>*/}

                    <video id="video1" preload="auto" width="480" height="360" poster="../media/wwa.jpg"
                           data-able-player data-skin="2020" data-transcript-div="transcript" autoPlay playsInline>
                        <source type="video/mp4" src={modifiedSoruce} data-desc-src={modifiedSoruce}/>
                        <track kind="subtitles" src="transcripts/textanalytics/tm-lec1-transcription-english.vtt" srcLang="en" label="English" default/>
                        {/*<track kind="descriptions" src="transcripts/textanalytics/tm-lec1-transcription-english.vtt" srcLang="en"/>*/}
                    </video>
                </React.Fragment>
                <div id="transcript"></div>
            </div>
    );
}

export default Video;
