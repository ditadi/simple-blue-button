
import { z } from 'zod';

// Schema for a simple hello message response
export const helloMessageSchema = z.object({
  message: z.string(),
});

export type HelloMessage = z.infer<typeof helloMessageSchema>;
