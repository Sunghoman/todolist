import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
`
export const MainContainer = styled.div`
  position: relative;
  width: 80%;
`
export const MainBack = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, .25);
  border-radius: 3px;
`
export const MainBackText = styled.div`
  margin: -10px 0px 30px 0px;
  position: relative;
  text-align: center;
  width: 50%;
  padding: 75px 45px;
  color: white;
  font-weight: 300;
`

export const MainFront = styled.div`
  position: absolute;
  padding-top: 5em;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 420px;
  color: tomato;
  font-weight: 300;
  background-color: #ffffffda;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.95);
  overflow: hidden;
  transform: translate3d(100%, -50%, 0);
  transition: transform .4s ease-in-out;
`
export const MainTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.66rem;
  line-height: 1em;
  text-align: center;
`

export const MainText = styled.p`
  font-size: .83rem;
  line-height: 1.4em;
  letter-spacing: 0.25px;
  text-align: center;
`

export const MainLink = styled(Link)`
  position: absolute;
  margin: 30px 0px 30px 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: #435a6b;
  border: 1px solid #435a6b;
  padding: 1em 2em;
  transition: all 0.3s ease;
  &:hover {
    color: #7da4c5;
    border: 2px solid #7da4c5;
  }
`
