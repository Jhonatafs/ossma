const FALLBACK_ID_PREFIX = 'local';

export function createEntityId(): string {
	const randomUUID = globalThis.crypto?.randomUUID;

	if (typeof randomUUID === 'function') {
		return randomUUID.call(globalThis.crypto);
	}

	const timestampPart = Date.now().toString(36);
	const randomPart = Math.random().toString(36).slice(2, 12);

	return `${FALLBACK_ID_PREFIX}-${timestampPart}-${randomPart}`;
}
