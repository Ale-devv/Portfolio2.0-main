import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollTopButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000000;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
`;

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollTopButtonWrapper visible={isVisible} onClick={scrollToTop}>
      ↑
    </ScrollTopButtonWrapper>
  );
};

export default ScrollTopButton;