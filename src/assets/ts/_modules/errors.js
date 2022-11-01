/* eslint max-classes-per-file: 0 */

// _modules/inline-svg
export class HTTPError extends Error {
  constructor(message) {
    super(message);
    this.name = 'HTTPError';
  }
}
