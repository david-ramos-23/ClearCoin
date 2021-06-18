import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  margin: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

const FooterList = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 5px 0 0;
  list-style-type: none;
`;

const FooterItem = styled.li`
  list-style-type: none;
  padding: 0;
  font-size: 14px;
  position: relative;
  float: left;

  &:first-child {
    height: 36px;
    line-height: 36px;
    margin-right: 20px;
  }
`;

const Link = styled.a`
  display: block;
  margin: 0 2px;
  padding: 10px 20px;
  font-size: 100%;
  vertical-align: initial;
  text-align: center;
  background: transparent;
  color: #aaa;
  cursor: pointer;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    width: 1px;
    height: 20px;
    padding: 0;
    background-color: #aaa;
    transform: translateY(15%);
  }
`;


const items = [
  {
    name: '© Clearpay'
  },
  { name: 'Terms',
    url: 'https://www.clearpay.com/en/terms/'
  },
  {
    name: 'Privacy',
    url: 'https://www.clearpay.com/en/privacy'
  }
];

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterList>
        { items.map(({ name, url }, index) => (
          <FooterItem key={index}>
            { url 
            ? (
                <Link href={url}>
                  <span>{name}</span>
                </Link>
              )
            : ( 
                <span>{name}</span>
              )
            } 
          </FooterItem>
          ))
        }
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;