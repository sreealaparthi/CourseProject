import fs from 'fs'
import { parse, resync, stringify } from 'subtitle'

function Converter(props) {
    return(
    fs.createReadStream('../../public/transcripts/textanalytics/tm-lec1-transcription-english.vtt')
        .pipe(parse())
        .pipe(resync(-100))
        .pipe(stringify({format: 'STT'}))
        .pipe(fs.createWriteStream('./my-subtitles.stt'))
    );
}