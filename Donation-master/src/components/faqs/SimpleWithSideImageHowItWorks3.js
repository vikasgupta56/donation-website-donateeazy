import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import Photo1 from "images/Photo1.jpg";
import Photo2 from "images/Photo2.jpg";
import Photo3 from "images/Photo3.jpg";
import Photo4 from "images/Photo4.jpg";
import Photo5 from "images/Photo5.jpg";
import Photo6 from "images/Photo6.jpg";
import Photo7 from "images/Photo7.jpg";




const Container = tw.div`relative h-1/4 bg-copper-50`;
const Content = tw.div`max-w-screen-xl mx-auto py-8 lg:py-8`;

const TwoColumn = tw.div`flex`;
const Column = tw.div`pt-10`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-contain bg-no-repeat`,

  tw`hidden lg:block rounded h-96  bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)` text-yellow-700 font-bold lg:text-left`;
const Description = tw.p`max-w-xl leading-10 text-center mx-auto mb-10 lg:mx-0 lg:text-left lg:max-w-none text-sm sm:text-base lg:text-lg font-medium mt-4 text-black`;

const FAQSContainer = tw.dl`mt-12`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8 lg:pl-6`;




export default ({
  subheading = "",
  heading = "Process Transaction",
  description = "Choose the amount you would like to donate to the cause and help make little dreams come true. Your kindness makes a world of difference and people like you make this world a better place!",
  imageSrc = Photo2,
  imageContain = false,
  imageShadow = true,
  faqs = null,
  
}) => {
  
  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>

    </Container>

    
  );
};
