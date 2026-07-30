import { getDbPool } from './_db.js';

export default async function handler(req, res) {
  const pool = getDbPool();

  if (!pool) {
    return res.status(200).json({
      fallback: true,
      message: 'No Neon DATABASE_URL configured. Falling back to local storage.'
    });
  }

  try {
    const client = await pool.connect();

    if (req.method === 'GET') {
      const result = await client.query('SELECT * FROM products ORDER BY order_index ASC, id ASC');
      client.release();
      return res.status(200).json({ success: true, products: result.rows });
    }

    if (req.method === 'POST') {
      const { id, category_id, name, price, description, image, is_available, is_popular } = req.body;
      const result = await client.query(
        `INSERT INTO products (id, category_id, name, price, description, image, is_available, is_popular)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [id || 'p_' + Date.now(), category_id, name, price, description, image, is_available ?? true, is_popular ?? false]
      );
      client.release();
      return res.status(201).json({ success: true, product: result.rows[0] });
    }

    if (req.method === 'PUT') {
      const { id, is_available, price, name, description } = req.body;
      const result = await client.query(
        `UPDATE products SET 
          is_available = COALESCE($2, is_available),
          price = COALESCE($3, price),
          name = COALESCE($4, name),
          description = COALESCE($5, description)
         WHERE id = $1 RETURNING *`,
        [id, is_available, price, name, description]
      );
      client.release();
      return res.status(200).json({ success: true, product: result.rows[0] });
    }

    client.release();
    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('API Products Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
