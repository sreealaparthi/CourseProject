import React, { useMemo } from "react";
import { parse } from "subtitle";
import Captions from "./list";

export default function CaptionsRaw({ raw }) {
    const parsed = useMemo(() => parse(raw), [raw]);
    console.log(parsed)
    return <Captions captions={parsed} />;
}