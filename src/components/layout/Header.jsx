import dcLogo from '../../assets/dc-logo.png';

const navLinks = [
    { label: 'CHARACTERS', url: '#', isActive: false },
    { label: 'COMICS', url: '#', isActive: true },
    { label: 'MOVIES', url: '#', isActive: false },
    { label: 'TV', url: '#', isActive: false },
    { label: 'GAMES', url: '#', isActive: false },
    { label: 'COLLECTIBLES', url: '#', isActive: false },
    { label: 'VIDEOS', url: '#', isActive: false },
    { label: 'FANS', url: '#', isActive: false },
    { label: 'NEWS', url: '#', isActive: false },
    { label: 'SHOP', url: '#', isActive: false },
];

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-row items-center justify-around sm:justify-around gap-2">
                {/* Logo */}
                <div className="py-3 flex-shrink-0">
                    <img src={dcLogo} alt="Logo DC" className="w-14 sm:w-16 md:w-20" />
                </div>

                <nav>
                    <ul className="flex flex-wrap justify-center sm:flex-nowrap items-center gap-2 sm:gap-3 md:gap-5 lg:gap-6 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase whitespace-nowrap">
                        {navLinks.map(({ label, url, isActive }) => (
                            <li key={label}>
                                <a
                                    href={url}
                                    className={`py-6 inline-block border-b-4 transition-colors ${isActive
                                        ? 'text-blue-500 border-blue-500'
                                        : 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500'
                                        }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
