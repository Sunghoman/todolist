import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainButton = styled.button`
  margin: 0 auto;
  text-decoration: none;
  color: #435a6b;
  border: 1px solid #435a6b;
  padding: 1em 2em;
  transition: all 0.3s ease;
  font-size: 14px;
  width: 200px;
  display: block;
  text-align: center;
  &:hover {
    color: #7da4c5;
    border: 2px solid #7da4c5;
  }
`;
export const MainLink = styled(Link)`
  margin: 0 auto 10px;
  text-decoration: none;
  color: #435a6b;
  border: 1px solid #435a6b;
  padding: 1em 2em;
  transition: all 0.3s ease;
  font-size: 14px;
  width: 200px;
  display: block;
  text-align: center;
  &:hover {
    color: #7da4c5;
    border: 2px solid #7da4c5;
  }
`;
