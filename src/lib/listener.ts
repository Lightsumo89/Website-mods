/**
 * This is a custom implementation of node's EventEmitter built specifically for
 * the use case of this application.
 * - A listener has an id, and a function at a minimum, and can include a
 * game_id, user_id, or a channel.
 * - The id must be saved client-side so that the listener can be removed.
 * - If a game_id, user_id, or channel are specified, that listener will be
 * called with sendToGame, sendToUser, or sendToChannel
 */

import ShortUniqueId from 'short-unique-id';

import type { EmitterEvent, Fn, Listener } from './event';

export const randomBits = 12;
const { randomUUID } = new ShortUniqueId({ length: randomBits, dictionary: 'alpha' });

// Store of all listeners
const listeners = new Map<string, Listener>();

export const addListener = (fn: Fn) => {
	const id = `ltn_${randomUUID()}`;

	const listener = { id, fn };
	listeners.set(id, listener);

	console.log(`[+] New Listener ${id}; Total Listeners: ${listeners.size}`);
	return listener;
};

export const removeListener = (id: string) => {
	const listener = listeners.get(id);
	if (!listener) return;

	listeners.delete(id);

	console.log(`[-] Listener ${id} removed; Total Listeners: ${listeners.size}`);
	return listener;
};

export const sendToAll = (event: EmitterEvent) => {
	for (const listener of listeners.values()) {
		listener.fn(event);
	}
	console.log(`Sent ${event.type} event`, { event, type: 'sent_game_event' });
};


