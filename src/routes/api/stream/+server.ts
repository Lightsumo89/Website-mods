import { produce } from "sveltekit-sse";
import type { RequestHandler } from "./$types"
import { addListener, randomBits, removeListener } from "$lib/listener";
import type { EmitterEvent, Listener } from "$lib/event";
import ShortUniqueId from "short-unique-id";

const { randomUUID } = new ShortUniqueId({ length: randomBits, dictionary: 'alpha' });

export const POST: RequestHandler = async () => {
  let listener: Listener;

  return produce(
    async ({ emit }) => {
      listener = addListener((event) => emit('message', wrapMessage(event)))

      emit('message', wrapMessage({
        type: 'init',
        data: {
          id: listener.id
        }
      }))
    },
    {
      stop: () => {
        removeListener(listener.id);
      }
    }
  )
}

/**
 * Pads message with random bytes so duplicate messages aren't dropped
 */
const wrapMessage = (a: EmitterEvent): string => {
  return randomUUID() + JSON.stringify(a);
}