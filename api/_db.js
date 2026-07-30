import { Pool } from '@neondatabase/serverless';

export function getDbPool() {
  const connectionString =
    process.env.DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!connectionString) {
    return null;
  }

  return new Pool({ connectionString });
}
