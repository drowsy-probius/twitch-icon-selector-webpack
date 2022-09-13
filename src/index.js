(async () => {
  /**
   * script 실행 될 호스트를 이미 manifest.json에서 설정하므로
   * 굳이 여기서 다시 체크하지 않음.
   */

  /**
   * 모종의 이유로 두 개 이상의 객체가 로드된 경우 종료
   */
  if(window.twitchIconSelector) return; 

  /**
   * 중간 필요한 모듈 로드
   */
  const {default: logger} = await import("./utils/logger.js");
  
  logger.log(`script loaded!`);

  const {default: Storage} = await import("./storage.js");
  console.log(await Storage.getMultiple());
  console.log(await Storage.set({
    test: 100,
  }));
  console.log(await Storage.getMultiple());


  /**
   * 스크립트 객체 로드
   */
  window.twitchIconSelector = {

  }
})();