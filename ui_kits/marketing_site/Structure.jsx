// Meridian · marketing UI kit — structural components

const navLinks = [
  { label: "Soldes", highlight: true },
  { label: "Nouvelle collection" },
  { label: "Avant-première" },
  { label: "Meilleures ventes" },
  { label: "Canapés" },
  { label: "Lits & matelas" },
  { label: "Déco" },
  { label: "Services" },
  { label: "Espace Pro" },
];

// --------- HEADER (4-bar laptop) ---------
function Header({ onCartClick, cartCount, route, setRoute }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(15px)", borderBottom: "1px solid var(--color-neutral-150)" }}>
      <Bandeau/>
      {/* Row 2 — logo + search + account */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr 260px",
        alignItems: "center",
        padding: "18px 64px",
        gap: 24,
      }}>
        <a onClick={() => setRoute({ kind: "home" })} style={{ cursor: "pointer", display: "inline-flex", color: "var(--color-neutral-950)" }}>
          <LogoBobochic height={28}/>
        </a>
        <div style={{
          display: "flex", alignItems: "center",
          background: "var(--color-neutral-100)",
          borderRadius: "var(--radius-md)",
          padding: "10px 16px",
          gap: 10,
        }}>
          <IconSearch size={18} style={{ color: "var(--color-neutral-600)" }}/>
          <input placeholder="Rechercher un canapé, un lit, un matelas…" style={{
            border: "none", background: "transparent", outline: "none",
            fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-950)",
            flex: 1,
          }}/>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 4, alignItems: "center" }}>
          <Button variant="ghost" size="sm" icon={<IconHeadset size={16}/>}>Nous contacter</Button>
          <IconButton ariaLabel="Mes favoris"><IconHeart size={20}/></IconButton>
          <IconButton ariaLabel="Mon compte"><IconUser size={22}/></IconButton>
          <IconButton ariaLabel="Mon panier" onClick={onCartClick} badge={cartCount > 0 ? cartCount : null}><IconCart size={22}/></IconButton>
        </div>
      </div>
      {/* Row 3 — primary nav */}
      <nav style={{
        display: "flex", justifyContent: "center", gap: 36,
        padding: "0 64px",
        borderTop: "1px solid var(--color-neutral-150)",
      }}>
        {navLinks.map((l, i) => (
          <CategoryPill key={i} label={l.label} highlight={l.highlight}
            active={route.kind === "category" && route.label === l.label}
            onClick={() => setRoute({ kind: "category", label: l.label })}/>
        ))}
      </nav>
    </header>
  );
}

// --------- FOOTER ---------
function Footer() {
  const cols = [
    { title: "Service client", items: ["Nous contacter", "Livraison & montage", "Retours & remboursement", "Garantie & SAV", "FAQ"] },
    { title: "À propos", items: ["Le manifeste", "Nos ateliers", "Carrières", "Presse", "Bobochic AI Lab"] },
    { title: "Espace pro", items: ["Hôtellerie & CHR", "Architectes", "Marchés publics", "Devenir partenaire"] },
  ];
  return (
    <footer style={{ background: "var(--color-neutral-950)", color: "#fff", padding: "64px 64px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ color: "#fff" }}><LogoBobochic height={26}/></div>
          <p style={{ marginTop: 24, fontFamily: "var(--font-family-text)", fontSize: 14, lineHeight: "22px", color: "var(--color-neutral-300)", maxWidth: 300 }}>
            Des meubles pensés pour durer, conçus en France et fabriqués avec les meilleurs tapissiers d'Europe.
          </p>
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: "var(--font-family-utility)", fontSize: 12, fontWeight: 600, letterSpacing: "0.48px", textTransform: "uppercase", marginBottom: 10 }}>Recevez notre newsletter</div>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex" }}>
              <input placeholder="votre email" style={{ flex: 1, padding: "10px 14px", border: "1px solid var(--color-neutral-700)", background: "transparent", color: "#fff", borderRadius: 0, fontFamily: "var(--font-family-text)", fontSize: 14, outline: "none" }}/>
              <Button variant="light" size="sm" style={{ borderRadius: 0 }}>S'inscrire</Button>
            </form>
          </div>
        </div>
        {cols.map((c, i) => (
          <div key={i}>
            <div style={{ fontFamily: "var(--font-family-utility)", fontSize: 12, fontWeight: 600, letterSpacing: "0.48px", textTransform: "uppercase", marginBottom: 16 }}>{c.title}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.items.map((it, j) => (
                <li key={j} style={{ fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-300)", cursor: "pointer" }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--color-neutral-800)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--color-neutral-500)", fontFamily: "var(--font-family-text)" }}>
        <span>© 2026 Bobochic Paris SAS · 12 rue d'Enghien, 75010 Paris · SIRET 811 234 567 00018</span>
        <div style={{ display: "flex", gap: 16 }}>
          <span>CGV</span><span>Mentions légales</span><span>Politique de confidentialité</span><span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}

// --------- HERO (homepage) ---------
function Hero({ onCTA }) {
  return (
    <section style={{ position: "relative", height: 520, overflow: "hidden" }}>
      {/* Fake product photography — warm beige sofa on grey floor */}
      <div style={{ position: "absolute", inset: 0, background: `
        radial-gradient(120% 80% at 70% 100%, rgba(0,0,0,0.25), transparent 60%),
        linear-gradient(135deg, #c9b89a 0%, #9e8968 40%, #6f5a44 80%)
      ` }}/>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 50% at 25% 50%, rgba(255,255,255,0.25), transparent 70%)" }}/>
      <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 64px" }}>
        <div style={{ maxWidth: 560, color: "var(--color-neutral-950)" }}>
          <div className="heading-subtitle-md" style={{ marginBottom: 16 }}>Nouvelle collection · Printemps 26</div>
          <h1 className="display-sm-strong" style={{ margin: 0, color: "var(--color-neutral-950)" }}>La noblesse du velours côtelé.</h1>
          <p className="text-lg-regular" style={{ marginTop: 16, maxWidth: 440 }}>
            Noble et élégant, le velours côtelé n'en reste pas moins un tissu extrêmement difficile à travailler. Nous avons collaboré avec les meilleurs tapissiers d'Europe.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <Button variant="primary" size="lg" iconEnd={<IconArrowRight size={18}/>} onClick={onCTA}>Voir la collection</Button>
            <Button variant="secondary" size="lg">Découvrir l'histoire</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------- CATEGORY TILE ROW ---------
function CategoryTiles({ onTile }) {
  const tiles = [
    { label: "Canapés d'angle", grad: "linear-gradient(135deg,#c9b89a,#6f5a44)" },
    { label: "Canapés convertibles", grad: "linear-gradient(135deg,#3c342c,#181512)" },
    { label: "Fauteuils", grad: "linear-gradient(135deg,#b89e85,#7d6751)" },
    { label: "Lits & matelas", grad: "linear-gradient(135deg,#e4dac8,#b09c82)" },
    { label: "Tables", grad: "linear-gradient(135deg,#d8d2c8,#8a7f6f)" },
    { label: "Déco", grad: "linear-gradient(135deg,#c9d2c6,#6d7a65)" },
  ];
  return (
    <section style={{ padding: "64px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
        <h2 className="heading-title-xl" style={{ margin: 0 }}>Explorez par univers</h2>
        <a style={{ fontFamily: "var(--font-family-utility)", fontSize: 14, fontWeight: 600, color: "var(--color-neutral-950)", textDecoration: "underline", cursor: "pointer" }}>Tout voir</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
        {tiles.map((t, i) => (
          <button key={i} onClick={() => onTile?.(t.label)} style={{
            border: "none", padding: 0, cursor: "pointer",
            aspectRatio: "3/4",
            borderRadius: "var(--radius-lg)",
            background: t.grad,
            position: "relative",
            overflow: "hidden",
            color: "#fff",
            textAlign: "left",
          }}>
            <span style={{
              position: "absolute", left: 16, bottom: 16,
              fontFamily: "var(--font-family-utility)", fontSize: 16, fontWeight: 700,
              letterSpacing: "0.48px", textTransform: "uppercase",
            }}>{t.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

// --------- PRODUCT CARD ---------
function ProductCard({ product, onOpen, onLike, liked }) {
  return (
    <article style={{
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--elevation-2)",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      cursor: "pointer",
      transition: "box-shadow .15s, transform .15s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--elevation-3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--elevation-2)"; e.currentTarget.style.transform = ""; }}
    onClick={() => onOpen?.(product)}>
      <div style={{
        aspectRatio: "4/3",
        position: "relative",
        background: product.photo,
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 60% at 50% 100%, rgba(0,0,0,0.15), transparent)" }}/>
        {product.discount && (
          <div style={{ position: "absolute", top: 12, left: 12 }}><Flag kind="promo">−{product.discount}%</Flag></div>
        )}
        {product.isNew && !product.discount && (
          <div style={{ position: "absolute", top: 12, left: 12 }}><Flag kind="new">Nouveau</Flag></div>
        )}
        <button onClick={(e) => { e.stopPropagation(); onLike?.(product); }} aria-label="Ajouter aux favoris" style={{
          position: "absolute", top: 12, right: 12,
          width: 36, height: 36, borderRadius: 999,
          background: "rgba(255,255,255,0.9)",
          border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: liked ? "var(--color-red-800)" : "var(--color-neutral-950)",
        }}><IconHeart size={18} filled={liked}/></button>
      </div>
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontFamily: "var(--font-family-utility)", fontSize: 11, fontWeight: 600, letterSpacing: "0.48px", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>{product.eyebrow}</div>
        <div style={{ fontFamily: "var(--font-family-product)", fontSize: 18, fontWeight: 600, letterSpacing: "0.48px", textTransform: "uppercase", color: "var(--color-neutral-950)" }}>{product.name}</div>
        <div style={{ fontFamily: "var(--font-family-text)", fontSize: 13, color: "var(--color-neutral-600)" }}>{product.sub}</div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Price current={product.price} original={product.original} size="md"/>
          {product.rating && <StarRating value={product.rating} count={product.reviews}/>}
        </div>
      </div>
    </article>
  );
}

// --------- PRODUCT GRID ---------
function ProductGrid({ products, onOpen, liked, onLike, cols = 4 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 20 }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} onOpen={onOpen} onLike={onLike} liked={liked?.[p.id]}/>
      ))}
    </div>
  );
}

Object.assign(window, { Header, Footer, Hero, CategoryTiles, ProductCard, ProductGrid });
