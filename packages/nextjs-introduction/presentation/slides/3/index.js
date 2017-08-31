import React from "react";
import { Appear, Fit, Layout, Image, Slide } from "spectacle";

const images = {
  notSoYoung: require("../../../assets/not-so-young-mike.jpg"),
  pinCA: require("../../../assets/pin-ca.png"),
  pinCH: require("../../../assets/pin-ch.png"),
  pinKR: require("../../../assets/pin-kr.png"),
  pinUK: require("../../../assets/pin-uk.png"),
  worldMap: require("../../../assets/world-map.png"),
  young: require("../../../assets/young-mike.jpg")
};

const worldMapBackground = {
  backgroundImage: `url(${images.worldMap})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "bottom center"
};

// Switzerland
const pinStyleCH = {
  height: "1.5em",
  position: "absolute",
  left: "460px",
  top: "205px"
};

// Canada
const pinStyleCA = {
  height: "1.5em",
  position: "absolute",
  left: "0",
  top: "185px"
};

// UK
const pinStyleUK = {
  height: "1.5em",
  position: "absolute",
  left: "390px",
  top: "165px"
};

// Korea
const pinStyleKR = {
  height: "1.5em",
  position: "absolute",
  left: "855px",
  top: "265px"
};

const profilePicBaseStyle = {
  borderRadius: "200px"
}

const youngStyle = {}
const notSoYoungStyle = {}

export default (
  <Slide
    transition={["zoom", "slide"]}
    align="center flex-start"
    style={worldMapBackground}
  >
    <Layout>
      <Appear>
        <Fit>
          <Image
            src={images.pinCH}
            style={pinStyleCH}
          />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image
            src={images.pinCA}
            style={pinStyleCA}
          />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image
            src={images.pinUK}
            style={pinStyleUK}
          />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image
            src={images.pinKR}
            style={pinStyleKR}
          />
        </Fit>
      </Appear>

      {/* <Appear>
        <Fit>
          <Image
            src={images.young}
            style={profilePicBaseStyle}
          />
        </Fit>
      </Appear>
      <Appear>
        <Fit>
          <Image
            src={images.notSoYoung}
            style={profilePicBaseStyle}
          />
        </Fit>
      </Appear> */}

    </Layout>
  </Slide>
);
