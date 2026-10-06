import ImageSocialsList from "../sections/ImageSocialsList";

export default function Footer() {
    return (
        <footer className="flex justify-around gap-3 bg-[#303030] py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-around items-center gap-4 w-full">
                <div>
                    <button className="border-2 border-blue-500 text-white font-bold text-xs uppercase px-4 py-3 hover:bg-blue-500 transition-colors cursor-pointer">
                        SIGN-UP NOW!
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <span className="font-bold uppercase text-sm text-blue-700">
                        FOLLOW US
                    </span>
                    <ImageSocialsList />
                </div>
            </div>
        </footer>
    )
}