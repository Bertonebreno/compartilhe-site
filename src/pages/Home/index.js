import React from "react";
import { Background, Image, DownloadButton, Column } from "./style";
import logoCompatilhe from "../../assets/images/logo.svg";
import logoAlpha from "../../assets/images/logoAlpha.png";

function Home() {
  return (
    <Background>
      <Column></Column>
      <Column>
        <Image src={logoCompatilhe} height="25vh"></Image>
        <DownloadButton style={{marginBottom: "0vh"}}>Download</DownloadButton>
      </Column>
      <Column><Image src={logoAlpha} height="15vh"></Image></Column>
    </Background>
  );
}

export default Home;
