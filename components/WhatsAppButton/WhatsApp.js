import React from 'react';
import styled from 'styled-components';

import WhatsAppLogo from '../../assets/image/svg/whatsapp.svg';

const WhatsAppWrapper = styled.div`

a {
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    transform:translateY(-20px);
    transition: .2s;

  }
}

`;

const WhatsApp = () => (
  <WhatsAppWrapper>
    <a href="https://bit.ly/35rmgfe" target="blank">

      <img src={WhatsAppLogo} alt="" />
    </a>
  </WhatsAppWrapper>
);

export default WhatsApp;
