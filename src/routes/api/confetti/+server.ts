import { sendToAll } from "$lib/listener";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = () => {
  sendToAll({
    type: "confetti",
  })

  return new Response();
}