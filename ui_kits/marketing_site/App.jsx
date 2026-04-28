// Meridian · marketing site demo App

const { useState } = React;

function CollectionStrip({ products, onOpen, liked, onLike }) {
  return (
    <section style={{ padding: "48px 64px 80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <div>
          <div className="heading-subtitle-md" style={{ marginBottom: 6 }}>Soldes d'hiver · jusqu'à −40%</div>
          <h2 className="heading-title-xl" style={{ margin: 0 }}>Les best-sellers en promotion</h2>
        </div>
        <a style={{ fontFamily: "var(--font-family-utility)", fontSize: 14, fontWeight: 600, color: "var(--color-neutral-950)", textDecoration: "underline", cursor: "pointer" }}>Voir tous les produits soldés →</a>
      </div>
      <ProductGrid products={products} onOpen={onOpen} liked={liked} onLike={onLike}/>
    </section>
  );
}

function EditorialBlock() {
  return (
    <section style={{ padding: "80px 64px", background: "var(--color-background-beige-light)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{
          aspectRatio: "4/5",
          borderRadius: "var(--radius-xl)",
          background: "linear-gradient(140deg,#b8a080 0%,#4a3b2a 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 60% at 30% 40%, rgba(255,255,255,0.2), transparent 70%)" }}/>
        </div>
        <div>
          <div className="heading-subtitle-md" style={{ marginBottom: 12 }}>Notre engagement</div>
          <h2 className="display-xs-strong" style={{ margin: 0 }}>Conçus pour durer, fabriqués pour rester.</h2>
          <p className="text-lg-regular" style={{ marginTop: 24, maxWidth: 520 }}>
            Chaque pièce est pensée par notre atelier parisien, prototypée à la main et produite en petites séries dans des manufactures européennes que nous connaissons nom par nom. Hêtre des Vosges, lin de Normandie, velours de Côme — nos matières ont une provenance, pas un fournisseur.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32, maxWidth: 520 }}>
            {[
              ["5 ans", "de garantie structure"],
              ["12", "ateliers partenaires"],
              ["France", "conception & SAV"],
              ["14 jours", "pour changer d'avis"],
            ].map(([big, small]) => (
              <div key={big} style={{ borderTop: "1px solid var(--color-neutral-300)", paddingTop: 16 }}>
                <div style={{ fontFamily: "var(--font-family-display)", fontSize: 28, fontWeight: 600, color: "var(--color-neutral-950)", letterSpacing: "-0.64px" }}>{big}</div>
                <div style={{ fontFamily: "var(--font-family-text)", fontSize: 13, color: "var(--color-neutral-600)", marginTop: 4 }}>{small}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Button variant="secondary" iconEnd={<IconArrowRight size={18}/>}>Lire notre manifeste</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryPage({ label, products, onOpen, liked, onLike }) {
  const [sort, setSort] = useState("Populaires");
  return (
    <div>
      <div style={{ padding: "28px 64px 8px" }}>
        <Breadcrumb items={["Accueil", label]}/>
      </div>
      <div style={{ padding: "12px 64px 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h1 className="display-xs-strong" style={{ margin: 0 }}>{label}</h1>
          <div style={{ fontFamily: "var(--font-family-text)", fontSize: 14, color: "var(--color-neutral-600)", marginTop: 6 }}>{products.length} produits · livraison offerte dès 199 €</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Populaires", "Prix ↑", "Prix ↓", "Nouveautés"].map(s => (
            <button key={s} onClick={() => setSort(s)} style={{
              border: "1px solid " + (sort === s ? "var(--color-neutral-950)" : "var(--color-neutral-200)"),
              background: sort === s ? "var(--color-neutral-950)" : "#fff",
              color: sort === s ? "#fff" : "var(--color-neutral-950)",
              fontFamily: "var(--font-family-utility)", fontSize: 12, fontWeight: 600,
              padding: "8px 14px", borderRadius: 999, cursor: "pointer",
            }}>{s}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "0 64px 80px" }}>
        <ProductGrid products={products} onOpen={onOpen} liked={liked} onLike={onLike}/>
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState({ kind: "home" });
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [liked, setLiked] = useState({});

  function addToCart(product, qty, color) {
    const key = product.id + (color?.name ?? "");
    setCart(c => {
      const existing = c.find(x => x.key === key);
      if (existing) return c.map(x => x.key === key ? { ...x, qty: x.qty + qty } : x);
      return [...c, { key, product, qty, color }];
    });
    setCartOpen(true);
  }
  function removeFromCart(key) { setCart(c => c.filter(x => x.key !== key)); }
  function toggleLike(p) { setLiked(l => ({ ...l, [p.id]: !l[p.id] })); }

  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  return (
    <div style={{ background: "var(--color-background-beige-light)", minHeight: "100vh" }}>
      <Header onCartClick={() => setCartOpen(true)} cartCount={cartCount} route={route} setRoute={setRoute}/>
      {route.kind === "home" && (
        <>
          <Hero onCTA={() => setRoute({ kind: "category", label: "Nouvelle collection" })}/>
          <div style={{ background: "#fff" }}>
            <CategoryTiles onTile={(label) => setRoute({ kind: "category", label })}/>
            <CollectionStrip products={PRODUCTS.slice(0, 8)} onOpen={(p) => setRoute({ kind: "pdp", product: p })} liked={liked} onLike={toggleLike}/>
          </div>
          <EditorialBlock/>
          <div style={{ background: "#fff", padding: "0 64px" }}>
            <BenefitStrip/>
          </div>
        </>
      )}
      {route.kind === "category" && (
        <div style={{ background: "#fff" }}>
          <CategoryPage label={route.label} products={PRODUCTS} onOpen={(p) => setRoute({ kind: "pdp", product: p })} liked={liked} onLike={toggleLike}/>
        </div>
      )}
      {route.kind === "pdp" && (
        <PDP product={route.product} onAddToCart={addToCart} onBack={() => setRoute({ kind: "home" })}/>
      )}
      <Footer/>
      <MiniCart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
