import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line




const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/p960x960/192491421_343214337224707_4352989078050352006_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=pHW5Kd-xylwAX85E3Bv&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=18ac2cbb33cdc09e42c5a8254f15b414&oe=60D71445")`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-ice-900 opacity-0`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-auto flex-col justify-end items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 lg:mt-10 mb-20 text-sm sm:text-base sm:mt-2 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-ice-900 text-ice-400 hocus:bg-ice-800 hocus:text-ice-400 focus:outline-none focus:shadow-outline`;

export default () => {
 

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>
          </Heading>
          <PrimaryAction>Learn more about it!</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
