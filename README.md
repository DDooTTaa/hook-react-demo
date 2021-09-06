리액트 훅 & TypeScript 연습

- [] useTitle = 리엑트 다큐먼트의 타이틀을 몇 개의 Hook와 함께 바꾸는 거
- [] useInput = 그냥 인풋
- [] usePageLeave = 유저가 페이지를 벗어나는 시점을 발견하고 함수를 실행
- [] useClick = 누군가 클릭하는 시점을 발견하고 함수 실행
- [] useFadeIn = 애니메이션을 엘리먼트 안으로 서서히 사라지게 만들기
- [] useFullscreen = 어떤 엘리먼트든 풀스크린으로 만들거나 일반 화면으로 돌아가게
- [] useHover = 어떤 것에 마우스를 올렸을 때를 감지
- [] useNetwork = 네트워크 상태 확인
- [] useNotification = notification API 를 사용할 때 유저에게 알림
- [] useScroll = 스크롤할 때 알려줌
- [] useTabs = tab을 사용하기 매우 편하게?
- [] usePreventLeave = 유저가 변경사항이나 무엇이든 저장하지않고 페이지를 벗어나길 원할 떄 확인
- [] useConfirm = 위에꺼랑 비슷한데 기능 추가?
- [] useAxios = HTTP Request 를 위한 wrapper?

## Hook 을 사용하는 이유 & Class Programming 와 Functional Programming 에 대한 이해

앱을 리액트 훅으로 만든다면 class Component 와 didMount , render 를 할 필요가 없음
모든 것은 하나의 Function 이 됨

useState를 이용하면 state 를 편하게 업데이트할 수 있다!
useEffect 를 이용하면 componentDidmount 를 쉽게 사용할 수 있다!
