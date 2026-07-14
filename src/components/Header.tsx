import { Globe} from "lucide-react"

export default function Header() {
    return (
        <header className="w-full bg-gray-200 py-3 px-10 flex shadow-md">
            <a className="flex items-center align-middle gap-3">
                <Globe className="text-cyan-400"/>
                <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent">
                    WorldScope
                </h2>
            </a>
        </header>
    )
}