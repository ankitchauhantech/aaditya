export interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  image: string;
  bgColor: string;
  tagline: string;
  description: string;
  startingPrice: string;
  turnaround: string;
  features: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    slug: "printing-service",
    title: "Printing Service",
    badge: "Custom Apparel & T-Shirts",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#e8edf2]",
    tagline: "High Quality Custom T-Shirts, Hoodies, Sweatshirts & Caps",
    description:
      "We provide premium custom apparel printing for corporate teams, colleges, schools, businesses, and promotional events in Noorpur and Bijnor. Using high-definition DTF, Screen, and Sublimation printing technologies, we guarantee vivid colors that do not fade or crack after washing.",
    startingPrice: "₹180 / T-Shirt",
    turnaround: "24 - 48 Hours",
    features: [
      "100% Cotton, Bio-Wash & Dri-Fit Polyester Fabrics Available",
      "High Definition DTF & Screen Printing",
      "No Minimum Order Quantity for Rush Orders",
      "Front, Back, and Sleeve Custom Logo Print",
    ],
    specs: [
      { label: "Fabric Types", value: "180-240 GSM Combed Cotton, Polyester, Fleece" },
      { label: "Print Technology", value: "DTF (Direct to Film), Screen Printing, Vinyl Heat Press" },
      { label: "Sizes Available", value: "S, M, L, XL, XXL, Custom Kids Sizes" },
      { label: "Delivery", value: "Same-day rush delivery or 2-day standard" },
    ],
    faqs: [
      { q: "Can I bring my own t-shirt or hoodie for printing?", a: "Yes, you can bring your own apparel or choose from our premium blank stock." },
      { q: "Does the print wash off?", a: "No, we use commercial grade textile inks that last 50+ washes without fading." },
    ],
  },
  {
    slug: "pod-online-stores",
    title: "POD For Online Stores",
    badge: "Print On Demand & Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#2e386b]",
    tagline: "Custom Hardcover Books, Notebooks, Diaries & Merch",
    description:
      "Empower your e-commerce brand or institutional store with on-demand printing. We print high quality journals, corporate diaries, customized notebooks, spiral pads, and personalized books with zero inventory headache.",
    startingPrice: "₹65 / Book",
    turnaround: "1 - 3 Days",
    features: [
      "Hardcover, Softcover, and Wire-O Spiral Bindings",
      "Matte, Gloss, and Soft-Touch Velvet Lamination",
      "Custom Interior Grid, Ruled, or Blank Cream Papers",
      "Fulfillment and Bulk Packaging Ready",
    ],
    specs: [
      { label: "Binding Options", value: "Hardbound, Perfect Glue Bound, Wire-O Spiral" },
      { label: "Cover Finishes", value: "Gold Foil, Spot UV, Velvet Matte, Thermal Gloss" },
      { label: "Paper Options", value: "75 GSM Maplitho, 80 GSM Natural Cream, 100 GSM Bond" },
      { label: "MOQ", value: "Starting from just 25 pcs" },
    ],
    faqs: [
      { q: "Can I get my company logo embossed with gold foil on diaries?", a: "Yes, we specialize in hot stamping gold foil and debossing on leatherette and hardcovers." },
    ],
  },
  {
    slug: "digital-scanning",
    title: "Digital Scanning",
    badge: "Magazines, Catalogs & Booklets",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#e2e4e9]",
    tagline: "High-Resolution Scanning, Multi-Page Brochures & Product Catalogs",
    description:
      "Transform your product portfolio into stunning physical catalogs and digitized digital documents. From multi-page saddle-stitched product brochures to large blueprint scanning, we ensure sharp contrast and ultra-high resolution.",
    startingPrice: "₹15 / Page",
    turnaround: "Same Day",
    features: [
      "Up to 1200 DPI Ultra High Resolution Scanning",
      "Multi-Page Saddle Stitched Product Catalogs",
      "Glossy and Matte Art Paper Finish (130 - 300 GSM)",
      "Digital Archiving to PDF & Cloud Delivery",
    ],
    specs: [
      { label: "Scanner Resolution", value: "Up to 1200 DPI Optical Color" },
      { label: "Catalog Sizes", value: "A4, A5, Square (8x8 inch), Custom Landscape" },
      { label: "Paper Stock", value: "130 GSM to 350 GSM Imported Art Paper" },
      { label: "Binding", value: "Center Staple (Saddle Stitch), Perfect Binding" },
    ],
    faqs: [
      { q: "Can you design the product catalog layout for us?", a: "Yes, our in-house graphic design team can arrange your photos and product details into a modern layout." },
    ],
  },
  {
    slug: "stickers-and-labels",
    title: "Stickers And Labels",
    badge: "Packaging & Bottle Labels",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#eaeaea]",
    tagline: "Waterproof Die-Cut Stickers, Jar Labels & Packaging Seals",
    description:
      "Elevate your brand packaging with precision kiss-cut and die-cut labels. We produce waterproof vinyl labels for cosmetic jars, supplement bottles, honey jars, bakery boxes, and outdoor bumper stickers with permanent adhesive.",
    startingPrice: "₹2 / Sticker",
    turnaround: "24 Hours",
    features: [
      "100% Waterproof, Oil-Proof & Scratch-Resistant Vinyl",
      "Precision Machine Die-Cut to Any Shape (Circle, Oval, Custom)",
      "Clear Transparent, Matte, Gloss, and Metallic Gold Finishes",
      "Supplied on Rolls or Easy-Peel Sheets",
    ],
    specs: [
      { label: "Material", value: "Self-Adhesive Vinyl, Transparent BOPP, Chromo Paper" },
      { label: "Adhesive Type", value: "Permanent High-Tack Glue" },
      { label: "Finishes", value: "Glossy, Matte, Soft-Touch, Holographic, Foil" },
      { label: "Minimum Order", value: "Starting from 100 stickers" },
    ],
    faqs: [
      { q: "Are these stickers refrigerator and oil safe?", a: "Yes, our vinyl labels are fully waterproof and moisture-resistant, suitable for cold storage." },
    ],
  },
  {
    slug: "flex-banner-printing",
    title: "Flex & Banner Printing",
    badge: "Large Format Outdoor",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#dbeafe]",
    tagline: "Heavy-Duty Frontlit Flex, Star Flex & Highway Hoardings",
    description:
      "Noorpur and Bijnor's most trusted large-format flex printing press. Whether you need a 3x2 shop board banner or a 60x20 highway hoarding, we deliver vivid colors, sharp text, and heavy GSM materials built to withstand rain and harsh sun.",
    startingPrice: "₹12 / sq.ft",
    turnaround: "Same Day (2 - 4 Hours)",
    features: [
      "High Density Solvent & Eco-Solvent Printing",
      "Regular Flex (240 GSM) & Heavy Star Flex (340+ GSM)",
      "Welded Iron Pipe Frames & Eyelet Grommet Punching",
      "On-Site Installation Support Available",
    ],
    specs: [
      { label: "Width Capacity", value: "Up to 10 Feet Seamless Width, Any Length" },
      { label: "Print Quality", value: "720 DPI to 1440 DPI Outdoor Grade" },
      { label: "Frame Options", value: "1-inch square iron pipe frame with anti-rust paint" },
      { label: "Turnaround", value: "Same-day rush delivery in Noorpur" },
    ],
    faqs: [
      { q: "How long does a Star Flex banner last outdoors?", a: "Star Flex easily lasts 2 to 3+ years outdoors through rain and strong sunlight without fading." },
    ],
  },
  {
    slug: "visiting-cards",
    title: "Visiting Cards",
    badge: "Corporate & Business Identity",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#f3e8ff]",
    tagline: "Luxury Visiting Cards with Velvet Matte, Spot UV & Foil",
    description:
      "Hand out cards that command respect. We print business cards on thick 350-400 GSM imported art cards with premium enhancements like raised Spot UV gloss, velvet matte soft-touch lamination, and embossed metallic foil logos.",
    startingPrice: "₹450 / 1000 Cards",
    turnaround: "24 - 48 Hours",
    features: [
      "350 - 400 GSM Heavyweight Imported Art Card Stock",
      "Velvet Matte, Thermal Gloss & Uncoated Texture",
      "Raised 3D Spot UV & Gold/Silver Foil Stamping",
      "Rounded Corner Die-Cutting Available",
    ],
    specs: [
      { label: "Standard Size", value: "3.5 x 2.0 inches (89 x 51 mm)" },
      { label: "Paper Weight", value: "350 GSM / 400 GSM Royal Art Board" },
      { label: "Finishes", value: "Matte + Spot UV, Gold Foil, Emboss, Metallic" },
      { label: "Packaging", value: "Plastic transparent storage box included" },
    ],
    faqs: [
      { q: "Can you print on both sides?", a: "Yes, both single-side and double-side printing are available at competitive rates." },
    ],
  },
  {
    slug: "wedding-cards",
    title: "Shaadi & Wedding Cards",
    badge: "Royal Invitations & Shagun Envelopes",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#fce7f3]",
    tagline: "Designer Royal Wedding Invitations & Traditional Cards",
    description:
      "Make your wedding celebration special from the first invite. Choose from over 100+ designer wedding templates, traditional red and gold velvet invites, modern floral pastel cards, and luxury boxed invitations with customized Hindi and English typography.",
    startingPrice: "₹15 / Card",
    turnaround: "2 - 4 Days",
    features: [
      "100+ Designer Templates for Hindu, Muslim, and Sikh Weddings",
      "Gold Foil Stamping, Laser Cut Borders & Wax Seals",
      "Custom Hindi, Urdu & English Typography Proofing",
      "Matching Shagun Envelopes & RSVP Inserts",
    ],
    specs: [
      { label: "Card Materials", value: "Handmade Sheet, Metallic Board, Velvet Sheet, Acrylic" },
      { label: "Printing Techniques", value: "Screen Printing, Hot Foil Stamping, Digital Color" },
      { label: "Accessories", value: "Matching Envelope, Ganesha / Bismillah Emblem" },
      { label: "Proofing", value: "Digital proof shared on WhatsApp within 2 hours" },
    ],
    faqs: [
      { q: "Can we review the text proof before final printing?", a: "Yes, we send a digital draft on WhatsApp and only print after your complete approval." },
    ],
  },
  {
    slug: "led-glow-sign-boards",
    title: "LED Glow Sign Boards",
    badge: "3D Acrylic & Backlit Signage",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#fed7aa]",
    tagline: "Bright 3D Acrylic Letters, ACP Sheet Backing & LED Signage",
    description:
      "Give your storefront high-end visibility day and night. We fabricate custom 3D acrylic LED channel letters, ACP sheet cladding signboards, and backlit flex light boxes that draw footfall from a distance.",
    startingPrice: "₹85 / inch (Letters) | ₹180 / sq.ft (Boards)",
    turnaround: "3 - 5 Days",
    features: [
      "Waterproof Samsung / OSRAM LED Modules with 2-Year Warranty",
      "High-Gloss 3mm Cast Acrylic with Metal Backing",
      "Heavy Duty ACP (Aluminium Composite Panel) Base",
      "Complete On-Site Installation with Waterproof Power Supply",
    ],
    specs: [
      { label: "LED Life", value: "50,000+ Burning Hours (IP67 Waterproof)" },
      { label: "Letter Materials", value: "Cast Acrylic, Stainless Steel, Titanium Gold" },
      { label: "Base Sheet", value: "3mm / 4mm Exterior Grade ACP Sheet" },
      { label: "Warranty", value: "1 to 2 Years Warranty on Power Supply & LEDs" },
    ],
    faqs: [
      { q: "Do you install the signboard at my shop?", a: "Yes, our fabrication and mounting team handles complete installation with safety brackets." },
    ],
  },
];

export const ADDITIONAL_SERVICES: ServiceDetail[] = [
  // Dedicated services matching footer and all navigation links
  {
    slug: "business-card-printing",
    title: "Business Card Printing",
    badge: "Corporate & Executive Cards",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#f3e8ff]",
    tagline: "Professional Matte, Gloss, Velvet & Spot UV Business Cards",
    description:
      "Make an unforgettable first impression. We craft corporate business cards with thick 350-400 GSM art card stock, smooth velvet matte lamination, metallic hot-stamped gold foil, and raised 3D spot gloss for executives, businesses, and professionals.",
    startingPrice: "₹450 / 1000 Cards",
    turnaround: "24 - 48 Hours",
    features: [
      "Single or Double-Sided Full Color Offset & Digital Printing",
      "Velvet Matte, Soft-Touch & Thermal Gloss Lamination",
      "Embossed Gold, Silver or Rose-Gold Foil Stamping",
      "Rounded Die-Cut Corners and QR Code Integration",
    ],
    specs: [
      { label: "Card Size", value: "Standard 89 x 51 mm (3.5 x 2.0 inches)" },
      { label: "Card Stock", value: "350 GSM / 400 GSM Royal Imported Art Board" },
      { label: "Enhancements", value: "Spot UV, Gold Foil, Debossing, Edge Painting" },
      { label: "Turnaround", value: "24 to 48 hours with door-to-door delivery" },
    ],
    faqs: [
      { q: "Can you design a business card for my brand?", a: "Yes, share your logo and details, and our designers will provide 3 modern layouts on WhatsApp." },
      { q: "What is the minimum quantity?", a: "You can order as low as 100 cards for urgent meetings or 1000 cards at wholesale rates." },
    ],
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    badge: "High-Speed Laser Color Prints",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#e0f2fe]",
    tagline: "Crisp Fast Turnaround Color Documents, Flyers, Menus & Certificates",
    description:
      "Instant commercial digital printing with true color accuracy. Ideal for flyers, restaurant menu cards, certificates, marketing brochures, product specification sheets, and project portfolios with same-day pickup.",
    startingPrice: "₹8 / Color Page",
    turnaround: "Same Day (1 - 2 Hours)",
    features: [
      "Ultra-Sharp 2400 DPI Production Laser Press",
      "Wide Paper Range: 80 GSM Bond to 350 GSM Heavy Art Card",
      "Glossy, Matte, and Uncoated Textured Sheet Finishes",
      "Lamination, Folding, Creasing & Binding Services Included",
    ],
    specs: [
      { label: "Sheet Sizes", value: "A4, A3, 12x18 inches (Super A3), Custom" },
      { label: "Print Speed", value: "Over 80 Pages Per Minute Full Color" },
      { label: "Paper Weights", value: "80 GSM, 130 GSM, 170 GSM, 250 GSM, 350 GSM" },
      { label: "Turnaround", value: "Instant 1-hour counter delivery in Noorpur" },
    ],
    faqs: [
      { q: "Can I print just 10 or 20 copies?", a: "Yes, digital printing has no minimum order requirement, perfect for short runs." },
    ],
  },
  {
    slug: "offset-printing",
    title: "Ofset Printing Press",
    badge: "Bulk Commercial Press",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#fef3c7]",
    tagline: "Wholesale Bill Books, Pamphlets, Letterheads & Envelopes",
    description:
      "The most economical choice for high-volume commercial printing. Our 4-color Heidelberg offset press prints thousands of bill books, handbills, promotional pamphlets, corporate letterheads, and customized envelopes at unbeatable per-piece rates.",
    startingPrice: "₹0.60 / Pamphlet | ₹35 / Bill Book",
    turnaround: "2 - 3 Days",
    features: [
      "4-Color Commercial Offset Press with Consistent Color Density",
      "Numbered NCR Carbonless Duplicate & Triplicate Bill Books",
      "Single-Color & Multi-Color Newspaper Inserts / Pamphlets",
      "Executive Bond Letterheads & Peel-and-Seal Envelopes",
    ],
    specs: [
      { label: "Press Types", value: "4-Color Heidelberg Offset Press, Single Color Web Offset" },
      { label: "Minimum Run", value: "1,000 to 100,000+ copies" },
      { label: "Paper Grades", value: "Maplitho, Natural Shade, Art Paper, NCR Carbonless" },
      { label: "Numbering", value: "Automatic red ink sequential numbering on bill books" },
    ],
    faqs: [
      { q: "Do you make GST invoice bill books?", a: "Yes, we print customized GST invoice books with your company header, terms, and bank details." },
    ],
  },
  {
    slug: "logo-design-printing",
    title: "Logo Design & Printing",
    badge: "Creative Identity & Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#fae8ff]",
    tagline: "Modern Custom Logo Design & Complete Brand Stationary",
    description:
      "Give your business a distinctive brand image that inspires confidence. Our professional graphic designers create vector logos from scratch, along with complete brand stationary packs, packaging layouts, and digital guidelines.",
    startingPrice: "₹999 / Logo Concept",
    turnaround: "24 - 48 Hours",
    features: [
      "100% Unique Vector Concepts tailored to your industry",
      "Full Copyright Transfer & Vector Source Files (AI, EPS, CDR, PNG, PDF)",
      "Ready-to-Print Files formatted for flex, signage, and screen printing",
      "Stationery Mockups (Visiting Card, Letterhead, Social DP)",
    ],
    specs: [
      { label: "Deliverables", value: "Vector AI, CorelDraw CDR, High-Res PNG, PDF, JPG" },
      { label: "Revisions", value: "Unlimited minor revisions until complete satisfaction" },
      { label: "Turnaround", value: "First 3 initial concepts delivered within 24 hours" },
      { label: "Print Ready", value: "Pre-flighted CMYK color profiles ready for press" },
    ],
    faqs: [
      { q: "Will I get CorelDraw CDR files for local flex printing?", a: "Yes, we provide both Adobe Illustrator and CorelDraw CDR vector files." },
    ],
  },
  {
    slug: "t-shirt-printing",
    title: "T-Shirt Printing",
    badge: "Custom Merch & Uniforms",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
    bgColor: "bg-[#e8edf2]",
    tagline: "Custom Collar Polos, Round Necks, Hoodies & School Uniforms",
    description:
      "Stand out in custom apparel. We print premium custom cotton and dri-fit polo t-shirts, promotional round-necks, corporate jerseys, and school uniforms using high-definition direct-to-film (DTF), screen printing, and rubber printing.",
    startingPrice: "₹180 / T-Shirt",
    turnaround: "24 - 48 Hours",
    features: [
      "180-240 GSM 100% Bio-Wash Combed Cotton & Dri-Fit Polyester",
      "Vivid DTF & Screen Prints that never peel or wash off",
      "Collar Polos, Round Necks, Hoodies & Windcheaters",
      "Sizes from Kids to 3XL with individual polybag packaging",
    ],
    specs: [
      { label: "Print Methods", value: "DTF (Direct to Film), Screen Printing, Vinyl Transfer, Embroidery" },
      { label: "Fabric Stock", value: "100% Cotton, Polyester Jersey, Matty Fabric" },
      { label: "Print Locations", value: "Left Chest, Full Front, Back, Both Sleeves" },
      { label: "Wash Durability", value: "Tested for 50+ machine washes" },
    ],
    faqs: [
      { q: "Can you print individual names and numbers on cricket jerseys?", a: "Yes, we customize jerseys with individual player names and jersey numbers." },
    ],
  },
];

export const ALL_SERVICES: ServiceDetail[] = [...SERVICES_CATALOG, ...ADDITIONAL_SERVICES];

export const SERVICE_ALIASES: Record<string, string> = {
  "ofset-printing": "offset-printing",
  "offset-printing-press": "offset-printing",
  "design-services": "logo-design-printing",
  "logo-design": "logo-design-printing",
  "custom-apparel": "t-shirt-printing",
  "tshirt-printing": "t-shirt-printing",
  "business-cards": "business-card-printing",
  "visiting-card": "visiting-cards",
  "wedding-card": "wedding-cards",
  "flex-printing": "flex-banner-printing",
  "glow-sign-boards": "led-glow-sign-boards",
  "led-signage": "led-glow-sign-boards",
};

export function findServiceBySlug(slug: string): ServiceDetail | undefined {
  const normalized = SERVICE_ALIASES[slug] || slug;
  return ALL_SERVICES.find((s) => s.slug === normalized || s.slug === slug);
}
