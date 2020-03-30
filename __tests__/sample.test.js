const sampleJsonMock = require('../__fixtures__/sample.fixture');

describe('This is a sample test file', () => {
  test('This is a test', () => {
    expect(sampleJsonMock.key).toEqual('value');
    expect(true).toBeTruthy();
  });
});
