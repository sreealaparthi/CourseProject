import React, { memo, Fragment } from "react";

export default memo(function time({ text }) {
    return (
        <div className="caption-text">
            {
                text
                    .split("\n")
                    .map(
                        (item, index, array) => (
                            <Fragment key={index}>
                                {item}
                                {
                                    (index + 1) !== array.length ? <br /> : undefined
                                }
                            </Fragment>
                        )
                    )
            }
        </div>
    )
});