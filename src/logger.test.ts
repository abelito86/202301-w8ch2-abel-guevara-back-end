import bunyan from 'bunyan';
import logger from './looger';

describe('Given a logger', () => {
  test('Logger should be an instance of bunyan', () => {
    expect(logger).toBeInstanceOf(bunyan);
  });
});
