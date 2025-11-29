'use client'
import React, { useState } from 'react';
import { Languages, Rocket, Star, Sparkles, Check, ArrowRight, Globe, Zap, Shield, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Languages className="w-6 h-6" />,
      title: "100+ Langues",
      description: "Support multilingue complet pour traduire dans plus de 100 langues différentes"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instantané",
      description: "Traduction en temps réel grâce à notre IA de dernière génération"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurisé",
      description: "Vos données sont protégées avec un cryptage de niveau entreprise"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Universel",
      description: "Accessible partout, sur tous vos appareils, à tout moment"
    }
  ];

  const stats = [
    { value: "100+", label: "Langues supportées" },
    { value: "1M+", label: "Traductions par jour" },
    { value: "99.9%", label: "Précision IA" },
    { value: "24/7", label: "Support client" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-violet-600/10 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { transform: translateY(-100px) translateX(50px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TranslateSpace</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a>
              <button 
                onClick={() => window.location.href = '/auth/login'}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Connexion
              </button>
              <button 
                onClick={() => window.location.href = '/auth/register'}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all"
              >
                Commencer
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Tarifs</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">À propos</a>
              <button 
                onClick={() => window.location.href = '/auth/login'}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Connexion
              </button>
              <button 
                onClick={() => window.location.href = '/auth/register'}
                className="block w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-center"
              >
                Commencer
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Propulsé par l'IA avancée</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Traduisez le monde
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              en un instant
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto">
            La plateforme de traduction IA la plus puissante. Plus de 100 langues, traduction instantanée, précision garantie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={() => window.location.href = '/auth/register'}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all flex items-center gap-2"
            >
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.location.href = '/demo'}
              className="px-8 py-4 border-2 border-slate-700 hover:border-blue-500 hover:bg-blue-500/5 rounded-xl font-semibold transition-all"
            >
              Voir la démo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi choisir TranslateSpace ?
            </h2>
            <p className="text-xl text-gray-400">
              Des fonctionnalités puissantes pour tous vos besoins de traduction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 space-y-4 h-full">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-12 text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Prêt à commencer ?
              </h2>
              <p className="text-xl text-gray-400">
                Rejoignez des milliers d'utilisateurs qui font confiance à TranslateSpace
              </p>
              <button 
                onClick={() => window.location.href = '/auth/register'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
              >
                <span>Créer un compte gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 bg-slate-900/50 backdrop-blur-xl py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TranslateSpace</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            © 2024 TranslateSpace. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}