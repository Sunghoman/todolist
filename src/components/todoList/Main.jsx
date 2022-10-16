import {
  MainPage,
  MainBackText,
  MainContainer,
  MainBack,
  MainFront,
  MainTitle,
  MainText,
  MainLink,

} from "../../style/main_styled";

export const Main =() => {
  return (
    <MainPage>
      <MainContainer>
        
        <MainBack>
          <MainBackText>
            <MainTitle>항해99 9기 D반 StackOverFlow</MainTitle>
            <MainText>주특기 별로, 경험한 에러와 해결방법을 공유해보세요</MainText>
            <hr/>
            <MainLink to="/list">다른 사람들 글 보기</MainLink>
          </MainBackText>
        </MainBack>

        <MainFront>
          <MainTitle>새로운 글 작성하기</MainTitle>
          <MainText>
            React, Spring, Git 에러를 만나면<br/>
            이 곳에서 공유하고, 해결 방법을 찾아보세요<br/>
            당신의 고민의 흔적이 다른 사람들을 도울 수 있읍니다.<br/>
          </MainText>    
          <MainLink to="/list">이 버튼 옮겨야함(새 글 작성)</MainLink>
        </MainFront>

      </MainContainer>
    </MainPage>
  )
}
