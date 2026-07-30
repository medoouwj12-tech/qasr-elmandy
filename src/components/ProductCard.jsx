import React, { useState } from 'react';
import { Plus, Minus, Check, Star, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  // Check if item is already in cart
  const cartItem = (cartItems || []).find((item) => item.id === product.id);
  const currentInCartCount = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    if (!product.is_available) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const safePrice = (Number(product.price) || 0).toLocaleString();

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        product.is_available
          ? 'glass-card border-gold-glow hover:-translate-y-1 shadow-xl shadow-black/40'
          : 'bg-[#12161f]/50 border border-slate-800/80 opacity-75'
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            !product.is_available ? 'grayscale contrast-75' : ''
          }`}
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-transparent to-black/30"></div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {product.is_popular && product.is_available && (
            <span className="bg-amber-500/90 text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md backdrop-blur-md flex items-center space-x-1 space-x-reverse">
              <Star className="w-3 h-3 fill-slate-950" />
              <span>الأكثر طلباً</span>
            </span>
          )}

          {!product.is_available && (
            <span className="bg-rose-900/90 text-rose-200 border border-rose-500/30 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md backdrop-blur-md flex items-center space-x-1 space-x-reverse">
              <AlertCircle className="w-3 h-3 text-rose-400" />
              <span>نفذت الكمية</span>
            </span>
          )}
        </div>

        {/* Quantity Badge if in cart */}
        {currentInCartCount > 0 && (
          <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full shadow-lg border border-amber-300 animate-fade-in">
            في السلة: {currentInCartCount}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed min-h-[32px]">
            {product.description || 'وجبة طازجة يومياً من مطابخ قصر المندي'}
          </p>
        </div>

        {/* Price & Cart Actions */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-amber-400/80 font-medium">السعر</span>
            <div className="flex items-baseline space-x-1 space-x-reverse">
              <span className="text-lg md:text-xl font-black text-amber-400">
                {safePrice}
              </span>
              <span className="text-xs text-slate-400 font-semibold">ج.م</span>
            </div>
          </div>

          {/* Controls */}
          {product.is_available ? (
            <div className="flex items-center space-x-2 space-x-reverse">
              {/* Stepper */}
              <div className="flex items-center bg-[#161a23] border border-slate-800 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-amber-400 rounded transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-bold text-amber-300">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-amber-400 rounded transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`p-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
                  added
                    ? 'bg-emerald-500 text-slate-950 scale-105'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 hover:scale-105 active:scale-95'
                }`}
                title="إضافة إلى السلة"
              >
                {added ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : (
                  <ShoppingBag className="w-5 h-5" />
                )}
              </button>
            </div>
          ) : (
            <span className="text-xs text-slate-500 font-semibold italic bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              غير متوفر حالياً
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
