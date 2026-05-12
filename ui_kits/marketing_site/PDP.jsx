// Meridian · PDP + MiniCart + data

// --------- SAMPLE DATA ---------
const PRODUCTS = [
  {
    id: "nova-3p-cotele-noisette",
    eyebrow: "Canapé d'angle",
    name: "NOVA",
    sub: "3 places · velours côtelé noisette",
    price: 1490, original: 2090, discount: 29,
    photo: "linear-gradient(135deg,#c9b89a 0%,#8f7858 60%,#5e4b36 100%)",
    rating: 4.7, reviews: 284,
    description: "Un canapé d'angle généreux, habillé de velours côtelé tissé à Côme. Assise en mousse haute résilience 35 kg/m³, déhoussable. Structure en hêtre massif des Vosges, garantie 5 ans.",
    specs: [
      ["Dimensions", "L 280 × P 195 × H 88 cm"],
      ["Revêtement", "Velours côtelé 100% polyester (tissu Aquaclean)"],
      ["Garnissage", "Mousse HR 35 kg/m³ + plume"],
      ["Structure", "Hêtre massif & contreplaqué"],
      ["Pieds", "Chêne teinté noir · H 14 cm"],
      ["Origine", "Fabriqué au Portugal"],
    ],
    colors: [
      { name: "Noisette", swatch: "#a88a64" },
      { name: "Anthracite", swatch: "#2d2a27" },
      { name: "Sauge", swatch: "#8b9b82" },
      { name: "Terracotta", swatch: "#b6593f" },
      { name: "Ivoire", swatch: "#e4dac8" },
    ],
  },
  {
    id: "lune-convertible",
    eyebrow: "Canapé convertible",
    name: "LUNE",
    sub: "3 places · tissu bouclette écru",
    price: 1190, original: 1490, discount: 20,
    photo: "linear-gradient(135deg,#ece3d2 0%,#c9bea8 60%,#8e8472 100%)",
    rating: 4.6, reviews: 192,
  },
  {
    id: "atelier-fauteuil",
    eyebrow: "Fauteuil",
    name: "ATELIER",
    sub: "lin lavé · ocre",
    price: 790, isNew: true,
    photo: "linear-gradient(135deg,#d5a670 0%,#9d6f43 100%)",
    rating: 4.8, reviews: 64,
  },
  {
    id: "faubourg-angle",
    eyebrow: "Canapé d'angle",
    name: "FAUBOURG",
    sub: "5 places · cuir pleine fleur cognac",
    price: 3290, original: 3990, discount: 18,
    photo: "linear-gradient(135deg,#a05a35 0%,#4e2a18 100%)",
    rating: 4.9, reviews: 412,
  },
  {
    id: "saint-germain-lit",
    eyebrow: "Lit",
    name: "SAINT-GERMAIN",
    sub: "lit 160 · velours sauge",
    price: 990, original: 1190, discount: 17,
    photo: "linear-gradient(135deg,#a7b79e 0%,#5e6d58 100%)",
    rating: 4.6, reviews: 148,
  },
  {
    id: "monceau-3p",
    eyebrow: "Canapé",
    name: "MONCEAU",
    sub: "3 places · bouclette écru",
    price: 1390, isNew: true,
    photo: "linear-gradient(135deg,#eae1cf 0%,#b7ab94 100%)",
    rating: 4.5, reviews: 88,
  },
  {
    id: "odeon-table",
    eyebrow: "Table basse",
    name: "ODÉON",
    sub: "travertin · ovale 130 cm",
    price: 690,
    photo: "linear-gradient(135deg,#e6dcc7 0%,#a69d85 100%)",
    rating: 4.4, reviews: 52,
  },
  {
    id: "bastille-biblio",
    eyebrow: "Bibliothèque",
    name: "BASTILLE",
    sub: "chêne massif · H 210",
    price: 1490,
    photo: "linear-gradient(135deg,#cbb392 0%,#6f5735 100%)",
    rating: 4.7, reviews: 71,
  },
];

// --------- PDP ---------
function PDP({ product, onAddToCart, onBack }) {
  const p = product;
  const [color, setColor] = React.useState(p.colors?.[0]);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState("description");
  return (
    <div style={{ background: "#fff" }}>
      <div style={{ padding: "20px 64px 8px" }}>
        <Breadcrumb items={["Accueil", "Canapés", "Canapés d'angle", p.name]}/>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, padding: "24px 64px 64px", alignItems: "flex-start" }}>
        {/* gallery */}
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                aspectRatio: "1",
                borderRadius: "var(--radius-sm)",
                background: `linear-gradient(${120 + i*20}deg,#c9b89a,#5e4b36)`,
                border: i === 0 ? "2px solid var(--color-neutral-950)" : "1px solid var(--color-neutral-200)",
                cursor: "pointer",
              }}/>
            ))}
          </div>
          <div style={{
            aspectRatio: "4/3",
            borderRadius: "var(--radius-lg)",
            background: p.photo,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 60% at 50% 100%, rgba(0,0,0,0.2), transparent 60%)" }}/>
            {p.discount && <div style={{ position: "absolute", top: 16, left: 16 }}><Flag kind="promo">−{p.discount}%</Flag></div>}
          </div>
        </div>
        {/* info */}
        <div style={{ position: "sticky", top: 180 }}>
          <div className="heading-subtitle-md" style={{ marginBottom: 10 }}>{p.eyebrow}</div>
          <h1 className="display-xs-strong" style={{ margin: 0, letterSpacing: "-0.64px" }}>{p.name}</h1>
          <div style={{ fontFamily: "var(--font-family-text)", fontSize: 16, color: "var(--color-neutral-600)", marginTop: 8 }}>{p.sub}</div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <StarRating value={p.rating} count={p.reviews}/>
            <a style={{ fontFamily: "var(--font-family-text)", fontSize: 12, color: "var(--color-neutral-600)", textDecoration: "underline" }}>Voir les avis</a>
          </div>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--color-neutral-150)" }}>
            <Price current={p.price} original={p.original} size="lg"/>
            <div style={{ fontFamily: "var(--font-family-text)", fontSize: 13, color: "var(--color-neutral-600)", marginTop: 8 }}>
              ou 4× {fmtPrice(Math.round(p.price/4))} sans frais · <a style={{ textDecoration: "underline", cursor: "pointer" }}>en savoir plus</a>
            </div>
          </div>
          {/* colors */}
          {p.colors && (
            <div style={{ marginTop: 28 }}>
              <div className="heading-subtitle-sm" style={{ marginBottom: 12 }}>Coloris · <span style={{ color: "var(--color-neutral-950)" }}>{color?.name}</span></div>
              <div style={{ display: "flex", gap: 10 }}>
                {p.colors.map(c => (
                  <button key={c.name} onClick={() => setColor(c)} style={{
                    width: 44, height: 44, borderRadius: 999,
                    border: color?.name === c.name ? "2px solid var(--color-neutral-950)" : "2px solid transparent",
                    padding: 3, background: "transparent", cursor: "pointer",
                  }}>
                    <div style={{ width: "100%", height: "100%", background: c.swatch, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)" }}/>
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* qty + cta */}
          <div style={{ marginTop: 28, display: "flex", gap: 12, alignItems: "stretch" }}>
            <div style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--color-neutral-200)", borderRadius: "var(--radius-button)", padding: "0 4px" }}>
              <IconButton size={44} onClick={() => setQty(q => Math.max(1, q - 1))}><IconMinus size={16}/></IconButton>
              <span style={{ padding: "0 12px", fontFamily: "var(--font-family-utility)", fontWeight: 600, fontSize: 14, minWidth: 24, textAlign: "center" }}>{qty}</span>
              <IconButton size={44} onClick={() => setQty(q => q + 1)}><IconPlus size={16}/></IconButton>
            </div>
            <Button variant="primary" size="lg" style={{ flex: 1 }} icon={<IconCart size={18}/>} onClick={() => onAddToCart(p, qty, color)}>
              Ajouter au panier · {fmtPrice(p.price * qty)}
            </Button>
            <IconButton size={52} ariaLabel="Favoris"><IconHeart size={22}/></IconButton>
          </div>
          {/* stock / delivery */}
          <div style={{ marginTop: 20, padding: 16, background: "var(--color-background-green-light)", borderRadius: "var(--radius-md)", display: "flex", gap: 12, alignItems: "center" }}>
            <IconCheck size={18} style={{ color: "var(--color-background-green-dark)" }}/>
            <div style={{ fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-950)" }}>
              <strong>En stock</strong> · livraison entre le <strong>14 et 18 avril</strong> · <span style={{ color: "var(--color-neutral-600)" }}>Livraison sur RDV incluse</span>
            </div>
          </div>
          {/* tabs */}
          <div style={{ marginTop: 32, borderTop: "1px solid var(--color-neutral-150)" }}>
            <div style={{ display: "flex", gap: 32, borderBottom: "1px solid var(--color-neutral-150)" }}>
              {[["description","Description"],["specs","Caractéristiques"],["delivery","Livraison & retour"]].map(([k, l]) => (
                <button key={k} onClick={() => setTab(k)} style={{
                  border: "none", background: "transparent", cursor: "pointer",
                  padding: "16px 0",
                  fontFamily: "var(--font-family-utility)", fontWeight: 600, fontSize: 14,
                  color: tab === k ? "var(--color-neutral-950)" : "var(--color-neutral-600)",
                  borderBottom: tab === k ? "2px solid var(--color-neutral-950)" : "2px solid transparent",
                  marginBottom: -1,
                }}>{l}</button>
              ))}
            </div>
            <div style={{ padding: "20px 0", fontFamily: "var(--font-family-text)", fontSize: 14, lineHeight: "22px", color: "var(--color-neutral-700)" }}>
              {tab === "description" && <p style={{ margin: 0 }}>{p.description}</p>}
              {tab === "specs" && (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {p.specs?.map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid var(--color-neutral-150)" }}>
                        <td style={{ padding: "10px 0", width: "35%", color: "var(--color-neutral-600)" }}>{k}</td>
                        <td style={{ padding: "10px 0", color: "var(--color-neutral-950)" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {tab === "delivery" && (
                <div>
                  <p style={{ margin: "0 0 12px" }}><strong>Livraison offerte</strong> dès 199 € d'achat, partout en France métropolitaine.</p>
                  <p style={{ margin: "0 0 12px" }}>Nos transporteurs vous contactent 48h avant pour fixer un créneau de 2h. Montage possible en option (+89 €).</p>
                  <p style={{ margin: 0 }}>14 jours pour changer d'avis · retour offert.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BenefitStrip/>
    </div>
  );
}

// --------- MINI CART (drawer) ---------
function MiniCart({ open, items, onClose, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.product.price * it.qty, 0);
  return (
    <>
      {open && <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 40 }}/>}
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: 440, background: "#fff",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .25s ease-out",
        zIndex: 50,
        display: "flex", flexDirection: "column",
        boxShadow: "var(--elevation-md)",
      }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--color-neutral-150)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--font-family-utility)", fontWeight: 700, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.48px" }}>Mon panier · {items.length}</div>
          <IconButton onClick={onClose} ariaLabel="Fermer"><IconClose size={20}/></IconButton>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 24px" }}>
          {items.length === 0 && (
            <div style={{ padding: "48px 0", textAlign: "center", color: "var(--color-neutral-600)", fontFamily: "var(--font-family-text)" }}>
              <IconCart size={40} style={{ color: "var(--color-neutral-400)" }}/>
              <p>Votre panier est vide.</p>
            </div>
          )}
          {items.map(it => (
            <div key={it.key} style={{ display: "grid", gridTemplateColumns: "72px 1fr auto", gap: 14, padding: "16px 0", borderBottom: "1px solid var(--color-neutral-150)", alignItems: "flex-start" }}>
              <div style={{ aspectRatio: "1", background: it.product.photo, borderRadius: "var(--radius-sm)" }}/>
              <div>
                <div style={{ fontFamily: "var(--font-family-product)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.48px" }}>{it.product.name}</div>
                <div style={{ fontFamily: "var(--font-family-text)", fontSize: 12, color: "var(--color-neutral-600)", marginTop: 2 }}>{it.product.sub}</div>
                {it.color && <div style={{ fontFamily: "var(--font-family-text)", fontSize: 12, color: "var(--color-neutral-600)", marginTop: 2 }}>Coloris : {it.color.name}</div>}
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-family-utility)", fontSize: 12, color: "var(--color-neutral-600)" }}>Qté {it.qty}</span>
                  <button onClick={() => onRemove(it.key)} style={{ border: "none", background: "transparent", fontFamily: "var(--font-family-text)", fontSize: 12, color: "var(--color-neutral-600)", textDecoration: "underline", cursor: "pointer", padding: 0 }}>Retirer</button>
                </div>
              </div>
              <Price current={it.product.price * it.qty} size="sm"/>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div style={{ padding: "20px 24px", borderTop: "1px solid var(--color-neutral-150)", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-700)" }}>
              <span>Sous-total</span>
              <span>{fmtPrice(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-700)" }}>
              <span>Livraison</span>
              <span style={{ color: "var(--color-background-green-dark)" }}>Offerte</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid var(--color-neutral-150)", paddingTop: 12 }}>
              <span className="heading-subtitle-md">Total TTC</span>
              <Price current={subtotal} size="lg"/>
            </div>
            <Button variant="primary" size="lg" iconEnd={<IconArrowRight size={18}/>}>Passer la commande</Button>
            <Button variant="ghost" size="sm" onClick={onClose}>Continuer mes achats</Button>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { PRODUCTS, PDP, MiniCart });
