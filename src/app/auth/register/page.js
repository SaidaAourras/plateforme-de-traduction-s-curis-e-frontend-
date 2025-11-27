"use client";
import React, { useState } from "react";
import { Mail, Lock, ArrowRight, AlertCircle, Check, User } from "lucide-react";
import Background_Animated from "@/app/utilis/background_animated/page";
import Floatings_particles from "@/app/utilis/floatings_particles/page";
import Main_Left_Side from "@/app/utilis/main_left_side/page";
import Driver from "@/app/utilis/driver/page";

export default function ModernRegisterInterface() {
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const register = async (username,  password) => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    let data;

    try {
      data = await response.json();
    } catch {
      throw new Error("Réponse JSON invalide du serveur");
    }

    if (!response.ok) {
      throw new Error(data.detail || "Erreur lors de l'inscription");
    }
    
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    setLoading(true);

    try {
      const data = await register(username, password);
      setSuccess(true);
      
      // Redirection vers login après 2 secondes
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <Background_Animated></Background_Animated>

      {/* Floating Particles */}
      <Floatings_particles></Floatings_particles>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Side - Hero Section */}
        <Main_Left_Side></Main_Left_Side>

        {/* Right Side - Register Card */}
        <div className="w-full lg:w-auto lg:min-w-[480px]">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl p-8 lg:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/30">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Créer un compte</h2>
                <p className="text-gray-400">Rejoignez TranslateSpace aujourd'hui</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 animate-shake">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-300">Inscription réussie! Redirection vers la connexion...</p>
                </div>
              )}

              {/* Inputs */}
              <div className="space-y-5">
                {/* Username Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="votre-username"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>


                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">Minimum 8 caractères</p>
                </div>

                {/* Confirm Password Input */}
                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={loading}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div> */}

                {/* Terms Checkbox */}
                {/* <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="terms"
                    disabled={loading}
                    className="w-4 h-4 mt-1 rounded border-slate-800 bg-slate-900 text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    J'accepte les <span className="text-blue-400 hover:text-blue-300 cursor-pointer">conditions d'utilisation</span> et la <span className="text-blue-400 hover:text-blue-300 cursor-pointer">politique de confidentialité</span>
                  </label>
                </div> */}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={loading || !username.trim() ||  !password.trim() }
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Création du compte...</span>
                    </>
                  ) : (
                    <>
                      <span>Créer mon compte</span>
                      <ArrowRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <Driver></Driver>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Vous avez déjà un compte ?{' '}
                  <button 
                    onClick={() => window.location.href = "/auth/login"}
                    disabled={loading}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Se connecter
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}