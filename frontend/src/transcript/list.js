import React, { memo } from "react";
import { getFormat } from "./time";
import Caption from "./caption";

function getFormatFromList(captions) {
    if (!captions.length) return "mm:ss";
    return getFormat(captions[captions.length - 1].end);
}

function shouldUseEnd(end, index, captions) {
    const nextCaption = captions[index + 1];
    if (!nextCaption) {
        return false; // The end of the video
    }
    // Captions usually follow the rule where if they
    // are continous, the next caption starts at the next millisecoond
    return end !== nextCaption.start && end + 1 !== nextCaption.start;
}

export default memo(function Captions({ captions }) {
    const format = getFormatFromList(captions);

    return (
        <ol className="captions">
            {captions.map(({ end, ...rest }, index) => {
                const endToUse = shouldUseEnd(end, index, captions) ? end : undefined;
                return <Caption key={index} end={endToUse} {...rest} format={format} />;
            })}
        </ol>
    );
});