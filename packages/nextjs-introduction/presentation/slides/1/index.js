import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
    <Slide transition={["zoom", "slide"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Introduction to Next.js
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
        How to build a React app in 2017
        </Text>
        <Text margin="50px 0 0" textColor="tertiary" size={3}>
        Mike Nikles <small>- @mikenikles</small>
        </Text>
        <Text margin="50px 0 0" textColor="yellow" size={1}>
        August 31, 2017
        </Text>
    </Slide>
);
