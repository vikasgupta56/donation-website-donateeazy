import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import ArchedImage from "images/ArchedImage.png";


const Container = tw.div`relative bg-givry-500`;
const Content = tw.div`max-w-screen-xl mx-auto py-8 lg:py-8`;

const TwoColumn = tw.div`flex`;
const Column = tw.div`pt-10`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-contain bg-no-repeat`,

  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)` text-apricot-900 font-bold lg:text-left`;
const Description = tw.p`max-w-xl leading-10 text-center mx-auto mb-10 lg:mx-0 lg:text-left lg:max-w-none text-sm sm:text-base lg:text-lg font-medium mt-4 text-black`;

const FAQSContainer = tw.dl`mt-12`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8 lg:pl-6`;

const PrimaryButton = tw.button`font-bold sm:text-center tracking-wider px-5 py-3 rounded text-peachy-500 bg-apricot-900 hocus:bg-apricot-800 focus:shadow-outline focus:outline-none transition duration-300`;



export default ({
  subheading = "",
  heading = "About Us",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque, voluptates maiores consectetur sit amet consectetur adipisicing elit necessitatibus debitis fuga mollitia? Assumenda consectetur qui ullam, pariatur ducimus voluptas doloremque velit fuga veritatis et reprehenderit magni modi nemo, odit quas, autem iusto beatae minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque, voluptates maiores consectetur necessitatibus debitis Vel, ipsum enim! Doloribus optio, possimus laboriosam doloremque aliquam non molestiae!",
  imageSrc = ArchedImage,
  imageContain = false,
  imageShadow = true,
  faqs = null,
  primaryButtonText="Learn More",
  primaryButtonUrl='/About',
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
              <Actions>
                <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              </Actions>
              

            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
