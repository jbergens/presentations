import React from "react";
import { Appear, Heading, List, ListItem, Slide } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary">
    <Heading size={2} textColor="secondary" caps>Agenda</Heading>
    <List>
      <Appear><ListItem>Who am I?</ListItem></Appear>
      <Appear><ListItem>React - DIY</ListItem></Appear>
      <Appear><ListItem>React - Boilerplates</ListItem></Appear>
      <Appear><ListItem>React - THE boilerplate</ListItem></Appear>
      <Appear><ListItem>Next.js</ListItem></Appear>
    </List>
  </Slide>
);
