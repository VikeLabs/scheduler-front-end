import React from 'react';
import { StyledDivider } from './styles';
import './Divider.css';

const Divider: React.FC = () => {
  return (
    <div id="divider-container">
      <StyledDivider />
      <span className="divider-text">or</span>
      <StyledDivider />
    </div>
  );
};

export default Divider;
