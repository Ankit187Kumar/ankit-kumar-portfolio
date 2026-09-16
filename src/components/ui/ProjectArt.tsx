type ArtProps = { color: string };

/** AI Photo-to-Video Kiosk — portrait device frame, camera aperture, AI spark, QR code */
export function KioskArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <rect x="34" y="12" width="52" height="88" rx="10" stroke={color} strokeWidth="3" fill="rgba(255,255,255,0.04)" />
      <rect x="41" y="22" width="38" height="52" rx="4" stroke={color} strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="48" r="12" stroke={color} strokeWidth="2.5" />
      <path d="M60 43l4 5-4 5-4-5z" fill={color} opacity="0.8" />
      <path d="M92 18l2.4 5.6L100 26l-5.6 2.4L92 34l-2.4-5.6L84 26l5.6-2.4z" fill={color} opacity="0.9" />
      <rect x="47" y="82" width="8" height="8" stroke={color} strokeWidth="1.6" />
      <rect x="58" y="82" width="8" height="8" stroke={color} strokeWidth="1.6" />
      <rect x="47" y="82" width="4" height="4" fill={color} opacity="0.6" />
      <rect x="62" y="86" width="4" height="4" fill={color} opacity="0.6" />
    </svg>
  );
}

/** Business Card Scanner & Admin Dashboard — card with scan beam, dashboard bars */
export function ScannerArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <rect x="18" y="34" width="64" height="42" rx="6" stroke={color} strokeWidth="3" fill="rgba(255,255,255,0.04)" />
      <circle cx="32" cy="48" r="5" stroke={color} strokeWidth="2" />
      <path d="M43 46h28M43 54h20M43 62h24" stroke={color} strokeWidth="2" opacity="0.6" strokeLinecap="round" />
      <path d="M18 55h64" stroke={color} strokeWidth="2.5" opacity="0.9" strokeDasharray="2 3" />
      <g opacity="0.9">
        <rect x="76" y="70" width="8" height="26" rx="1.5" fill={color} opacity="0.35" />
        <rect x="88" y="58" width="8" height="38" rx="1.5" fill={color} opacity="0.55" />
        <rect x="100" y="80" width="8" height="16" rx="1.5" fill={color} opacity="0.35" />
      </g>
      <path d="M76 96h32" stroke={color} strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

/** Hand Slash Quiz — crossing blade slashes through a target bubble */
export function HandSlashArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <circle cx="60" cy="58" r="26" stroke={color} strokeWidth="2.5" opacity="0.5" />
      <path d="M32 34l56 48" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M88 34l-56 48" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <circle cx="32" cy="34" r="4" fill={color} />
      <circle cx="88" cy="34" r="4" fill={color} opacity="0.55" />
      <circle cx="60" cy="58" r="4" fill={color} opacity="0.9" />
      <path d="M20 80l6 6M96 84l6-6M18 50l6-4" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** Hand Maze Game — right-angle maze path with a pinch cursor */
export function HandMazeArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <rect x="20" y="20" width="80" height="80" rx="6" stroke={color} strokeWidth="2.5" opacity="0.35" />
      <path
        d="M28 28h24v20h20v-16h20v40h-24v-16H44v24H28z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle cx="28" cy="28" r="5" fill={color} />
      <circle cx="92" cy="72" r="5" stroke={color} strokeWidth="2.5" />
      <path d="M92 72l6 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Role-Based Access Control — shield with keyhole and role dots */
export function RbacArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <path
        d="M60 16l30 11v24c0 22-13 36-30 39-17-3-30-17-30-39V27z"
        stroke={color}
        strokeWidth="3"
        fill="rgba(255,255,255,0.04)"
      />
      <circle cx="60" cy="52" r="8" stroke={color} strokeWidth="2.5" />
      <path d="M60 60v10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <g opacity="0.8">
        <circle cx="40" cy="92" r="6" stroke={color} strokeWidth="2" />
        <circle cx="60" cy="98" r="6" stroke={color} strokeWidth="2" />
        <circle cx="80" cy="92" r="6" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Food Shop Web Page — browser window with a plate + steam */
export function FoodShopArt({ color }: ArtProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20">
      <rect x="16" y="26" width="88" height="66" rx="8" stroke={color} strokeWidth="3" fill="rgba(255,255,255,0.04)" />
      <path d="M16 40h88" stroke={color} strokeWidth="2.5" opacity="0.6" />
      <circle cx="26" cy="33" r="2.2" fill={color} opacity="0.7" />
      <circle cx="34" cy="33" r="2.2" fill={color} opacity="0.7" />
      <circle cx="42" cy="33" r="2.2" fill={color} opacity="0.7" />
      <ellipse cx="60" cy="70" rx="22" ry="8" stroke={color} strokeWidth="2.5" />
      <path d="M52 62c1-4 3-6 3-10M60 62c1-5 3-7 3-11M68 62c1-4 3-6 3-10" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function getProjectArt(id: string) {
  switch (id) {
    case "kiosk":
      return KioskArt;
    case "scanner":
      return ScannerArt;
    case "handslash":
      return HandSlashArt;
    case "handmaze":
      return HandMazeArt;
    case "rbac":
      return RbacArt;
    case "foodshop":
      return FoodShopArt;
    default:
      return KioskArt;
  }
}
