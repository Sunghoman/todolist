import styled from "styled-components";

export const TodoBody = styled.div`
  width: 420px;
`;
export const Title = styled.h1`
  font-size: 40px;
  margin: 10px 0 10px 0;
`;
export const TitleAndButtonPosition = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonSet = styled.div`
  & button {
    border: none;
    background-color: rgb(21, 32, 43);
    color: rgb(247, 249, 249);
    margin-top: 30px;
  }
`;
