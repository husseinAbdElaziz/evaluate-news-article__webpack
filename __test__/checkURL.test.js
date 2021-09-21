import { validateUrl } from '../src/client/js/checkURL';

describe('Test URL Validation', () => {
  test('validateUrl should be Truthy', () => {
    const url = validateUrl(
      'https://thehackernews.com/2021/09/cring-ransomware-gang-exploits-11-year.html'
    );
    expect(url).toBeTruthy();
  });
});
