/* tslint:disable */

import * as exp from './context';

describe('Context', () => {
  it('should export a new react context', () => {
    expect(exp.ContextConsumer).toBeTruthy();
    expect(exp.ContextProvider).toBeTruthy();
  });
});