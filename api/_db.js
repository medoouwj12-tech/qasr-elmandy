const { Pool } = require('@neondatabase/serverless');

function getDbPool() {
  const connectionString =
    process.env.DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!connectionString) {
    return null;
  }

  return new Pool({ connectionString });
}

module.exports = { getDbPool };
