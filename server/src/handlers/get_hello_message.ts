
import { type HelloMessage } from '../schema';

export const getHelloMessage = async (): Promise<HelloMessage> => {
  // This handler provides a simple "hello" message.
  // No database interaction is required for this specific handler.
  try {
    return { message: 'hello from the server' };
  } catch (error) {
    console.error('Failed to generate hello message:', error);
    throw error;
  }
};
