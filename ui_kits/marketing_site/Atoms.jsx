// Meridian · marketing UI kit — atomic components
// Global-scope (no ES modules). Exports onto window for App.jsx to pick up.

const { useState, useEffect, useRef } = React;

// --------- ICONS ---------
// Inline SVG mirrors for the 15-ish hairline icons in assets/icons/.
// currentColor throughout. Always 24x24 viewBox.
const Icon = ({ path, size = 20, stroke, fill, strokeWidth = 1.2, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
       fill={fill ?? "currentColor"}
       stroke={stroke}
       strokeWidth={stroke ? strokeWidth : 0}
       xmlns="http://www.w3.org/2000/svg" {...rest}>
    {path}
  </svg>
);

const IconSearch = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><circle cx="11" cy="11" r="6.5"/><path d="M 15.8 15.8 L 20 20" strokeLinecap="square"/></>} />
);
const IconCart = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><path d="M 4.5 7.5 L 7 7.5 L 9 17 L 19 17 L 20.5 10 L 7.5 10"/><circle cx="10" cy="19.5" r="1"/><circle cx="17.5" cy="19.5" r="1"/></>} />
);
const IconHeart = ({ filled, ...p }) => (
  <Icon {...p}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    path={<path d="M 12 20 L 4.5 12.8 C 2 10.2 3.8 5.8 7.4 5.8 C 9.3 5.8 10.9 6.9 12 8.4 C 13.1 6.9 14.7 5.8 16.6 5.8 C 20.2 5.8 22 10.2 19.5 12.8 L 12 20 Z"/>} />
);
const IconUser = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><circle cx="12" cy="9" r="3.2"/><path d="M 5 20 C 5 16 8.2 13.5 12 13.5 C 15.8 13.5 19 16 19 20"/></>} />
);
const IconClose = (p) => (
  <Icon {...p} path={<path d="M 18.707 6 L 13 11.707 L 18.707 17.414 L 18 18.121 L 12 12.121 L 6 18.121 L 5.293 17.414 L 11 11.707 L 5.293 6 L 6 5.293 L 12 11.293 L 18 5.293 L 18.707 6 Z" fillRule="evenodd"/>} />
);
const IconArrowRight = (p) => (
  <Icon {...p} path={<path d="M 18.793 11.854 L 13.646 6.707 L 14.354 6 L 20.707 12.354 L 14.354 18.707 L 13.646 18 L 18.793 12.854 L 4 12.854 L 4 11.854 L 18.793 11.854 Z" fillRule="evenodd"/>} />
);
const IconArrowLeft = (p) => (
  <Icon {...p} path={<path d="M 5.207 11.854 L 10.354 6.707 L 9.646 6 L 3.293 12.354 L 9.646 18.707 L 10.354 18 L 5.207 12.854 L 20 12.854 L 20 11.854 L 5.207 11.854 Z" fillRule="evenodd"/>} />
);
const IconPlus = (p) => (
  <Icon {...p} path={<path d="M 12.5 12.5 L 12.5 18 L 11.5 18 L 11.5 12.5 L 6 12.5 L 6 11.5 L 11.5 11.5 L 11.5 6 L 12.5 6 L 12.5 11.5 L 18 11.5 L 18 12.5 L 12.5 12.5 Z" fillRule="evenodd"/>} />
);
const IconMinus = (p) => (
  <Icon {...p} path={<path d="M 6 11.5 L 18 11.5 L 18 12.5 L 6 12.5 L 6 11.5 Z" fillRule="evenodd"/>} />
);
const IconCheck = (p) => (
  <Icon {...p} path={<path d="M 9.333 15.685 L 19.658 6.006 L 20.342 6.736 L 9.333 17.056 L 3.658 11.736 L 4.342 11.006 L 9.333 15.685 Z" fillRule="evenodd"/>} />
);
const IconCaretDown = (p) => (
  <Icon {...p} path={<path d="M 12 15 L 6 9 L 6.707 8.293 L 12 13.586 L 17.293 8.293 L 18 9 L 12 15 Z" fillRule="evenodd"/>} />
);
const IconCaretRight = (p) => (
  <Icon {...p} path={<path d="M 13.707 12 L 8 17.707 L 7.293 17 L 12.293 12 L 7.293 7 L 8 6.293 L 13.707 12 Z" fillRule="evenodd"/>} />
);
const IconTruck = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><path d="M 3 16 L 3 7 L 14 7 L 14 16 Z"/><path d="M 14 10 L 18 10 L 21 13 L 21 16 L 14 16"/><circle cx="7" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></>} />
);
const IconShield = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><path d="M 12 3 L 20 6 L 20 12 C 20 16 16.5 19.5 12 21 C 7.5 19.5 4 16 4 12 L 4 6 L 12 3 Z"/><path d="M 9 12 L 11 14 L 15 10"/></>} />
);
const IconReturn = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><path d="M 4 10 L 8 6 M 4 10 L 8 14 M 4 10 L 16 10 C 18.5 10 20 11.8 20 14 C 20 16.2 18.5 18 16 18 L 10 18"/></>} />
);
const IconHeadset = (p) => (
  <Icon fill="none" stroke="currentColor" {...p}
    path={<><path d="M 4 14 L 4 12 C 4 7.6 7.6 4 12 4 C 16.4 4 20 7.6 20 12 L 20 14"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/></>} />
);
const IconStar = ({ filled = true, ...p }) => (
  <Icon {...p}
    fill={filled ? "currentColor" : "none"} stroke={filled ? undefined : "currentColor"}
    path={<path d="M 12 4.5 L 14.472 9.528 L 20 10.361 L 16 14.25 L 16.944 19.75 L 12 17.153 L 7.056 19.75 L 8 14.25 L 4 10.361 L 9.528 9.528 L 12 4.5 Z"/>} />
);

// --------- LOGO ---------
function LogoBobochic({ height = 28, invert = false }) {
  return (
    <img
      src="../../assets/logo-bobochicparis.svg"
      alt="Bobochic Paris"
      height={height}
      style={{ display: "block", filter: invert ? "invert(1)" : "none" }}
    />
  );
}

// --------- BUTTONS ---------
const buttonBase = {
  fontFamily: "var(--font-family-utility)",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "20px",
  letterSpacing: "-0.16px",
  height: 40,
  padding: "0 20px",
  borderRadius: "var(--radius-button)",
  border: "1px solid transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  boxSizing: "border-box",
  transition: "background-color .15s, color .15s, border-color .15s, box-shadow .15s, transform .08s",
  textDecoration: "none",
  whiteSpace: "nowrap",
};
function Button({ variant = "primary", size = "md", icon, iconEnd, children, ...rest }) {
  const sizes = {
    sm: { height: 24, padding: "0 10px", fontSize: 12, lineHeight: "16px" },
    md: {},
    lg: { height: 48, padding: "0 28px", fontSize: 16, lineHeight: "24px" },
  };
  const variants = {
    primary: { background: "var(--color-neutral-950)", color: "#fff" },
    secondary: { background: "var(--color-neutral-100)", color: "var(--color-neutral-950)" },
    outline: { background: "#fff", color: "var(--color-neutral-950)", borderColor: "var(--color-neutral-950)" },
    white: { background: "#fff", color: "var(--color-neutral-950)" },
    ghost: { background: "transparent", color: "var(--color-neutral-950)" },
    red: { background: "var(--color-red-800)", color: "#fff" },
  };
  return (
    <button {...rest}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      className={`mb-btn mb-btn-${variant} ` + (rest.className ?? "")}
      style={{ ...buttonBase, ...variants[variant], ...sizes[size], ...(rest.style || {}) }}>
      {icon}{children}{iconEnd}
    </button>
  );
}

// --------- FLAG / BADGE ---------
function Flag({ kind = "promo", children, style }) {
  const bg = {
    promo: "var(--color-red-800)",
    new: "var(--color-neutral-950)",
    sold: "var(--color-neutral-500)",
    stock: "var(--color-background-green-dark)",
  }[kind];
  return (
    <span style={{
      fontFamily: "var(--font-family-utility)",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "14px",
      padding: "4px 8px",
      background: bg,
      color: "#fff",
      borderRadius: "var(--radius-flag)",
      display: "inline-block",
      ...style,
    }}>{children}</span>
  );
}

// --------- ICON BUTTON ---------
function IconButton({ children, badge, size = 40, onClick, ariaLabel }) {
  return (
    <button onClick={onClick} aria-label={ariaLabel}
      style={{
        position: "relative",
        width: size, height: size,
        border: "none",
        background: "transparent",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--color-neutral-950)",
        cursor: "pointer",
        padding: 0,
      }}>
      {children}
      {badge != null && (
        <span style={{
          position: "absolute",
          top: 2, right: 2,
          minWidth: 16, height: 16,
          padding: "0 4px",
          background: "var(--color-red-800)",
          color: "#fff",
          borderRadius: 999,
          fontSize: 10, fontWeight: 700, lineHeight: "16px",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-family-utility)",
        }}>{badge}</span>
      )}
    </button>
  );
}

// --------- CATEGORY PILL ---------
function CategoryPill({ label, highlight, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: "14px 0",
      color: highlight ? "var(--color-red-800)" : "var(--color-neutral-950)",
      fontFamily: "var(--font-family-utility)",
      fontWeight: active ? 700 : 600,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "-0.16px",
      borderBottom: active ? "2px solid var(--color-neutral-950)" : "2px solid transparent",
      marginBottom: -1,
    }}>{label}</button>
  );
}

// --------- BREADCRUMB ---------
function Breadcrumb({ items }) {
  return (
    <nav style={{
      fontFamily: "var(--font-family-text)",
      fontSize: 12,
      color: "var(--color-neutral-550)",
      display: "flex", gap: 6, alignItems: "center",
    }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: "var(--color-neutral-400)" }}>›</span>}
          <span style={{ color: i === items.length - 1 ? "var(--color-neutral-950)" : "inherit" }}>{it}</span>
        </React.Fragment>
      ))}
    </nav>
  );
}

// --------- PRICE ---------
function Price({ current, original, size = "md" }) {
  const sizeStyles = {
    sm: { current: 14, original: 12 },
    md: { current: 18, original: 14 },
    lg: { current: 31, original: 20 },
  }[size];
  const onSale = original != null && original !== current;
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8, fontFamily: "var(--font-family-text)" }}>
      <span style={{
        fontWeight: 700,
        fontSize: sizeStyles.current,
        color: onSale ? "var(--color-red-800)" : "var(--color-neutral-950)",
      }}>{fmtPrice(current)}</span>
      {onSale && (
        <span style={{
          fontWeight: 400,
          fontSize: sizeStyles.original,
          color: "var(--color-neutral-500)",
          textDecoration: "line-through",
        }}>{fmtPrice(original)}</span>
      )}
    </span>
  );
}
function fmtPrice(n) {
  return n.toLocaleString("fr-FR").replace(/,/g, " ") + " €";
}

// --------- STAR RATING ---------
function StarRating({ value = 4.5, count }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-yellow-600)" }}>
      {[1,2,3,4,5].map(i => <IconStar key={i} size={14} filled={i <= Math.round(value)}/>)}
      {count != null && <span style={{ color: "var(--color-neutral-600)", fontSize: 12, marginLeft: 4, fontFamily: "var(--font-family-text)" }}>({count})</span>}
    </span>
  );
}

// --------- BENEFIT STRIP ---------
function BenefitStrip() {
  const items = [
    { Icon: IconTruck, title: "Livraison offerte", sub: "dès 199 €" },
    { Icon: IconShield, title: "Garantie 5 ans", sub: "structure et assises" },
    { Icon: IconReturn, title: "Retour 14 jours", sub: "satisfait ou remboursé" },
    { Icon: IconHeadset, title: "SAV français", sub: "7j/7 · basé en France" },
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      borderTop: "1px solid var(--color-neutral-200)",
      borderBottom: "1px solid var(--color-neutral-200)",
    }}>
      {items.map(({ Icon: I, title, sub }, i) => (
        <div key={i} style={{
          padding: "24px 20px",
          display: "flex", gap: 14, alignItems: "center",
          borderLeft: i === 0 ? "none" : "1px solid var(--color-neutral-150)",
        }}>
          <I size={28}/>
          <div>
            <div style={{ fontFamily: "var(--font-family-utility)", fontWeight: 700, fontSize: 14, color: "var(--color-neutral-950)", letterSpacing: "-0.16px" }}>{title}</div>
            <div style={{ fontFamily: "var(--font-family-text)", fontSize: 12, color: "var(--color-neutral-600)" }}>{sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --------- BANDEAU (marquee top) ---------
function Bandeau() {
  const items = [
    "Bénéficiez de la livraison différée.",
    "Jusqu'à −40% sur la Nouvelle Collection.",
    "Paiement en 4× sans frais.",
    "SAV basé en France 7j/7.",
  ];
  return (
    <div style={{
      background: "var(--color-neutral-950)",
      color: "#fff",
      fontFamily: "var(--font-family-utility)",
      fontSize: 12,
      lineHeight: "14px",
      padding: "10px 0",
      display: "flex", justifyContent: "center", gap: 48,
      letterSpacing: 0.2,
    }}>
      {items.map((t, i) => (
        <span key={i} style={{ opacity: i === 0 ? 1 : 0.7 }}>{t}</span>
      ))}
    </div>
  );
}

Object.assign(window, {
  Icon, IconSearch, IconCart, IconHeart, IconUser, IconClose, IconArrowRight, IconArrowLeft,
  IconPlus, IconMinus, IconCheck, IconCaretDown, IconCaretRight, IconTruck, IconShield,
  IconReturn, IconHeadset, IconStar, LogoBobochic,
  Button, Flag, IconButton, CategoryPill, Breadcrumb, Price, StarRating, BenefitStrip, Bandeau,
  fmtPrice,
});
