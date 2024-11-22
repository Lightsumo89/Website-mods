import { sendToAll } from "$lib/listener";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = () => {
  sendToAll({
    type: "reload"
  })

  return new Response();
}