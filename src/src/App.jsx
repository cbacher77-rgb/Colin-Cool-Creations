import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Upload, Palette, Type, Phone, Mail, MapPin, Instagram } from "lucide-react";

// If your environment supports shadcn/ui, you can swap these basic components for shadcn equivalents.

const cx = (...cls) => cls.filter(Boolean).join(" ");

const sampleProducts = [
  {
    id: "tee-001",
    name: "Classic Tee",
    price: 22,
    category: "Shirts",
    description: "Soft cotton tee. Perfect for everyday or branded runs.",
    image:
      "https://images.unsplash.com/photo-1520975958225-56b3d1e6f4b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hood-002",
    name: "Premium Hoodie",
    price: 48,
    category: "Hoodies",
    description: "Heavyweight feel with a clean, modern fit.",
    image:
      "https://images.unsplash.com/photo-1520975859060-2c4b7f6f84a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hat-003",
    name: "Dad Hat",
    price: 18,
    category: "Hats",
    description: "Low-profile cap for simple embroidered logos.",
    image:
      "https://images.unsplash.com/photo-1520975692896-7c3d6e6bdc42?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", "Shirts", "Hoodies", "Hats"];

function Header({ active, setActive }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActive("home");
          }}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg">Your Custom Apparel</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <NavBtn active={active === "home"} onClick={() => setActive("home")}>
            Home
          </NavBtn>
          <NavBtn active={active === "design"} onClick={() => setActive("design")}>
            Design
          </NavBtn>
          <NavBtn active={active === "products"} onClick={() => setActive("products")}>
            Products
          </NavBtn>
          <NavBtn active={active === "contact"} onClick={() => setActive("contact")}>
            Contact
          </NavBtn>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              setActive("products");
            }}
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop
          </a>
        </div>
      </div>

      <div className="md:hidden border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-2 flex gap-2 overflow-x-auto">
          <NavPill active={active === "home"} onClick={() => setActive("home")}>
            Home
          </NavPill>
          <NavPill active={active === "design"} onClick={() => setActive("design")}>
            Design
          </NavPill>
          <NavPill active={active === "products"} onClick={() => setActive("products")}>
            Products
          </NavPill>
          <NavPill active={active === "contact"} onClick={() => setActive("contact")}>
            Contact
          </NavPill>
        </div>
      </div>
    </header>
  );
}

function NavBtn({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "px-3 py-2 text-sm rounded-2xl transition",
        active ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
      )}
    >
      {children}
    </button>
  );
}

function NavPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "px-3 py-2 text-sm rounded-full border transition whitespace-nowrap",
        active
          ? "bg-black text-white border-black"
          : "bg-white text-black/70 border-black/10 hover:bg-black/5"
      )}
    >
      {children}
    </button>
  );
}

function SectionShell({ id, title, kicker, children }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          {kicker && (
            <div className="text-xs font-semibold tracking-widest uppercase text-black/50">
              {kicker}
            </div>
          )}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero({ setActive }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.06] to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight"
            >
              Custom apparel that looks professional and feels premium.
            </motion.h1>
            <p className="mt-4 text-black/70 leading-relaxed max-w-prose">
              Add your products, let customers start a design, and collect orders
              fast. This starter site includes a Design section + a Products
              section you can manage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActive("design")}
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" />
                Start a Design
              </button>
              <button
                onClick={() => setActive("products")}
                className="inline-flex items-center gap-2 rounded-2xl border border-black/15 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-black/5"
              >
                <ShoppingBag className="h-4 w-4" />
                Browse Products
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="Turnaround" value="Fast" />
              <Stat label="Print" value="DTG / DTF" />
              <Stat label="Min" value="No min" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-5 border-b border-black/5 flex items-center justify-between">
              <div className="font-medium">Quick Preview</div>
              <div className="text-xs text-black/50">Design → Product → Order</div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4">
                <PreviewCard
                  title="Design"
                  icon={<Sparkles className="h-4 w-4" />}
                  body="Upload a logo, add text, choose colors."
                />
                <PreviewCard
                  title="Products"
                  icon={<ShoppingBag className="h-4 w-4" />}
                  body="Add items + pricing, filter by category."
                />
              </div>
              <div className="mt-4 rounded-3xl border border-black/10 bg-black/[0.03] p-4">
                <div className="text-sm font-medium">Next step</div>
                <p className="mt-1 text-sm text-black/70">
                  Connect a payment + checkout (Shopify, Stripe, or Square) when
                  you’re ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
      <div className="text-xs text-black/50">{label}</div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
}

function PreviewCard({ title, icon, body }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-black text-white">
          {icon}
        </span>
        {title}
      </div>
      <p className="mt-2 text-sm text-black/70">{body}</p>
    </div>
  );
}

function DesignSection({ onSubmitDesign }) {
  const [designText, setDesignText] = useState("Your Text Here");
  const [textColor, setTextColor] = useState("#111111");
  const [shirtColor, setShirtColor] = useState("#ffffff");
  const [logoDataUrl, setLogoDataUrl] = useState(null);
  const [notes, setNotes] = useState("");

  const handleLogoUpload = async (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <SectionShell
      id="design"
      kicker="Design"
      title="Let customers start a design"
    >
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="p-5 border-b border-black/5 flex items-center justify-between">
            <div className="font-medium">Design Controls</div>
            <div className="text-xs text-black/50">Starter mockup</div>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className="text-sm font-medium">Add text</label>
              <div className="mt-2 flex gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10">
                  <Type className="h-4 w-4" />
                </span>
                <input
                  value={designText}
                  onChange={(e) => setDesignText(e.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Team name, company, quote…"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Text color</label>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10">
                    <Palette className="h-4 w-4" />
                  </span>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="h-10 w-full rounded-2xl border border-black/10 bg-white p-1"
                    aria-label="Text color"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Garment color</label>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10">
                    <Palette className="h-4 w-4" />
                  </span>
                  <input
                    type="color"
                    value={shirtColor}
                    onChange={(e) => setShirtColor(e.target.value)}
                    className="h-10 w-full rounded-2xl border border-black/10 bg-white p-1"
                    aria-label="Shirt color"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Upload logo (optional)</label>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10">
                  <Upload className="h-4 w-4" />
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleLogoUpload(e.target.files?.[0])}
                  className="w-full text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-2 w-full min-h-[90px] rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Sizes, placement, quantity, deadline…"
              />
            </div>

            <button
              onClick={() =>
                onSubmitDesign({
                  designText,
                  textColor,
                  shirtColor,
                  logoDataUrl,
                  notes,
                })
              }
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              Submit Design Request
            </button>

            <p className="text-xs text-black/50">
              This starter collects design info in the browser. Hook it to email,
              a form service, or your backend to receive requests.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="p-5 border-b border-black/5 flex items-center justify-between">
            <div className="font-medium">Live Mockup</div>
            <div className="text-xs text-black/50">Preview only</div>
          </div>
          <div className="p-6">
            <div className="mx-auto max-w-md">
              <div className="relative rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
                <div
                  className="mx-auto rounded-[1.75rem] border border-black/10 shadow-sm"
                  style={{ background: shirtColor }}
                >
                  <div className="aspect-[4/5] flex flex-col items-center justify-center p-6">
                    {logoDataUrl ? (
                      <img
                        src={logoDataUrl}
                        alt="Uploaded logo"
                        className="max-h-24 object-contain mb-4"
                      />
                    ) : (
                      <div className="mb-4 text-xs text-black/40">
                        (Logo preview)
                      </div>
                    )}
                    <div
                      className="text-center text-xl font-semibold tracking-tight"
                      style={{ color: textColor }}
                    >
                      {designText || " "}
                    </div>
                    <div className="mt-3 text-[11px] text-black/40">
                      Front chest placement
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-black/10 bg-black/[0.03] p-4">
                <div className="text-sm font-medium">Tip</div>
                <p className="mt-1 text-sm text-black/70">
                  For the real thing, you can later connect a proper mockup tool
                  (Printful/Printify), Canva embed, or your own image generator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ProductsSection({ products, setProducts }) {
  const [activeCat, setActiveCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return products
      .filter((p) => (activeCat === "All" ? true : p.category === activeCat))
      .filter((p) => {
        const needle = q.trim().toLowerCase();
        if (!needle) return true;
        return (
          p.name.toLowerCase().includes(needle) ||
          p.description.toLowerCase().includes(needle)
        );
      });
  }, [products, activeCat, q]);

  // Simple “admin” add product modal-less form
  const [newP, setNewP] = useState({
    name: "",
    price: "",
    category: "Shirts",
    description: "",
    image: "",
  });

  const addProduct = () => {
    const priceNum = Number(newP.price);
    if (!newP.name || !Number.isFinite(priceNum)) return;
    const p = {
      id: `${newP.category.toLowerCase()}-${Math.random().toString(16).slice(2, 8)}`,
      name: newP.name,
      price: priceNum,
      category: newP.category,
      description: newP.description || "",
      image:
        newP.image ||
        "https://images.unsplash.com/photo-1520975958225-56b3d1e6f4b8?auto=format&fit=crop&w=1200&q=80",
    };
    setProducts((prev) => [p, ...prev]);
    setNewP({ name: "", price: "", category: "Shirts", description: "", image: "" });
  };

  return (
    <SectionShell
      id="products"
      kicker="Products"
      title="Show your products (and manage them)"
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={cx(
                    "px-3 py-2 text-sm rounded-full border transition whitespace-nowrap",
                    activeCat === c
                      ? "bg-black text-white border-black"
                      : "bg-white text-black/70 border-black/10 hover:bg-black/5"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products…"
              className="w-full sm:w-64 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-xs text-black/50">{p.category}</div>
                    </div>
                    <div className="text-sm font-semibold">${p.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-black/70">{p.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="flex-1 rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                      onClick={() => alert("Connect checkout here (Shopify/Stripe/Square).")}
                    >
                      Order
                    </button>
                    <button
                      className="rounded-2xl border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/5"
                      onClick={() => {
                        const url = new URL(window.location.href);
                        url.hash = "#design";
                        window.location.href = url.toString();
                      }}
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/70">
              No products match that search.
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden h-fit">
          <div className="p-5 border-b border-black/5">
            <div className="font-medium">Product Manager</div>
            <div className="text-xs text-black/50 mt-1">
              Add products here for now. Later, connect Shopify/WooCommerce.
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                value={newP.name}
                onChange={(e) => setNewP((s) => ({ ...s, name: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder="e.g., Classic Tee"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Price</label>
                <input
                  value={newP.price}
                  onChange={(e) => setNewP((s) => ({ ...s, price: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="e.g., 25"
                  inputMode="decimal"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <select
                  value={newP.category}
                  onChange={(e) =>
                    setNewP((s) => ({ ...s, category: e.target.value }))
                  }
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                >
                  <option>Shirts</option>
                  <option>Hoodies</option>
                  <option>Hats</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                value={newP.description}
                onChange={(e) =>
                  setNewP((s) => ({ ...s, description: e.target.value }))
                }
                className="mt-2 w-full min-h-[90px] rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder="What makes it good? Fabric, fit, print style…"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Image URL (optional)</label>
              <input
                value={newP.image}
                onChange={(e) => setNewP((s) => ({ ...s, image: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Paste an image link"
              />
            </div>
            <button
              onClick={addProduct}
              className="w-full rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Add Product
            </button>

            <div className="pt-2 border-t border-black/5">
              <div className="text-xs font-semibold tracking-widest uppercase text-black/50">
                Quick swap
              </div>
              <p className="mt-2 text-xs text-black/60 leading-relaxed">
                If you prefer, replace <span className="font-mono">sampleProducts</span> at the top
                with your own array and remove this form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell id="contact" kicker="Contact" title="Make it easy to order">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-[2rem] border border-black/10 bg-white shadow-sm p-6">
          <div className="text-sm font-semibold">Contact form (starter)</div>
          <p className="mt-2 text-sm text-black/70">
            This demo form doesn’t send anywhere yet. Connect it to Formspree,
            Google Forms, or your backend.
          </p>

          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <input
              className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Name"
            />
            <input
              className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Email"
            />
            <input
              className="sm:col-span-2 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="What do you need? (shirts, hoodies, hats…)"
            />
            <textarea
              className="sm:col-span-2 min-h-[120px] rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Quantity, sizes, deadline, artwork notes…"
            />
            <button
              onClick={() => alert("Connect this to a real form endpoint.")}
              className="sm:col-span-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Send
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white shadow-sm p-6">
          <div className="text-sm font-semibold">Business info</div>
          <div className="mt-4 space-y-3 text-sm text-black/70">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5" />
              <div>
                <div className="font-medium text-black">Phone</div>
                <div>(555) 555-5555</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5" />
              <div>
                <div className="font-medium text-black">Email</div>
                <div>orders@yourdomain.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5" />
              <div>
                <div className="font-medium text-black">Location</div>
                <div>City, State</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="h-4 w-4 mt-0.5" />
              <div>
                <div className="font-medium text-black">Instagram</div>
                <div>@yourhandle</div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-black/10 bg-black/[0.03] p-4">
            <div className="text-sm font-medium">Upgrade path</div>
            <ul className="mt-2 text-sm text-black/70 list-disc pl-5 space-y-1">
              <li>Connect checkout (Shopify, Stripe, Square)</li>
              <li>Connect product inventory (Shopify/WooCommerce API)</li>
              <li>Auto-email design requests to you</li>
              <li>Add order tracking + FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Your Custom Apparel — All rights reserved.
        </div>
        <div className="flex gap-4">
          <a className="hover:text-black" href="#design">
            Design
          </a>
          <a className="hover:text-black" href="#products">
            Products
          </a>
          <a className="hover:text-black" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const [products, setProducts] = useState(sampleProducts);

  const onSubmitDesign = (payload) => {
    // Starter behavior: show a confirmation and copy JSON to clipboard
    const json = JSON.stringify(payload, null, 2);
    navigator.clipboard?.writeText(json).catch(() => {});
    alert(
      "Design request captured!\n\nWe copied the design details to your clipboard as JSON.\nNext: connect this to email or your backend."
    );
  };

  // Simple in-page navigation
  React.useEffect(() => {
    const id = active === "home" ? null : active;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header active={active} setActive={setActive} />
      <main>
        <div id="home">
          <Hero setActive={setActive} />
        </div>
        <DesignSection onSubmitDesign={onSubmitDesign} />
        <ProductsSection products={products} setProducts={setProducts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
