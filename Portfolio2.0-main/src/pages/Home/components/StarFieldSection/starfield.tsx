// components/StarField.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div<{ left: string; top: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  animation: twinkle 3s linear infinite;
  transition: transform 10s linear;
`;

const StarField: React.FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  const createStar = () => {
    const left = Math.random() * 100 + 'vw';
    const top = Math.random() * 100 + 'vh';

    return (
      <StarContainer key={stars.length} left={left} top={top} />
    );
  };

  const createInitialStars = () => {
    const starCount = 100;
    const initialStars: JSX.Element[] = [];

    for (let i = 0; i < starCount; i++) {
      initialStars.push(createStar());
    }

    setStars(initialStars);
  };

  useEffect(() => {
    createInitialStars();
  }, []);

  return <div className="star-field">{stars}</div>;
};

export default StarField;