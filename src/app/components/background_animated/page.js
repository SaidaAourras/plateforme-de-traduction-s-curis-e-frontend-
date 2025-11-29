export default function Background_Animated(){
    return(
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-violet-600/10 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      )
}