import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from '../data/initialData';

const MenuContext = createContext();

// Sample initial sales history data for rich analytics demo
const SAMPLE_ORDERS = [
  {
    id: "ord_1001",
    customer_name: "أحمد محمود",
    order_type: "table",
    table_number: "ترابيزة 4",
    delivery_address: "",
    notes: "زيادة طحينة وصوص برياني",
    whatsapp_number: "01066568284",
    total_price: 970.00,
    status: "completed",
    date: new Date().toISOString(), // Today
    items: [
      { id: "p1", name: "Quarter Mandi Chicken", quantity: 2, price: 170.00 },
      { id: "p41", name: "فرخة مندي مع رز بسمتي شوربة وسلطة وطحينة (صينية بدوي)", quantity: 1, price: 600.00 },
      { id: "p105", name: "شاي زرد بدوي", quantity: 1, price: 60.00 }
    ]
  },
  {
    id: "ord_1002",
    customer_name: "مهندس طارق العبد",
    order_type: "delivery",
    table_number: "",
    delivery_address: "شارع 9، المعادي، عمارة 14، الشقة 5",
    notes: "التوصيل سريع لو سمحت",
    whatsapp_number: "01098128320",
    total_price: 3200.00,
    status: "completed",
    date: new Date().toISOString(), // Today
    items: [
      { id: "p47", name: "صنية التوفير", quantity: 1, price: 3200.00 }
    ]
  },
  {
    id: "ord_1003",
    customer_name: "د. هاني مصطفى",
    order_type: "table",
    table_number: "ترابيزة VIP 1",
    delivery_address: "",
    notes: "شاي بدوي بعد الأكل",
    whatsapp_number: "01066568284",
    total_price: 1800.00,
    status: "completed",
    date: new Date().toISOString(), // Today
    items: [
      { id: "p53", name: "صنيه الحبيبه", quantity: 1, price: 1800.00 }
    ]
  },
  {
    id: "ord_1004",
    customer_name: "محمود حسن",
    order_type: "delivery",
    table_number: "",
    delivery_address: "شارع النصر، مدينة نصر",
    notes: "بدون ثومية",
    whatsapp_number: "01098128320",
    total_price: 770.00,
    status: "completed",
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    items: [
      { id: "p3", name: "Quarter Mandi Meat", quantity: 1, price: 400.00 },
      { id: "p10", name: "1/4 kg Grilled Kebab", quantity: 1, price: 300.00 },
      { id: "p98", name: "حواوشي بلدي", quantity: 1, price: 70.00 }
    ]
  }
];

const safeParse = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => safeParse('qasr_mandi_categories', INITIAL_CATEGORIES));
  const [products, setProducts] = useState(() => safeParse('qasr_mandi_products', INITIAL_PRODUCTS));
  const [orders, setOrders] = useState(() => safeParse('qasr_mandi_orders', SAMPLE_ORDERS));

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Persist categories
  useEffect(() => {
    localStorage.setItem('qasr_mandi_categories', JSON.stringify(categories));
  }, [categories]);

  // Persist products
  useEffect(() => {
    localStorage.setItem('qasr_mandi_products', JSON.stringify(products));
  }, [products]);

  // Persist orders
  useEffect(() => {
    localStorage.setItem('qasr_mandi_orders', JSON.stringify(orders));
  }, [orders]);

  // Orders Management
  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: 'ord_' + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toISOString(),
      status: 'completed'
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const deleteOrder = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
  };

  const clearOrdersHistory = () => {
    setOrders([]);
    localStorage.removeItem('qasr_mandi_orders');
  };

  // Admin Actions - Product CRUD
  const addProduct = (newProduct) => {
    const id = 'p_' + Date.now();
    const productToAdd = {
      ...newProduct,
      id,
      price: parseFloat(newProduct.price),
      is_available: newProduct.is_available !== undefined ? newProduct.is_available : true,
      order: products.length + 1
    };
    setProducts((prev) => [productToAdd, ...prev]);
    return productToAdd;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleAvailability = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_available: !p.is_available } : p))
    );
  };

  // Admin Actions - Category CRUD
  const addCategory = (newCat) => {
    const id = 'cat_' + Date.now();
    const categoryToAdd = {
      ...newCat,
      id,
      order: categories.length + 1
    };
    setCategories((prev) => [...prev, categoryToAdd]);
    return categoryToAdd;
  };

  const updateCategory = (id, updatedFields) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedFields } : c))
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const resetToDefaultData = () => {
    setCategories(INITIAL_CATEGORIES);
    setProducts(INITIAL_PRODUCTS);
    setOrders(SAMPLE_ORDERS);
    localStorage.removeItem('qasr_mandi_categories');
    localStorage.removeItem('qasr_mandi_products');
    localStorage.removeItem('qasr_mandi_orders');
  };

  // Compute filtered products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' || product.category_id === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MenuContext.Provider
      value={{
        categories,
        products,
        filteredProducts,
        orders,
        addOrder,
        updateOrderStatus,
        deleteOrder,
        clearOrdersHistory,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleAvailability,
        addCategory,
        updateCategory,
        deleteCategory,
        resetToDefaultData
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
