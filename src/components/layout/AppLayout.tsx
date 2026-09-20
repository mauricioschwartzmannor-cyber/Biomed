import React, { useState } from 'react';
import {
  Box,
  LayoutDashboard,
  BookOpen,
  CheckCircle2,
  Layers,
  Sparkles,
  Stethoscope,
  Bookmark,
  Award,
  Shield,
  Menu,
  X,
  Flame,
  Search,
  Bell,
  User,
  LogOut,
  ChevronRight,
  HelpCircle,
  Download
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';
import { ANATOMICAL_STRUCTURES } from '../../data';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const {
    activeTab,
    setActiveTab,
    currentUser,
    toasts,
    navigateToStructureInAtlas
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchResults = ANATOMICAL_STRUCTURES.filter(
    (s) =>
      globalSearch.trim().length > 1 &&
      (s.ptName.toLowerCase().includes(globalSearch.toLowerCase()) ||
        s.latinName.toLowerCase().includes(globalSearch.toLowerCase()) ||
        s.systemId.toLowerCase().includes(globalSearch.toLowerCase()))
  );

  const navItems: { id: NavigationTab; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'dashboard', label: 'Início', icon: LayoutDashboard },
    { id: 'atlas', label: 'Atlas 3D Interativo', icon: Box, badge: '360°' },
    { id: 'sistemas', label: '30 Sistemas', icon: BookOpen },
    { id: 'cursos', label: 'Cursos & Trilhas', icon: BookOpen },
    { id: 'questoes', label: 'Questões & Simulados', icon: CheckCircle2 },
    { id: 'flashcards', label: 'Flashcards SRS', icon: Layers },
    { id: 'tutor', label: 'Tutor Biomédico IA', icon: Sparkles, badge: 'IA' },
    { id: 'casos-clinicos', label: 'Casos Clínicos', icon: Stethoscope },
    { id: 'histologia', label: 'Lâminas Histológicas', icon: Layers },
    { id: 'anotacoes', label: 'Anotações & Salvos', icon: Bookmark },
    { id: 'progresso', label: 'Meu Progresso', icon: Award },
    { id: 'perfil', label: 'Perfil & LGPD', icon: User }
  ];

  // If user is admin/teacher/reviewer, show Backoffice tab
  if (['admin', 'teacher', 'reviewer'].includes(currentUser.role)) {
    navItems.push({ id: 'admin', label: 'Backoffice Editorial', icon: Shield, badge: 'Admin' });
  }

  const handleSelectNav = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
      {/* Toast Notifications Container */}
      <div className="fixed top-5 right-5 z-50 space-y-2 max-w-md pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-2xl text-xs text-white"
          >
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                t.type === 'success'
                  ? 'bg-emerald-400'
                  : t.type === 'warning'
                  ? 'bg-amber-400'
                  : 'bg-cyan-400'
              }`}
            />
            <span className="text-slate-200 font-medium">{t.message}</span>
          </div>
        ))}
      </div>

      {/* Top Navbar */}
      <header className="h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <div
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950 group-hover:scale-105 transition">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-black tracking-tight text-white group-hover:text-cyan-400 transition">
                Anatomia <span className="text-cyan-400">360</span>
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                Ciências Biomédicas
              </span>
            </div>
          </div>
        </div>

        {/* Global Fast Search */}
        <div className="relative flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={globalSearch}
              onFocus={() => setShowSearchResults(true)}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setShowSearchResults(true);
              }}
              placeholder="Buscar no Atlas 3D (ex: Miocárdio, Fêmur, Cérebro)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-500 transition"
            />
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl z-50 max-h-72 overflow-y-auto space-y-1">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-500">
                Peças Anatômicas Encontradas:
              </div>
              {searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={() => {
                    navigateToStructureInAtlas(res.id);
                    setShowSearchResults(false);
                    setGlobalSearch('');
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 flex items-center justify-between text-xs transition"
                >
                  <div>
                    <span className="font-bold text-white block">{res.ptName}</span>
                    <span className="text-[10px] text-slate-400 italic">{res.latinName}</span>
                  </div>
                  <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/60">
                    Abrir 3D
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Header Right: Streak, XP & User Profile */}
        <div className="flex items-center gap-3">
          {/* Download Project ZIP */}
          <a
            href="/api/download/anatomia360.zip"
            download="anatomia360-projeto-completo.zip"
            title="Baixar projeto completo em .ZIP"
            className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-950 to-slate-900 hover:from-cyan-900 hover:to-slate-800 border border-cyan-600/50 hover:border-cyan-400 text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-sm group"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition" />
            <span className="hidden sm:inline">Baixar ZIP</span>
          </a>

          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
            <Flame className="w-4 h-4 text-amber-400 fill-current animate-pulse" />
            <span className="font-mono font-bold text-white">
              {currentUser.gamification.streakDays}d
            </span>
          </div>

          {/* XP Badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-mono font-bold text-cyan-300">
              {currentUser.gamification.xp} XP
            </span>
          </div>

          {/* User Button */}
          <button
            onClick={() => setActiveTab('perfil')}
            className="flex items-center gap-2 p-1 pl-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition"
          >
            <span className="hidden md:inline text-xs font-semibold text-slate-200">
              {currentUser.name.split(' ')[0]}
            </span>
            <img
              src={currentUser.avatarUrl}
              alt={currentUser.name}
              className="w-7 h-7 rounded-lg object-cover border border-cyan-500/50"
            />
          </button>
        </div>
      </header>

      {/* Body: Left Sidebar + Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-slate-800/80 bg-slate-950 p-3 space-y-1 overflow-y-auto shrink-0 select-none">
          <div className="px-3 py-2 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
            Navegação Principal
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition group ${
                  isActive
                    ? 'bg-cyan-950/70 border border-cyan-500/50 text-cyan-200 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-4 mt-auto border-t border-slate-900 px-3 text-[11px] text-slate-600">
            <p className="font-semibold text-slate-500">Anatomia 360 v2.0</p>
            <p>Conforme *Terminologia Anatomica*</p>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-6 flex flex-col space-y-3 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="font-black text-lg text-white">Menu da Plataforma</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'bg-cyan-950 text-cyan-200 border border-cyan-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-cyan-300">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Main View Area */}
        <main className="flex-1 overflow-y-auto bg-slate-950">{children}</main>
      </div>
    </div>
  );
};
