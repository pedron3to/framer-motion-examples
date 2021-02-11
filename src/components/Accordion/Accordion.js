import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  color,
  background,
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from 'styled-system';

import Chevron from './Chevron';

const AccordionSection = styled.div`
 display: flex;
flex-direction: column;
${color};
  ${background};
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};

/* Style the accordion section */
.accordion__section {
  display: flex;
  flex-direction: column;
}

/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: ${({ theme, color }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  &:before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */

/* .accordion:hover,
.active {
  background-color: #fd7e14;
} */

/* Style the accordion content title */
.accordion__title {
  font-size: 18px;
  color: #fff;
}

/* Style the accordion chevron icon */
.accordion__icon {
  margin-left: auto;
  transition: transform 0.6s ease;
}

/* Style to rotate icon when state is active */
.rotate {
  transform: rotate(90deg);
}

/* Style the accordion content panel. Note: hidden by default */
.accordion__content {
  background-color: #FFFAF2;
  overflow: auto;
  transition: max-height 0.6s ease;
}

/* Style the accordion content text */
.accordion__text {
  padding: 18px;
  font-size: 18px;
  font-weight: 300;
  -webkit-letter-spacing: -0.66px;
  -moz-letter-spacing: -0.66px;
    -ms-letter-spacing: -0.66px;
  letter-spacing: -0.66px;
  line-height: 38px

}


`;

export default function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`,
    );
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate',
    );
  }

  return (

    <AccordionSection>

      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill="#fff" />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>

    </AccordionSection>

  );
}
