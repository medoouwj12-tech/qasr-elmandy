import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Qasr Al-Mandi UI Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d0f12] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-amber-500/30 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-bold text-white">منيو قصر المندي - جاري التحميل</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              حدث تنبيه بسيط أثناء تحميل البيانات، يرجى النقر على الزر أدناه لإعادة التحميل.
            </p>

            <button
              onClick={() => {
                localStorage.removeItem('qasr_mandi_products');
                localStorage.removeItem('qasr_mandi_categories');
                window.location.reload();
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center space-x-2 space-x-reverse cursor-pointer shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              <span>إعادة تحميل المنيو الآن</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
