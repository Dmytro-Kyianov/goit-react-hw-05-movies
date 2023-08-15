import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieTitle = styled.p`
  margin-bottom: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: black;
`;

