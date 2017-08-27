import React from "react";
import { BlockQuote, Cite, Quote, Slide } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
        </BlockQuote>
    </Slide>
);
