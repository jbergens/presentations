import React from "react";
import { Appear, Slide, Text, Heading } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading size={5} textColor="secondary">But wait... there are more!</Heading>
    <Appear><Text margin="40px 0 0 0" textColor="white">http://andrewhfarmer.com/starter-project/</Text></Appear>
    <Appear><Text margin="165px 0 0 0" textColor="yellow" textSize="5em">143</Text></Appear>
  </Slide>
);
