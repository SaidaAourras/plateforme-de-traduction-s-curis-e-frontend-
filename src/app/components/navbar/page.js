import { Languages , BookOpen , User , LogOut } from "lucide-react"
export default function Navbar(){
    return(
        <header className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              TranslateSpace
            </h1>
          </div>

          <nav className="flex items-center gap-6">
            {/* <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <History className="w-5 h-5" />
              <span className="hidden md:inline">Historique</span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="hidden md:inline">Lexique</span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Profil</span>
            </button> */}
            <button className="text-gray-500 hover:text-gray-300 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>
    )
}