# webpack
[twitch-icon-selector](https://github.com/drowsy-probius/twitch-icon-selector)의 inject내의 코드를 webpack를 사용하여 개발하기 위한 repository입니다.  


# Development
```bash
npm install --save-dev --location=project
```


`betterttv`소스코드에서 영향을 많이 받아서 개발 방식도 많이 참고를 하였다. webpack를 사용해서 모든 파일을 하나의 `js`파일로 합친다. 그래서 테스트할 때도 webpack를 사용한다.


필요 모듈 설치 후에 아래 명령어를 통해서 dev server를 실행한다.
```bash
npm start
```

서버가 실행되면 개발 버전의 파일을 사용할 수 있다. `Tampermonkey`와 같은 플러그인으로 아래와 같이 입력하면 된다. 이 때 스토어로부터 설치한 이 앱의 확장 프로그램은 비활성화 한 뒤에 진행한다.
```javascript
// ==UserScript==
// @name         twitch-icon-selector Development
// @description  
// @namespace    
// @copyright    
// @icon         
// @version      0.0.1
// @match        https://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://localhost:11223/twitchIconSelector.js';
    const head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);
})()
```

# Credits to
[betterttv](https://github.com/night/betterttv)
