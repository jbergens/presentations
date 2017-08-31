import React from "react";
import { Appear, Slide, Heading } from "spectacle";
import Terminal from "spectacle-terminal";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading size={2} textColor="secondary">THE Boilerplate</Heading>
    <Heading size={6} textColor="tertiary" margin="20px 0 20px 0">Create React App by Facebook</Heading>

    <Appear>
      <Terminal title="1. mike: ~(zsh)" output={[
        "npm install -g create-react-app",
        " ",
        "create-react-app my-app",
        "cd my-app/",
        "npm start"
      ]}
      />
    </Appear>
  </Slide>
);
