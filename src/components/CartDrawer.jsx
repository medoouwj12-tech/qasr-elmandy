import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = ({ isOpen, onClose, onProceedCheckout }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } =
    useCart();

  if (!isOpen) return null;

  const safeTotalPrice = (Number(totalPrice) || 0).toLocaleString();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#12161f] border-r border-amber-500/20 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 bg-[#161a23] flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <ShoppingBag className="w-6 h-6 text-amber-400" />
              <h2 className="text-lg font-bold text-white">سلة الطلبات</h2>
              <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                {totalItems} صنف
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-slate-800/60">
            {(!cartItems || cartItems.length === 0) ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-600">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-300">السلة فارغة حالياً</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    اختر وجباتك الفاخرة من المنيو وقم بإضافتها هنا
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold px-4 py-2 rounded-xl border border-slate-700 transition-colors"
                >
                  تصفح المنيو الآن
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemPrice = Number(item.price) || 0;
                const itemTotal = itemPrice * item.quantity;
                return (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between space-x-3 space-x-reverse">
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-800 bg-slate-900"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <p className="text-xs text-amber-400 font-semibold mt-0.5">
                        {itemPrice.toLocaleString()} ج.م × {item.quantity} ={' '}
                        <span className="font-black text-amber-300">
                          {itemTotal.toLocaleString()} ج.م
                        </span>
                      </p>
                    </div>

                    {/* Quantity Stepper & Remove */}
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="flex items-center bg-[#161a23] border border-slate-800 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-amber-400 rounded transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-amber-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-amber-400 rounded transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/50 rounded-lg transition-colors"
                        title="حذف من السلة"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems && cartItems.length > 0 && (
            <div className="p-4 border-t border-slate-800 bg-[#161a23] space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <button
                  onClick={clearCart}
                  className="flex items-center space-x-1 space-x-reverse text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>تفريغ السلة</span>
                </button>
                <span>الأسعار شاملة الخدمة والضريبة</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <span className="text-sm font-bold text-slate-200">إجمالي الحساب:</span>
                <div className="flex items-baseline space-x-1 space-x-reverse">
                  <span className="text-2xl font-black text-amber-400">
                    {safeTotalPrice}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">ج.م</span>
                </div>
              </div>

              <button
                onClick={onProceedCheckout}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-3.5 px-4 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center space-x-2 space-x-reverse transition-all active:scale-[0.98] text-base cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>متابعة إرسال الطلب عبر الواتساب</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
