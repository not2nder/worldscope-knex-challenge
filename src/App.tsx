import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen w-screen flex flex-col items-center p-4 bg-slate-100">
        <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Explore countries around the world
        </h2>
        <p className="text-slate-500">Discover key information about all countries.</p> 
      </div>
    </div>
  )
}

export default App
