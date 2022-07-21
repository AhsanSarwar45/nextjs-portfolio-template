import React from "react";
import NextLink from "next/link";
import { AnchorProps } from "./types";

const Anchor = (props: AnchorProps) => {
    const aProps = props.isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <NextLink href={props.href} passHref>
            <a {...aProps}>{props.children}</a>
        </NextLink>
    );
};

Anchor.defaultProps = {
    isExternal: false,
};

export default Anchor;