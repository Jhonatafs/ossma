import { db } from './database';
import { DATABASE_NAME, DATABASE_VERSION } from './schema';

export interface DatabaseHealthResult {
	ok: boolean;
	databaseName: string;
	databaseVersion: number;
	message?: string;
}

export interface DatabaseHealthConnection {
	open(): Promise<unknown>;
	close(): void;
}

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		return error.message;
	}

	return 'Unknown database error';
}

export async function checkDatabaseHealth(
	database: DatabaseHealthConnection = db
): Promise<DatabaseHealthResult> {
	try {
		await database.open();

		return {
			ok: true,
			databaseName: DATABASE_NAME,
			databaseVersion: DATABASE_VERSION
		};
	} catch (error) {
		return {
			ok: false,
			databaseName: DATABASE_NAME,
			databaseVersion: DATABASE_VERSION,
			message: getErrorMessage(error)
		};
	} finally {
		try {
			database.close();
		} catch {
			// Health checks must not fail because closing a mocked or unsupported database failed.
		}
	}
}
