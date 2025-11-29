"use client";
import React, { useEffect, useState } from "react";
import { ArrowRightLeft, Sparkles } from "lucide-react";
import Background_Animated from "../components/background_animated/page";
import Navbar from "../components/navbar/page";
import Feature_Info from "../components/features_info/page";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function TranslationPage() {
  const [sourceLang, setSourceLang] = useState("fr");
  const [targetLang, setTargetLang] = useState("en");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const router = useRouter();

  // ========== PROTECTION PAGE ==========
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    } else {
      setIsAuthenticate(true);
    }
  }, []);

  // ========== APPEL API ==========
  const translation = async (sourceLang, targetLang, sourceText) => {
    const token = localStorage.getItem("user_token");

    const response = await fetch("http://127.0.0.1:8000/api/v1/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        choice: `${sourceLang}-${targetLang}`,
        text: sourceText,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.log(error.message);
    }

    if (!response.ok) {
      console.log("Erreur backend:", data);
    }

    return data;
  };

  // ========== TRADUCTION ==========
  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);

    const data = await translation(sourceLang, targetLang, sourceText);

    setTimeout(() => {
      setTranslatedText(data?.translated?.translation_text || "");
      setIsTranslating(false);
    }, 1000);
  };

  // ========== INVERSION DES LANGUES ==========
  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  // ========== RENDU ==========
  if (!isAuthenticate) {
    return null; // évite le flash de contenu
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <Background_Animated></Background_Animated>

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

      {/* Header */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Language Selectors */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="appearance-none bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px] backdrop-blur-xl"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={swapLanguages}
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <ArrowRightLeft className="w-5 h-5 text-white" />
            </button>

            <div className="relative">
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="appearance-none bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px] backdrop-blur-xl"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Translation Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-medium">
                    Texte source
                  </span>
                  <div className="flex items-center gap-2">
                    {/* <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                      <Volume2 className="w-4 h-4 text-blue-400" />
                    </button> */}
                  </div>
                </div>
                <textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Entrez votre texte ici..."
                  className="w-full h-64 bg-transparent text-white placeholder-gray-600 resize-none focus:outline-none text-lg"
                />
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                  <span className="text-gray-500 text-sm">
                    {sourceText.length} caractères
                  </span>
                  <button
                    onClick={handleTranslate}
                    disabled={!sourceText.trim() || isTranslating}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isTranslating ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        Traduction...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Traduire
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Translated Text */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-medium">
                    Traduction
                  </span>
                </div>
                <div className="w-full h-64 text-white text-lg overflow-y-auto">
                  {translatedText || (
                    <span className="text-gray-600">
                      La traduction apparaîtra ici...
                    </span>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <span className="text-gray-500 text-sm">
                    {translatedText.length} caractères
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Feature_Info></Feature_Info>
        </div>
      </main>
    </div>
  );
}
