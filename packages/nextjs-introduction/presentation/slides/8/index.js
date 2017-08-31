import React from "react";
import { Appear, Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading size={6} textColor="tertiary">What's next?</Heading>

    <Appear>
      <Heading size={2} textColor="secondary" margin="20x 0 0 0">Next.js</Heading>
    </Appear>
  </Slide>
);
