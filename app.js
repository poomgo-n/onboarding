function getPackingSvgBasic_() {
  return `
  <svg viewBox="0 0 220 220" class="pack-svg" xmlns="http://www.w3.org/2000/svg" aria-label="기본 포장">
    <defs>
      <linearGradient id="boxTopBasic" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#cc9866"/>
        <stop offset="100%" stop-color="#b87a45"/>
      </linearGradient>

      <linearGradient id="boxInnerBasic" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b67b47"/>
        <stop offset="100%" stop-color="#9c6337"/>
      </linearGradient>

      <linearGradient id="pinkBodyBasic" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f4d2d9"/>
        <stop offset="100%" stop-color="#efbcc8"/>
      </linearGradient>

      <pattern id="bubblePatternBasic" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="6" cy="6" r="5.2" fill="rgba(255,255,255,0.72)"/>
        <circle cx="6" cy="6" r="5.2" fill="none" stroke="rgba(205,211,220,0.75)" stroke-width="1"/>
        <circle cx="15" cy="15" r="5.2" fill="rgba(255,255,255,0.72)"/>
        <circle cx="15" cy="15" r="5.2" fill="none" stroke="rgba(205,211,220,0.75)" stroke-width="1"/>
      </pattern>

      <filter id="shadowBasic" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="rgba(0,0,0,0.18)"/>
      </filter>
    </defs>

    <!-- top flap -->
    <polygon points="55,8 165,8 178,38 42,38" fill="url(#boxTopBasic)"/>
    <!-- bottom flap -->
    <polygon points="42,182 178,182 165,212 55,212" fill="url(#boxTopBasic)"/>
    <!-- left flap -->
    <polygon points="6,48 36,60 36,160 6,172" fill="url(#boxTopBasic)"/>
    <!-- right flap -->
    <polygon points="214,48 184,60 184,160 214,172" fill="url(#boxTopBasic)"/>

    <!-- inner box -->
    <rect x="36" y="38" width="148" height="144" rx="4" fill="url(#boxInnerBasic)"/>

    <!-- bubble fill -->
    <rect x="49" y="48" width="122" height="124" rx="8" fill="url(#bubblePatternBasic)" opacity="0.96"/>

    <!-- product -->
    <g filter="url(#shadowBasic)">
      <rect x="77" y="54" width="66" height="118" rx="24" fill="url(#pinkBodyBasic)"/>
      <rect x="89" y="45" width="42" height="18" rx="9" fill="#efc1cb"/>
      <ellipse cx="110" cy="45" rx="21" ry="6" fill="#f6dde2" opacity="0.8"/>
      <ellipse cx="110" cy="172" rx="24" ry="5" fill="rgba(0,0,0,0.10)"/>
    </g>
  </svg>
  `;
}
