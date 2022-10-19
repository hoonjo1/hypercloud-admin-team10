# hypercloud-admin-team10

## 프로젝트 개요

- 진행기간 : 10/17 ~ 10/19
- 과제주관 : hypercloud
- 참여명단 : 서수민, 장종현, 정훈조
  <br/>
  <br/>

## ⚙ 프로젝트 관리 및 설계와 관련된 사항들

- 기술스택 : React / TypeScript / Json-server / Tailwind

  - 팀원 모두 익숙하며 Components로 빠른 개발이 가능한 React를 사용 하였습니다

  - 향상된 개발 경험과 또한 높은 수준의 코드 탐색과 디버깅을 가능하게 하는 TypeScript를 사용 했습니다.

  - [로그인, 회원가입, 포스트 조회, 작성] 등 CRUD를 구현 할수있는 Json-server를 사용 했습니다.

  - 팀원 모두 처음 사용해보는 css 라이브러리 이지만 짦은 시간내 프로젝트의 기획된 UI/UX 를 구현하고자 사용 했습니다.

- 본 프로젝트는 로컬 환경에서 개발 했습니다
- json-server 실행 명령어 : npm run server

## 요구사항과 해결방법

> MISSION 1

### 회원가입, 로그인 화면

- 기능 / markUp을 구분하여 개발 하였습니다 ( useUserHandler hook / Form Component)
- useUserHandler 훅 내 로그인 / 회원가입 핸들러를 구현 했습니다<br/>
- 동일한 레이아웃 내 [isSignUp] boolean 값 사용 같은 컴포넌트의 재사용성을 극대화 시켰습니다 (signIn or signUp)

```js
import React from 'react';

interface Props {
  values: { email: string; password: string; name?: string };
  isSignUp: boolean;
  handleToggle: () => void;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  handlesignUp: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handlesignIn: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form = ({
  values,
  isSignUp,
  handleToggle,
  handleInput,
  handlesignUp,
  handlesignIn,
}: Props) => {
  return (
    //....
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={isSignUp ? handlesignUp : handlesignIn}
        >
```

- Form 컴포넌트의 form 태그 내 input 태그 입력값은 values 스테이트값을 업데이트 시킵니다

```js
///useUserHandler.ts

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

```

- Form 컴포넌트의 onSubmit 이벤트 발생시 isSignUp 상태에 따라
  handleSignUp 혹은 handleSignIn 함수 실행(values 값 포함한 api POST 요청)
- fetch 함수는 import 하여 사용 하였습니다
- axios의 error 확인이 되지않는 문제가 발생하였고 error의 타입을 지정해야 되는것을 확인 해당 타입을 적용 에러발생시 return 값 확인하여 hook에서 처리하였습니다

```js
///signUp.ts

import axios, { AxiosError } from 'axios';
import { BASE_URL } from './utils';

const signUp = async (email: string, password: string, name: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/register'`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    // 에러 발생시 에러 정보 리턴
    const { response } = error as unknown as AxiosError;
    if (response) {
      return response;
    }
  }
};

export default signUp;
```

-

```js
///useUserHandler.ts
const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await signUp(values.email, values.password, values.name);
    if (response.statusText === 'Bad Request') {
      // Bad Request 발생시 에러메시지 포함 alert창 팝업 후 종료
      alert(response.data);
      return;
    }
    // 회원가입 완료시 isSignUp 값 변경하여 signIn폼 으로 변경
    handleToggle();
    alert('Success Sign in now!');
  } catch (error) {
    alert('server ERROR ❌');
    console.error(error);
    // 그외 에러 발생시 팝업
  }
};
```

<br/>

> MISSION 2

### 콘텐츠 작성 화면

- <br/>

```js

```

<br/>

## 팀 컨밴션

git commit

- ADD : 새로운 기능 추가했을 때
- EDIT : 버그, 디자인 등 수정했을 때
- DELETE : 파일을 삭제하는 작업만 수행한 경우

branch

- feature/기능

<br/>

## 테스크

서수민 :

장종현 : url에 맞는 category matching hook

정훈조 : 초기세팅, json-server api 설정 및 구현, 로그인/회원가입 기능 구현

<br/>

## 목데이터

<details>
<summary>예시</summary>

```js

```

</details>

<br/>

## 고민했던 부분 및 느낀 점

<br/>

서수민

-

<br/>

장종현 : CKEditor를 구현해보려고 했으나 typescript와 CKEditor의 호환성에서 도출되는 에러를 핸들링하지 못하여 포기한게 너무 아쉽다.

-

<br/>

정훈조

-

<br/>
