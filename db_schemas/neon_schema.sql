-- Complete Neon PostgreSQL Schema for Qasr Al-Mandi (قصر المندي)

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name_ar VARCHAR(100) NOT NULL,
    name_en VARCHAR(100),
    icon VARCHAR(50) DEFAULT 'UtensilsCrossed',
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    is_popular BOOLEAN DEFAULT FALSE,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Orders Table
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

-- 4. Admins Table
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial Categories
INSERT INTO categories (id, name_ar, name_en, icon, order_index) VALUES
('cat_1', 'وجبات قصر المندى واللحوم', 'Mandi & Meat Meals', 'UtensilsCrossed', 1),
('cat_2', 'صوانى قصر المندى', 'Qasr Al-Mandi Platters', 'Flame', 2),
('cat_3', 'ركن المشويات', 'Grill Corner', 'Beef', 3),
('cat_4', 'سندوتشات', 'Sandwiches', 'Sandwich', 4),
('cat_5', 'مشروبات قصر المندى', 'Beverages', 'Coffee', 5)
ON CONFLICT (id) DO NOTHING;

-- Seed Admin
INSERT INTO admins (username, password_hash, role) VALUES
('admin', 'mandi2026', 'superadmin')
ON CONFLICT (username) DO NOTHING;
