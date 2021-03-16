import React from 'react';
import styled from 'styled-components';
import { Title, Box, Text } from '../Core';
import Logo from '../Logo';

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} 
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} 
      }
    }
  }
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) => (dark ? '1px solid #2f2f31 ' : `1px solid ${theme.colors.border}`)};

  padding: 15px 0;
  p {
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Footer = ({ isDark = true }) => (
  <>
    {/* <!-- Footer section --> */}
    <div>
      <div>

        <CopyRightArea dark={isDark ? 1 : 0}>
          <div>

            <div>
              <Text>Claramente &copy; 2020, Todos os direitos reservados.</Text>
              <Text className="align-items-center ">
                Siga-nos no Instagram:
              </Text>
              <ul className="social-icons align-items-center">
                <li>
                  <a
                    href="https://www.instagram.com/renata.andrade.araujo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon icon-logo-instagram fi-md" />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </CopyRightArea>
      </div>
    </div>
  </>
);

export default Footer;
