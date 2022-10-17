import styled from "styled-components";

export const TodoListBody = styled.div`
  width: 420px;
  overflow: scroll;
  height: 540px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const TodoListItem = styled.div`
  display: flex;
  width: 24rem;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  transition: all 0.3s linear;
  &:hover {
    transform: translateX(3%);
  }
`
export const H4 = styled.h4`
  margin: 20px auto;
`;
export const Output = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  width: 100%;
  height: 540px;
  border-radius: 10px;
  background-color: #f7f9f9;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
