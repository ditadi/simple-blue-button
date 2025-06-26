
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { resetDB, createDB } from '../helpers';
import { getHelloMessage } from '../handlers/get_hello_message';
import { type HelloMessage } from '../schema';

describe('getHelloMessage', () => {
  // Although this handler does not interact with the database,
  // we include setup/teardown for consistency with other tests.
  beforeEach(createDB);
  afterEach(resetDB);

  it('should return a simple hello message', async () => {
    const result: HelloMessage = await getHelloMessage();

    expect(result).toBeDefined();
    expect(result.message).toBeString();
    expect(result.message).toEqual('hello from the server');
  });
});
