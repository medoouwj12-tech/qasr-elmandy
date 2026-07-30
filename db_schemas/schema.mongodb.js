// MongoDB / Mongoose Schema for Qasr Al-Mandi (قصر المندي)

const mongoose = require('mongoose');

// Category Schema
const CategorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name_ar: { type: String, required: true },
  name_en: { type: String },
  icon: { type: String, default: 'UtensilsCrossed' },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// Product Schema
const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  category_id: { type: String, ref: 'Category', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  is_available: { type: Boolean, default: true },
  is_popular: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

module.exports = {
  Category: mongoose.model('Category', CategorySchema),
  Product: mongoose.model('Product', ProductSchema),
  Admin: mongoose.model('Admin', AdminSchema)
};
