import { Languages, Sparkles, Star } from "lucide-react";

export default function Feature_Info(){
    return(
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">IA Avancée</div>
                <div className="text-gray-500 text-xs">Traduction précise</div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                <Languages className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">100+ Langues</div>
                <div className="text-gray-500 text-xs">Support multilingue</div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Instantané</div>
                <div className="text-gray-500 text-xs">Résultats rapides</div>
              </div>
            </div>
          </div>
    )
}