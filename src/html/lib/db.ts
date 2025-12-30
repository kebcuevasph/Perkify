import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL, // Railway provides this automatically
  ssl: {
    rejectUnauthorized: false // Required for Railway/cloud Postgres connections
  }
});

export default pool;