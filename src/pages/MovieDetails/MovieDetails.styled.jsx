import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Text = styled(NavLink)`
  margin-bottom: 16px;
  font-size: 24px;
  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;