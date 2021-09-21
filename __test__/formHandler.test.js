import { handleSubmit } from '../src/client/js/formHandler';

describe('Test handleSubmit', () => {
  test('It should be defined', () => {
    expect(handleSubmit).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof handleSubmit).toBe('function');
  });
});
