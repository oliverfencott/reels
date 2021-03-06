const trimRight = require('./trimRight');

describe('trimRight', () => {
  test(`it returns the same value as String.prototype.trimRight`, () => {
    expect(trimRight('  hello?  ')).toBe(('  hello?  ').trimRight());
    expect(trimRight('hello?  ')).toBe(('hello?  ').trimRight());
    expect(trimRight('  hello?')).toBe(('  hello?').trimRight());
    expect(trimRight('hello?')).toBe(('hello?').trimRight());
  });
});
