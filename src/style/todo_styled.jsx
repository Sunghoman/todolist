import styled from "styled-components";

export const TodoBody = styled.div`
  width: 420px;
  float: left;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 10px 0 10px 0;
`;

export const TitleAndButtonPosition = styled.div`
  display: flex;
  justify-content: space-between;
`;
