import {
  MainPage,
  MainBackText,
  MainContainer,
  MainBack,
  MainFront,
  MainTitle,
  MainText,
  MainWrap,
  MainLinkOne,
  MainLinkTwo,
} from "../../style/main_styled";

export const Main = () => {
  return (
    <MainWrap>
      <MainPage>
        <MainContainer>
          <MainBack>
            <MainBackText>
              <MainTitle>항해99 9기 D반 StackOverFlow</MainTitle>
              <MainText>
                주특기 별로, 경험한 에러와 해결방법을 공유해보세요
              </MainText>
              <hr />
              <MainLinkOne to="/list">다른 사람들 글 보기</MainLinkOne>
            </MainBackText>
          </MainBack>

          <MainFront className="mainFront">
            <MainTitle>에러를 만나면</MainTitle>
            <MainText>
              이 곳에서 공유하고, 해결 방법을 찾아보세요
              <br />
              당신의 고민의 흔적이 다른 사람들을 도울 수 있읍니다.
              <br />
            </MainText>
            <MainLinkTwo to="/editor">새로운 글 쓰기</MainLinkTwo>
          </MainFront>
        </MainContainer>
      </MainPage>
    </MainWrap>
  );
};
