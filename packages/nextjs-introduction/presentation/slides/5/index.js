import React from "react";
import { Appear, List, ListItem, Slide, Heading } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading size={2} textColor="secondary">Boilerplates</Heading>
    <List>
      <Appear><ListItem>Build &amp; maintain your own</ListItem></Appear>
      <Appear><ListItem>Use an existing boilerplate</ListItem></Appear>
      <Appear><ListItem>react-boilerplate - @mxstbr</ListItem></Appear>
    </List>
  </Slide>
);
