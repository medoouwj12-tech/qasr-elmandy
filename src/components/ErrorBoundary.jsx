import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#0d0f12] text-slate-100 flex items-center justify-center p-8 font-sans" dir="rtl">
          <div className="max-w-md text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-rose-900/50 flex items-center justify-center mx-auto border border-rose-500/30">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-xl font-bold text-rose-300">عذراً، حدث خطأ غير متوقع</h1>
            <p className="text-sm text-slate-400">يرجى تحديث الصفحة أو المحاولة مرة أخرى لاحقاً.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2 rounded-xl transition-all"
            >
              تحديث الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
