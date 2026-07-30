import { getDbPool } from './_db.js';

const INITIAL_CATEGORIES = [
  { id: "cat_1", name_ar: "وجبات قصر المندى واللحوم", name_en: "Mandi & Meat Meals", icon: "UtensilsCrossed", order: 1 },
  { id: "cat_2", name_ar: "صوانى قصر المندى", name_en: "Qasr Al-Mandi Platters", icon: "Flame", order: 2 },
  { id: "cat_3", name_ar: "ركن المشويات", name_en: "Grill Corner", icon: "Beef", order: 3 },
  { id: "cat_4", name_ar: "سندوتشات", name_en: "Sandwiches", icon: "Sandwich", order: 4 },
  { id: "cat_5", name_ar: "مشروبات قصر المندى", name_en: "Beverages", icon: "Coffee", order: 5 }
];

export default async function handler(req, res) {
  const pool = getDbPool();

  if (!pool) {
    return res.status(200).json({
      success: false,
      message: 'DATABASE_URL environment variable is not configured yet. App runs in Client Storage mode.'
    });
  }

  try {
    const client = await pool.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS categories (
          id VARCHAR(50) PRIMARY KEY,
          name_ar VARCHAR(100) NOT NULL,
          name_en VARCHAR(100),
          icon VARCHAR(50) DEFAULT 'UtensilsCrossed',
          order_index INT DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS products (
          id VARCHAR(50) PRIMARY KEY,
          category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
          name VARCHAR(255) NOT NULL,
          price NUMERIC(10, 2) NOT NULL,
          description TEXT,
          image TEXT,
          is_available BOOLEAN DEFAULT TRUE,
          is_popular BOOLEAN DEFAULT FALSE,
          order_index INT DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS orders (
          id VARCHAR(50) PRIMARY KEY,
          customer_name VARCHAR(100) NOT NULL,
          order_type VARCHAR(20) NOT NULL,
          table_number VARCHAR(50),
          delivery_address TEXT,
          notes TEXT,
          whatsapp_number VARCHAR(20) NOT NULL,
          total_price NUMERIC(10, 2) NOT NULL,
          status VARCHAR(20) DEFAULT 'completed',
          items JSONB NOT NULL,
          date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    for (const cat of INITIAL_CATEGORIES) {
      await client.query(
        `INSERT INTO categories (id, name_ar, name_en, icon, order_index)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (id) DO NOTHING`,
        [cat.id, cat.name_ar, cat.name_en, cat.icon, cat.order]
      );
    }

    client.release();

    return res.status(200).json({
      success: true,
      message: 'Neon PostgreSQL Database successfully initialized for Qasr Al-Mandi!'
    });
  } catch (error) {
    console.error('Neon Init Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
