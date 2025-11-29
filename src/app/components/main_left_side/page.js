import { Rocket,Languages , Star , Check} from 'lucide-react'
export default function Main_Left_Side(){
    return(
        <div className="flex-1 text-white space-y-6 p-8">
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Traduisez le monde en
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              un instant
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Plus de 100 langues à portée de main. Traduction instantanée, précise et naturelle grâce à notre technologie IA avancée.
          </p>

          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-500">Langues</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Instantané</div>
                <div className="text-sm text-gray-500">Traduction</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-gray-500">Précision</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-6">
            {['Traduction en temps réel', 'Reconnaissance vocale', 'Support de fichiers'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <span className="text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
    )
}