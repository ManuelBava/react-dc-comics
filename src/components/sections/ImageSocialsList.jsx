import facebookIcon from '../../assets/footer-facebook.png';
import twitterIcon from '../../assets/footer-twitter.png';
import youtubeIcon from '../../assets/footer-youtube.png';
import pinterestIcon from '../../assets/footer-pinterest.png';
import periscopeIcon from '../../assets/footer-periscope.png';


// 2. Crea l'array con le 5 icone
const socialLinks = [
    { name: 'Facebook', icon: facebookIcon, url: '#' },
    { name: 'Twitter', icon: twitterIcon, url: '#' },
    { name: 'YouTube', icon: youtubeIcon, url: '#' },
    { name: 'Pinterest', icon: pinterestIcon, url: '#' },
    { name: 'Periscope', icon: periscopeIcon, url: '#' },
];


export default function ImageSocialsList() {
    return (
        <>
            {/* Iterazione sulle 5 immagini */}
            <ul className="flex items-center gap-3">
                {socialLinks.map(({ name, icon, url }) => (
                    <li key={name}>
                        <a href={url}>
                            <img
                                src={icon}
                                alt={name}
                                className="w-8 h-8 hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}