import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import BackgroundImage from "../../images/Background3.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-2xl mt-5 bg-ice-400 mx-auto px-16 py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)` text-axolotl-400 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left font-bold text-yellow-600`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-xl font-medium mt-4 text-axolotl-500`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold text-yellow-700`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-yellow-600 text-gray-100 p-1 rounded-full group-hover:bg-yellow-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "About Us",
  heading = "Empowered to bring change everyday, everyway.",
  description = "Our mission is to aid philanthropy to accelerate community-led change and unleash the potential of people. We ensure flexibility in supporting initiatives ranging from raising funds for sudden disaster relief to feeding the hungry and protecting our planet. We ensure supported is activated to critical causes to maximize the impact and help communities where we live and work. We strive to bring forth projects to charitable people who want to feel they are contributing towards the betterment of the society and knowing they are making a donation no matter how large or small as it is important to empower local people, especially in times like these. Our mission is also about helping non-profits get information that helps them to learn, listen and grow.",
  imageSrc = BackgroundImage,
  imageContain = false,
  imageShadow = true,
  faqs = null
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
