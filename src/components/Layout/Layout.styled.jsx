import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: 0;
  font-size: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 3px 5px -1px rgba(34, 60, 80, 0.6);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 40px;

  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;
