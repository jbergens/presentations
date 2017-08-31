import React from "react";
import { Appear, List, ListItem, Slide, Heading } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading size={2} textColor="secondary" caps>DIY</Heading>
    <List>
      <Appear><ListItem>Directory structure</ListItem></Appear>
      <Appear><ListItem>Webpack vs Browserify vs ...?</ListItem></Appear>
      <Appear><ListItem>Babel yes/no? Probably yes</ListItem></Appear>
      <Appear><ListItem>Styling</ListItem></Appear>
      <Appear><ListItem>Hot Module Replacement</ListItem></Appear>
      <Appear><ListItem>Server-side rendering</ListItem></Appear>
      <Appear><ListItem>Dev vs prod config</ListItem></Appear>
    </List>
  </Slide>
);
