import jumbotronLogo from '../../assets/jumbotron.jpg';
import ComicsList from '../sections/ComicsList';

export default function Main() {
    return (
        <main className="bg-[#1c1c1c] min-h-screen text-white">
            {/* Jumbotron IMAGE*/}
            <div className='h-[150px] sm:h-[200px] md:h-[200px] lg:h-[320px] xl:h-[300px] relative'>
                <img className='w-full h-full object-cover object-top' src={jumbotronLogo} alt="Jumbotron Logo" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <span className="absolute -bottom-5 left-4 sm:left-8 bg-blue-500 text-white font-bold text-sm md:text-lg px-6 py-2 uppercase shadow-md tracking-wider">
                        CURRENT SERIES
                    </span>
                </div>
            </div>

            {/* Griglia Fumetti */}
            <ComicsList />

            {/* Bottone LOAD MORE */}
            <div className="flex justify-center pb-12">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs uppercase px-12 py-3 transition-colors cursor-pointer">
                    LOAD MORE
                </button>
            </div>
        </main>
    );
}
