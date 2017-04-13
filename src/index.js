import emojiRegexCreator from 'emoji-regex';

const emojiRegex = emojiRegexCreator();

export default {

  isPureEmojiString(text) {
    if (!text || !text.trim()) {
      return false;
    }

    // Benchmark: http://jsben.ch/#/qpvoO
    return text.replace(emojiRegex, '').trim() === '';
  },

};
