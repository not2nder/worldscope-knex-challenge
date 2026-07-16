import { Link } from "react-router-dom"
import { Globe} from "lucide-react"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-300/10">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Globe className="text-cyan-400"/>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                        World<span className="text-cyan-500">Scope</span>
                    </h1>
                </div>
            </div>
        </header>
    )
}