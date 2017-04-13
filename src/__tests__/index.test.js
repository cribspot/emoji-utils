import forOwn from 'lodash.forown';
import emoji from 'node-emoji';

import emojiUtils from '../index';

const testStrings = {
  null: false,
  undefined: false,
  '': false,
  ' ': false,
  '\t': false,
  'hi': false,
  'Not emoji': false,
  'Not pure emoji :blush:': false,
  ':wink:': true,
  ':wink:!': false,
  ':notarealemoji:': false,
  ':sunglasses: :cactus:': true,
  ' \t :sunglasses: \t :cactus: \t ': true,
  '\u{1F609}': true, // :wink:
  '\u{1F60E} \u{1F335}': true, // :sunglasses: :cactus:
  '\u{0041}': false, // 'A'
};

describe('emojiUtils', () => {
  forOwn(testStrings, (isPure, str) => {
    it(`recognizes '${str}' as ${isPure ? 'a' : 'NOT a'} pure emoji string`, () => {
      const emojiString = emoji.emojify(str);
      expect(emojiUtils.isPureEmojiString(emojiString)).toBe(isPure);
    });
  });
});
