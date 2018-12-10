export default (function utils() {
  let KEY_CODES = {
    ESCAPE_KEY_CODE: 27,
    ENTER_KEY_CODE: 13
  };

  return {
    isEscapeKeyPress: function(keyCode) {
      return keyCode === KEY_CODES.ESCAPE_KEY_CODE;
    },

    isEnterKeyPress: function(keyCode) {
      return keyCode === KEY_CODES.ENTER_KEY_CODE;
    }
  };
})();
