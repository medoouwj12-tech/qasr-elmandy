import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from '../data/initialData';

const MenuContext = createContext();

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
    date: new Date().toISOString(),
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
    date: new Date().toISOString(),
    items: [
      { id: "p47", name: "صنية التوفير", quantity: 1, price: 3200.00 }
    ]
  }
];

export const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('qasr_mandi_categories');
      return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
    } catch (e) {
      return INITIAL_CATEGORIES;
    }
  });

  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('qasr_mandi_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('qasr_mandi_orders');
      return saved ? JSON.parse(saved) : SAMPLE_ORDERS;
    } catch (e) {
      return SAMPLE_ORDERS;
    }
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize with API if available
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {
        // Silently use localStorage fallback
      });
  }, []);

  // Persist categories
  useEffect(() => {
    try {
      localStorage.setItem('qasr_mandi_categories', JSON.stringify(categories));
    } catch (e) {}
  }, [categories]);

  // Persist products
  useEffect(() => {
    try {
      localStorage.setItem('qasr_mandi_products', JSON.stringify(products));
    } catch (e) {}
  }, [products]);

  // Persist orders
  useEffect(() => {
    try {
      localStorage.setItem('qasr_mandi_orders', JSON.stringify(orders));
    } catch (e) {}
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

    // Async push to serverless API if live
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    }).catch(() => {});

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
    try {
      localStorage.removeItem('qasr_mandi_orders');
    } catch (e) {}
  };

  // Product CRUD
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

    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productToAdd)
    }).catch(() => {});

    return productToAdd;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );

    fetch('/api/products', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updatedFields })
    }).catch(() => {});
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleAvailability = (id) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = { ...p, is_available: !p.is_available };
          fetch('/api/products', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: p.id, is_available: updated.is_available })
          }).catch(() => {});
          return updated;
        }
        return p;
      })
    );
  };

  // Category CRUD
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
    try {
      localStorage.removeItem('qasr_mandi_categories');
      localStorage.removeItem('qasr_mandi_products');
      localStorage.removeItem('qasr_mandi_orders');
    } catch (e) {}
  };

  // Filter products safely
  const filteredProducts = (products || []).filter((product) => {
    if (!product) return false;
    const matchesCategory =
      activeCategory === 'all' || product.category_id === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
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
