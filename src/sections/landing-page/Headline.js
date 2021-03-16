import React, { useContext } from "react";
import styled from "styled-components";
import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";


const Headline = () => {
  return (
    <>
      <Section bg="#fff" className="vh-100">
        <div>
          <div>
            <div>
              <Title variant="hero" className="mb-3 text-center">
                Aqui vai a sua Headline.

              </Title>
              <Text className="text-center mb-5">
                Utilize a subheadline para complementar a sua headline com
                informações que facilitem o entendimento do produto ou serviço.
              </Text>
            </div>

          </div>
          <div>

          </div>
        </div>
      </Section>
    </>
  );
};

export default Headline;
