export type Fn = (x: EmitterEvent) => unknown;

export type Listener = {
	id: string;
	fn: Fn;
};

// Event Types

export type EmitterEvent = InitEvent | ReloadEvent | ConfettiEvent;

export type InitEvent = {
	type: 'init';
	data: {
		id: string;
	};
};
export type ReloadEvent = {
	type: 'reload';
	data?: undefined;
};
export type ConfettiEvent = {
	type: 'confetti';
	data?: {
		duration: number;
	};
};

export const isInit = (e: EmitterEvent): e is InitEvent => e.type == 'init';
export const isReload = (e: EmitterEvent): e is ReloadEvent => e.type == 'reload';
export const isConfetti = (e: EmitterEvent): e is ConfettiEvent => e.type == 'confetti';
