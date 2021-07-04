import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line




const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-40 min-h-6`}
  background-image: url("https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/p960x960/187666215_346383160241158_7355091950952677579_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=CkvuLFAi4cQAX9Zas0t&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=8fafb24f578b905e92a838c2e7d4021f&oe=60DC02FA")`;



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
