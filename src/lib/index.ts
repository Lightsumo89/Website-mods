// place files you want to import through the `$lib` alias in this folder.

import { writable } from 'svelte/store';

export const birthday = writable<string | null>(null);
export const listener = writable<string | null>(null);
export const confetti = writable<boolean>(false);
export const reloading = writable<boolean>(false);
