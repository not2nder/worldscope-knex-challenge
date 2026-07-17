import Header from "../components/Header";

type MainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <main className="min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-cyan-50 text-slate-950">
            <Header />

            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    )
}