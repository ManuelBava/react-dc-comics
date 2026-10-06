export default function Card({ id, series, price, thumb }) {
    return (
        <li className="flex flex-col gap-2 group cursor-pointer">
            {/* Contenitore Immagine Quadrata */}
            <div className="aspect-square w-full overflow-hidden bg-gray-800">
                <img
                    src={thumb}
                    alt={series}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Titolo della serie */}
            <h3 className="text-xs uppercase font-semibold text-gray-200 text-left mt-1 line-clamp-2">
                {series}
            </h3>
        </li>
    );
}
