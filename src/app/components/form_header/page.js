import {Sparkles , Languages} from 'lucide-react'

export default function Form_Header(){
    return(
         <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/30">
                  <Languages className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Bon retour !</h2>
                <p className="text-gray-400">Connectez-vous à votre compte</p>
        </div>
    )
}