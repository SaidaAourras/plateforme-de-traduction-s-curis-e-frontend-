"use client";
import React, { useState } from "react";
import { Mail, Lock, ArrowRight, AlertCircle, Check } from "lucide-react";
import Background_Animated from "@/app/components/background_animated/page";
import Floatings_particles from "@/app/components/floatings_particles/page";
import Main_Left_Side from "@/app/components/main_left_side/page";
import Driver from "@/app/components/driver/page";
import Form_Header from "@/app/components/form_header/page";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const login = async (username, password) => {
    const body = new URLSearchParams();
    body.append("grant_type", "password");
    body.append("username", username);
    body.append("password", password);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    let data;

    try {
      data = await response.json();
    } catch {
      throw new Error("Réponse JSON invalide du serveur");
    }

    if (!response.ok) {
      throw new Error(
        data.detail || "Nom d'utilisateur ou mot de passe incorrect"
      );
    }

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const data = await login(username, password);
      localStorage.setItem("user_token", data.access_token);
      setSuccess(true);

      // Redirection après 1 seconde
      setTimeout(() => {
        window.location.href = "/translation";
      }, 1000);
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

        {/* Right Side - Login Card */}
        <div className="w-full lg:w-auto lg:min-w-[480px]">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl p-8 lg:p-10">
              {/* Header */}
              <Form_Header></Form_Header>

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
                  <p className="text-sm text-green-300">
                    Connexion réussie! Redirection...
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="space-y-6">
                {/* username Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
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
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      disabled={loading}
                      className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <span className="text-sm text-gray-400">
                      Se souvenir de moi
                    </span>
                  </label>
                  <button
                    onClick={() => alert("Fonction à venir")}
                    disabled={loading}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={loading || !username.trim() || !password.trim()}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Connexion en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Se connecter</span>
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

              {/* Sign Up Link */}
              <button
                onClick={() => (window.location.href = "/auth/register")}
                disabled={loading}
                className="w-full py-3 px-6 border-2 border-slate-800 hover:border-blue-500 hover:bg-blue-500/5 text-gray-300 hover:text-blue-400 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Créer un compte gratuitement
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
