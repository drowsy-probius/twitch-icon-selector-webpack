const { console } = window;

function logger(level, ...args) {
  console[level].apply(console, ["[twitch-icon-selector]", ...args]);
}

export default {
  error: logger.bind(this, "error"),
  warn: logger.bind(this, "warn"),
  log: logger.bind(this, "log"),
  info: logger.bind(this, "info"),
  debug: logger.bind(this, "debug"),
}