-- PostgreSQL Database Schema for Qasr Al-Mandi (قصر المندي) Electronic Menu & Admin System

CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name_ar VARCHAR(100) NOT NULL,
    name_en VARCHAR(100),
    icon VARCHAR(50) DEFAULT 'UtensilsCrossed',
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    is_popular BOOLEAN DEFAULT FALSE,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS whatsapp_orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    order_type VARCHAR(20) CHECK (order_type IN ('table', 'delivery')),
    table_number VARCHAR(50),
    delivery_address TEXT,
    notes TEXT,
    whatsapp_number VARCHAR(20) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    items_json JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Categories
INSERT INTO categories (id, name_ar, name_en, icon, order_index) VALUES
('cat_1', 'وجبات قصر المندى واللحوم', 'Mandi & Meat Meals', 'UtensilsCrossed', 1),
('cat_2', 'صوانى قصر المندى', 'Qasr Al-Mandi Platters', 'Flame', 2),
('cat_3', 'ركن المشويات', 'Grill Corner', 'Beef', 3),
('cat_4', 'سندوتشات', 'Sandwiches', 'Sandwich', 4),
('cat_5', 'مشروبات قصر المندى', 'Beverages', 'Coffee', 5)
ON CONFLICT (id) DO NOTHING;

-- Seed Initial Admins
INSERT INTO admins (username, password_hash, role) VALUES
('admin', '$2b$10$e7V/a4.S12aD9e6U0b3f0e8f.SampleHashedPassword', 'superadmin')
ON CONFLICT (username) DO NOTHING;
