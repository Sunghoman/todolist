import styled from "styled-components";

export const NotFoundContainer = styled.main`
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
`
export const PageNotFound = styled.div`
  display: table-cell;
  vertical-align: middle;
  & h1 {
    font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
    @keyframes type{
      from{ box-shadow: inset -3px 0px 0px #888; }
      to{ box-shadow: inset -3px 0px 0px transparent; }
    }
  }
  
`