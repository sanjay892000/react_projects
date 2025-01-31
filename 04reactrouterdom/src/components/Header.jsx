function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" ariaLabel="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="https://www.hanumanttechnology.com/images/hanumant-technology-logo.png" alt="loading..." />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
                            Home
                        </button>
                    </div>

                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Service</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">About</a>
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span ariaHidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
}

export default Header
