import React, { useState } from 'react';
import { X, Send, Phone, MapPin, User, FileText, Utensils, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useMenu } from '../context/MenuContext';
import { OFFICIAL_WHATSAPP_NUMBERS } from '../data/initialData';

export const WhatsAppCheckoutModal = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { addOrder } = useMenu();

  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('table'); // 'table' | 'delivery'
  const [tableNumber, setTableNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(OFFICIAL_WHATSAPP_NUMBERS[0].number);

  if (!isOpen) return null;

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();

    if (!customerName.trim()) {
      alert('الرجاء إدخال اسمك أولاً');
      return;
    }

    const locationText =
      orderType === 'table'
        ? `ترابيزة رقم (${tableNumber || 'غير محدد'})`
        : `عنوان التوصيل: (${deliveryAddress || 'غير محدد'})`;

    // Record order in system for sales reporting
    addOrder({
      customer_name: customerName.trim(),
      order_type: orderType,
      table_number: tableNumber || '',
      delivery_address: deliveryAddress || '',
      notes: notes.trim(),
      whatsapp_number: selectedNumber,
      total_price: totalPrice,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))
    });

    // Format items list for WhatsApp
    const itemsFormatted = cartItems
      .map(
        (item) =>
          `- ${item.quantity} x ${item.name} (${(item.price * item.quantity).toLocaleString()} EGP)`
      )
      .join('\n  ');

    const notesFormatted = notes.trim() ? `\n  - ملاحظات: ${notes.trim()}` : '';

    // Message format according to requirements
    const message = `👑 *طلب جديد من منيو قصر المندي* 👑
• 👤 *الاسم:* ${customerName.trim()}
• 📍 *الموقع/الترابيزة:* ${locationText}
---------------------------------------
• 🛒 *الطلبات:*
  ${itemsFormatted}${notesFormatted}
---------------------------------------
• 💰 *إجمالي الحساب:* ${totalPrice.toLocaleString()} EGP
• ⚡ *شكراً لاختياركم قصر المندي!*`;

    // Format phone number for international wa.me format (Egypt +20)
    const formattedPhone = selectedNumber.startsWith('0')
      ? '2' + selectedNumber
      : selectedNumber;

    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart and close modal
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#12161f] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-950 via-[#161a23] to-amber-950 p-4 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">إرسال الطلب عبر الواتساب</h3>
              <p className="text-xs text-amber-400/80">سيتم تجهيز طلبك فوراً بمطابخنا</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSendWhatsAppOrder} className="p-5 space-y-4">
          {/* Customer Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>الاسم الكريم *</span>
            </label>
            <input
              type="text"
              required
              placeholder="أدخل اسمك كاملاً"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-[#161a23] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>

          {/* Order Type Toggle */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
              <Utensils className="w-3.5 h-3.5 text-amber-400" />
              <span>نوع الطلب</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('table')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                  orderType === 'table'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-md'
                    : 'bg-[#161a23] text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                طلب داخل المطعم (ترابيزة)
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                  orderType === 'delivery'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-md'
                    : 'bg-[#161a23] text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                توصيل منازل (دليفري)
              </button>
            </div>
          </div>

          {/* Table # or Delivery Address */}
          {orderType === 'table' ? (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>رقم الترابيزة</span>
              </label>
              <input
                type="text"
                placeholder="مثال: ترابيزة 5 أو الصالة الرئيسية"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="w-full bg-[#161a23] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
              />
            </div>
          ) : (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>عنوان التوصيل بالتفصيل</span>
              </label>
              <input
                type="text"
                placeholder="اسم الشارع، رقم العمارة، الشقة، المنطقة"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full bg-[#161a23] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
              />
            </div>
          )}

          {/* Special Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>ملاحظات إضافية على الطلب</span>
            </label>
            <textarea
              rows={2}
              placeholder="مثال: زيادة طحينة، بدون بصل، الأرز بدون مكسرات..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#161a23] border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
            />
          </div>

          {/* Official WhatsApp Numbers Selection (Dual Numbers) */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5 space-x-reverse">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>اختر رقم الإدارة لاستقبال الطلب:</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {OFFICIAL_WHATSAPP_NUMBERS.map((item) => {
                const isSelected = selectedNumber === item.number;
                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setSelectedNumber(item.number)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs font-bold ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-md ring-1 ring-emerald-500'
                        : 'bg-[#161a23] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span dir="ltr">{item.display}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Summary Banner */}
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">إجمالي الوجبات والخدمة:</span>
            <span className="text-base font-black text-amber-400">
              {totalPrice.toLocaleString()} EGP
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black py-3.5 px-4 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center space-x-2 space-x-reverse transition-all active:scale-[0.98] text-base cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>تأكيد وفتح الواتساب الآن</span>
          </button>
        </form>
      </div>
    </div>
  );
};
