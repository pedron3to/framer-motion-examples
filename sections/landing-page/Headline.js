import React, { useContext } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const BgWrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`

const HeadlineWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 15px;
`
const Headline = () => {
  return (
    <>
     
      <BgWrap>
         <Image
          alt="Mountains"
          src="/background.jpg"
          layout="fill"
          objectFit="none"
          quality={100}
        />       

      </BgWrap>
         
            <HeadlineWrapper>
              <Title variant="hero" className="mb-3 text-center">
                Aqui vai a sua Headline.

              </Title>
              <Text className="text-center mb-5">
                Utilize a subheadline para complementar a sua headline com
                informações que facilitem o entendimento do produto ou serviço.
              </Text>
            </HeadlineWrapper>         
            
     
          

          
    
    </>
  );
};

export default Headline;
