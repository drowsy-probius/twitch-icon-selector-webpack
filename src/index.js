(async () => {
  if(![
    "www.twitch.tv",
    "clips.twitch.tv",
    "embed.twitch.tv",
    "dashboard.twitch.tv",
  ].includes(window.location.hostname)) return;

  if(window.twitchIconSelector) return; 

  const {default: logger} = await import("./utils/logger");
  
  logger.log(`script loaded!`);

  window.twitchIconSelector = {

  }
})();