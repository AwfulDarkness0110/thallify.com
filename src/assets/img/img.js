
const logo = <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_107_2)">
<circle cx="100" cy="96" r="96" fill="var(--text-dark)"/>
</g>
<circle cx="100" cy="96" r="70" fill="white"/>
<circle cx="100" cy="96" r="50" fill="var(--text-dark)"/>
<circle cx="100" cy="96" r="40" fill="white"/>
<circle cx="100" cy="96" r="25" fill="var(--text-dark)"/>
<defs>
<filter id="filter0_d_107_2" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_2" result="shape"/>
</filter>
</defs>
</svg>
const spotifyLogo = require('./Spotify_Logo_CMYK_Black.png')


export {
    logo,
    spotifyLogo
}