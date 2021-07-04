import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line




const Container = styled.div`
  ${tw`relative  -mt-8 bg-center bg-cover h-40 min-h-6`}
  background-image: url("https://scontent.fblr1-3.fna.fbcdn.net/v/t1.6435-9/p960x960/192994443_346379826908158_544150678126211575_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=l5xqxSjpAkQAX-QpE4j&_nc_ht=scontent.fblr1-3.fna&tp=6&oh=30943dd824b70de7a5ee3dcf2c794e3a&oe=60DDE63D")`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-ice-900 opacity-0`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;




const PrimaryAction = tw.button`rounded-full px-8 py-3 lg:mt-10 mb-20 text-sm sm:text-base sm:mt-2 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-ice-900 text-ice-400 hocus:bg-ice-800 hocus:text-ice-400 focus:outline-none focus:shadow-outline`;

export default () => {
 

  return (
    <Container>
    
      <HeroContainer>
       
      </HeroContainer>
    </Container>
  );
};
