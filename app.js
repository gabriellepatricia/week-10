(function () {
  "use strict";

  const CART_KEY = "ss_cart_v1";
  const ORDERS_KEY = "ss_orders_v1";
  const CHANNEL_NAME = "sushi_squishy_realtime_v1";

  const daftarSquishy = [
  {
    "id": "squishy-alpukat",
    "nama": "Squishy Alpukat",
    "gambar": "gambarsquishy/Avocado_squishy_toy_photography_d2a5dbc1.jpg",
    "badge": "Baru",
    "badgeClass": "badge-green",
    "kategori": "Fruit Series",
    "deskripsi": "Desain alpukat gemas dengan tekstur lembut dan slow rising.",
    "status": "Tersedia",
    "hargaNum": 38000,
    "harga": "Rp 38.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-axolotl-pink",
    "nama": "Squishy Axolotl Pink",
    "gambar": "gambarsquishy/Axolotl_squishy_toy_product_5533d191.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Animal Series",
    "deskripsi": "Karakter axolotl lucu dengan warna pastel yang menggemaskan.",
    "status": "Tersedia",
    "hargaNum": 42000,
    "harga": "Rp 42.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-bayi-dinosaurus",
    "nama": "Squishy Bayi Dinosaurus",
    "gambar": "gambarsquishy/Baby_dinosaur_squishy_toy_12ea8140.jpg",
    "badge": "Favorit",
    "badgeClass": "badge-green",
    "kategori": "Animal Series",
    "deskripsi": "Dino mungil super empuk, cocok untuk koleksi meja belajar.",
    "status": "Tersedia",
    "hargaNum": 36000,
    "harga": "Rp 36.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-boba-tea-cup",
    "nama": "Squishy Boba Tea Cup",
    "gambar": "gambarsquishy/Boba_tea_cup_squishy_toy_25ef1b5c.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Drink Series",
    "deskripsi": "Aroma brown sugar manis dengan detail mutiara boba di dalam cup.",
    "status": "Tersedia",
    "hargaNum": 40000,
    "harga": "Rp 40.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-kelinci-mochi",
    "nama": "Squishy Kelinci Mochi",
    "gambar": "gambarsquishy/Bunny_rabbit_squishy_toy_b32a8201.jpg",
    "badge": "Slow Rising",
    "badgeClass": "badge-blue",
    "kategori": "Animal Series",
    "deskripsi": "Kelinci bertelinga panjang yang lembut dan nyaman digenggam.",
    "status": "Tersedia",
    "hargaNum": 32000,
    "harga": "Rp 32.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-capybara-santai",
    "nama": "Squishy Capybara Santai",
    "gambar": "gambarsquishy/Capybara_squishy_toy_catalog_pho_8589dbdf.jpg",
    "badge": "Viral",
    "badgeClass": "",
    "kategori": "Animal Series",
    "deskripsi": "Karakter capybara populer dengan ekspresi kalem yang menggemaskan.",
    "status": "Stok Terbatas",
    "hargaNum": 45000,
    "harga": "Rp 45.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-tapak-kucing-cat-paw",
    "nama": "Squishy Tapak Kucing (Cat Paw)",
    "gambar": "gambarsquishy/Cat_paw_squishy_toy_ce3d6a1c.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Mochi Series",
    "deskripsi": "Bentuk telapak kaki kucing empuk dengan bantalan pink lembut.",
    "status": "Tersedia",
    "hargaNum": 28000,
    "harga": "Rp 28.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-croissant-butter",
    "nama": "Squishy Croissant Butter",
    "gambar": "gambarsquishy/Croissant_squishy_toy_photography_6a9c396e.jpg",
    "badge": "Wangi Roti",
    "badgeClass": "badge-yellow",
    "kategori": "Bakery Series",
    "deskripsi": "Detail lipatan roti realistis dengan aroma mentega hangat.",
    "status": "Tersedia",
    "hargaNum": 35000,
    "harga": "Rp 35.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-cupcake-cream",
    "nama": "Squishy Cupcake Cream",
    "gambar": "gambarsquishy/Cupcake_squishy_toy_1d23a70a.jpg",
    "badge": "Favorit",
    "badgeClass": "",
    "kategori": "Dessert Series",
    "deskripsi": "Kue mangkuk manis dengan topping krim lembut dan wangi vanilla.",
    "status": "Tersedia",
    "hargaNum": 34000,
    "harga": "Rp 34.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-donat-sprinkles",
    "nama": "Squishy Donat Sprinkles",
    "gambar": "gambarsquishy/Donut_squishy_toy_with_sprinkles_f5c7f606.jpg",
    "badge": "Wangi Roti",
    "badgeClass": "badge-yellow",
    "kategori": "Bakery Series",
    "deskripsi": "Donat empuk berhias taburan meses warna-warni yang ceria.",
    "status": "Tersedia",
    "hargaNum": 33000,
    "harga": "Rp 33.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-kentang-goreng",
    "nama": "Squishy Kentang Goreng",
    "gambar": "gambarsquishy/French_fries_squishy_toy_994d7c55.jpg",
    "badge": "Unik",
    "badgeClass": "badge-yellow",
    "kategori": "Food Series",
    "deskripsi": "Bentuk kentang goreng dalam kemasan merah, empuk saat diremas.",
    "status": "Tersedia",
    "hargaNum": 37000,
    "harga": "Rp 37.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-gummy-bear",
    "nama": "Squishy Gummy Bear",
    "gambar": "gambarsquishy/Gummy_bear_squishy_toy_82160451.jpg",
    "badge": "Slow Rising",
    "badgeClass": "badge-blue",
    "kategori": "Candy Series",
    "deskripsi": "Beruang kenyal dengan warna cerah dan aroma buah manis.",
    "status": "Tersedia",
    "hargaNum": 26000,
    "harga": "Rp 26.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-hamster-chubby",
    "nama": "Squishy Hamster Chubby",
    "gambar": "gambarsquishy/Hamster_squishy_toy_photography_b5abec03.jpg",
    "badge": "Favorit",
    "badgeClass": "",
    "kategori": "Animal Series",
    "deskripsi": "Hamster pipi gembul yang sangat lembut dan pas di telapak tangan.",
    "status": "Tersedia",
    "hargaNum": 30000,
    "harga": "Rp 30.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-es-krim-cone",
    "nama": "Squishy Es Krim Cone",
    "gambar": "gambarsquishy/Ice_cream_cone_squishy_toy_6d4ea96e.jpg",
    "badge": "Favorit",
    "badgeClass": "",
    "kategori": "Dessert Series",
    "deskripsi": "Es krim cone manis dengan tekstur busa lembut dan wangi susu.",
    "status": "Tersedia",
    "hargaNum": 42000,
    "harga": "Rp 42.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-lemon-kuning",
    "nama": "Squishy Lemon Kuning",
    "gambar": "gambarsquishy/Lemon_squishy_toy_photography_d00b6cce.jpg",
    "badge": "Segar",
    "badgeClass": "badge-yellow",
    "kategori": "Fruit Series",
    "deskripsi": "Buah lemon kuning cerah dengan aroma sitrus yang menyegarkan.",
    "status": "Tersedia",
    "hargaNum": 29000,
    "harga": "Rp 29.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-mangga-manis",
    "nama": "Squishy Mangga Manis",
    "gambar": "gambarsquishy/Mango_squishy_toy_723939e3.jpg",
    "badge": "Segar",
    "badgeClass": "badge-yellow",
    "kategori": "Fruit Series",
    "deskripsi": "Bentuk buah mangga jumbo dengan wangi mangga tropis yang khas.",
    "status": "Tersedia",
    "hargaNum": 36000,
    "harga": "Rp 36.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-gurita-mini",
    "nama": "Squishy Gurita Mini",
    "gambar": "gambarsquishy/Octopus_squishy_toy_afd26344.jpg",
    "badge": "Slow Rising",
    "badgeClass": "badge-blue",
    "kategori": "Animal Series",
    "deskripsi": "Gurita imut dengan tentakel empuk dan ekspresi wajah ceria.",
    "status": "Tersedia",
    "hargaNum": 27000,
    "harga": "Rp 27.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-pancake-sirup-maple",
    "nama": "Squishy Pancake Sirup Maple",
    "gambar": "gambarsquishy/Pancake_stack_squishy_toy_7a637f4d.jpg",
    "badge": "Wangi Roti",
    "badgeClass": "badge-yellow",
    "kategori": "Bakery Series",
    "deskripsi": "Tumpukan pancake lembut dengan lelehan mentega dan sirup manis.",
    "status": "Tersedia",
    "hargaNum": 44000,
    "harga": "Rp 44.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-bakpao-peach",
    "nama": "Squishy Bakpao Peach",
    "gambar": "gambarsquishy/Peach_bao_bun_squishy_toy_1a42567c.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Bakery Series",
    "deskripsi": "Bakpao lembut berbentuk buah persik, super slow rising.",
    "status": "Tersedia",
    "hargaNum": 32000,
    "harga": "Rp 32.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-buah-peach",
    "nama": "Squishy Buah Peach",
    "gambar": "gambarsquishy/Peach_squishy_toy_photography_b8a12083.jpg",
    "badge": "Favorit",
    "badgeClass": "",
    "kategori": "Fruit Series",
    "deskripsi": "Buah persik pink gradasi dengan wangi peach yang lembut.",
    "status": "Tersedia",
    "hargaNum": 35000,
    "harga": "Rp 35.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-penguin-gemas",
    "nama": "Squishy Penguin Gemas",
    "gambar": "gambarsquishy/Penguin_squishy_toy_photography_8f6f3657.jpg",
    "badge": "Slow Rising",
    "badgeClass": "badge-blue",
    "kategori": "Animal Series",
    "deskripsi": "Penguin bulat menggemaskan yang kembali ke bentuk semula perlahan.",
    "status": "Tersedia",
    "hargaNum": 31000,
    "harga": "Rp 31.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-nanas-tropis",
    "nama": "Squishy Nanas Tropis",
    "gambar": "gambarsquishy/Pineapple_squishy_toy_catalog_ph_32234aff.jpg",
    "badge": "Segar",
    "badgeClass": "badge-yellow",
    "kategori": "Fruit Series",
    "deskripsi": "Detail kulit nanas unik dan empuk dengan aroma buah segar.",
    "status": "Tersedia",
    "hargaNum": 39000,
    "harga": "Rp 39.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-shiba-inu",
    "nama": "Squishy Shiba Inu",
    "gambar": "gambarsquishy/Shiba_Inu_squishy_toy_9aba46c6.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Animal Series",
    "deskripsi": "Anjing Shiba Inu lucu dengan tekstur empuk dan detail menggemaskan.",
    "status": "Stok Terbatas",
    "hargaNum": 40000,
    "harga": "Rp 40.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-kucing-tidur",
    "nama": "Squishy Kucing Tidur",
    "gambar": "gambarsquishy/Sleeping_kitten_squishy_toy_d7e95ca5.jpg",
    "badge": "Slow Rising",
    "badgeClass": "badge-blue",
    "kategori": "Mochi Series",
    "deskripsi": "Anak kucing tertidur pulas dengan tekstur lembut seperti mochi.",
    "status": "Tersedia",
    "hargaNum": 30000,
    "harga": "Rp 30.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-wajah-kawaii",
    "nama": "Squishy Wajah Kawaii",
    "gambar": "gambarsquishy/Squishy_toy_with_cute_face_e399aa55.jpg",
    "badge": "Favorit",
    "badgeClass": "",
    "kategori": "Kawaii Series",
    "deskripsi": "Squishy bulat dengan ekspresi wajah imut yang bikin gemas.",
    "status": "Tersedia",
    "hargaNum": 25000,
    "harga": "Rp 25.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-stroberi-merah",
    "nama": "Squishy Stroberi Merah",
    "gambar": "gambarsquishy/Strawberry_squishy_toy_photographed_71cc4184.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Fruit Series",
    "deskripsi": "Buah stroberi jumbo berwarna cerah dengan wangi stroberi manis.",
    "status": "Tersedia",
    "hargaNum": 34000,
    "harga": "Rp 34.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-roti-tawar-jumbo",
    "nama": "Squishy Roti Tawar Jumbo",
    "gambar": "gambarsquishy/Toast_bread_squishy_toy_photography_e2120426.jpg",
    "badge": "Wangi Roti",
    "badgeClass": "badge-yellow",
    "kategori": "Bakery Series",
    "deskripsi": "Roti tawar panggang super empuk dan beraroma roti segar.",
    "status": "Tersedia",
    "hargaNum": 45000,
    "harga": "Rp 45.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-ceri-kembar",
    "nama": "Squishy Ceri Kembar",
    "gambar": "gambarsquishy/Twin_cherry_squishy_toy_1e486dbe.jpg",
    "badge": "Baru",
    "badgeClass": "badge-green",
    "kategori": "Fruit Series",
    "deskripsi": "Dua buah ceri merah mengkilap yang menyatu dengan tangkai lucu.",
    "status": "Tersedia",
    "hargaNum": 32000,
    "harga": "Rp 32.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-unicorn-pastel",
    "nama": "Squishy Unicorn Pastel",
    "gambar": "gambarsquishy/Unicorn_squishy_toy_for_catalog_d2a6d18a.jpg",
    "badge": "Best Seller",
    "badgeClass": "",
    "kategori": "Fantasy Series",
    "deskripsi": "Unicorn warna pelangi lembut dengan tanduk emas yang menawan.",
    "status": "Stok Terbatas",
    "hargaNum": 48000,
    "harga": "Rp 48.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-potongan-semangka",
    "nama": "Squishy Potongan Semangka",
    "gambar": "gambarsquishy/Watermelon_slice_squishy_toy_13bcd526.jpg",
    "badge": "Segar",
    "badgeClass": "badge-green",
    "kategori": "Fruit Series",
    "deskripsi": "Irisan semangka merah segar lengkap dengan detail biji hitamnya.",
    "status": "Tersedia",
    "hargaNum": 33000,
    "harga": "Rp 33.000",
    "satuan": "/ pcs"
  },
  {
    "id": "squishy-bebek-kuning",
    "nama": "Squishy Bebek Kuning",
    "gambar": "gambarsquishy/Yellow_duck_squishy_toy_0c9a6ee2.jpg",
    "badge": "Favorit",
    "badgeClass": "badge-yellow",
    "kategori": "Animal Series",
    "deskripsi": "Bebek kuning klasik yang kenyal, empuk, dan menggemaskan.",
    "status": "Tersedia",
    "hargaNum": 28000,
    "harga": "Rp 28.000",
    "satuan": "/ pcs"
  }
];

  const SHIPPING_OPTIONS = {
    regular: { label: "Kurir Reguler + Bubble Wrap", cost: 15000 },
    express: { label: "Kurir Instan / Same Day (Bandung)", cost: 25000 },
    pickup: { label: "Ambil di Toko (Jl. Pelangi Manis No. 18, Bandung)", cost: 0 }
  };

  let channel = null;
  if (typeof BroadcastChannel !== "undefined") {
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
    } catch (_) {
      channel = null;
    }
  }

  function broadcastEvent(type, payload) {
    if (channel) {
      try {
        channel.postMessage({ type, payload, ts: Date.now() });
      } catch (_) {}
    }
  }

  function onRealtimeUpdate(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === ORDERS_KEY || e.key === CART_KEY) {
        callback({ source: "storage", key: e.key });
      }
    });
    if (channel) {
      channel.addEventListener("message", function (e) {
        callback({ source: "broadcast", data: e.data });
      });
    }
  }

  function formatRupiah(amount) {
    const num = Number(amount) || 0;
    return "Rp " + num.toLocaleString("id-ID");
  }

  function formatWaktu(isoString) {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Cart API
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    broadcastEvent("CART_UPDATED", { count: getCartCount() });
    updateNavBadge();
  }

  function getProductById(id) {
    return daftarSquishy.find(function (item) {
      return item.id === id;
    });
  }

  function addToCart(productId, qty) {
    const product = getProductById(productId);
    if (!product) return null;
    const addQty = Math.max(1, parseInt(qty, 10) || 1);
    const cart = getCart();
    const existing = cart.find(function (c) {
      return c.id === productId;
    });
    if (existing) {
      existing.qty = Math.min(99, existing.qty + addQty);
    } else {
      cart.push({
        id: product.id,
        nama: product.nama,
        gambar: product.gambar,
        kategori: product.kategori,
        satuan: product.satuan,
        hargaNum: product.hargaNum,
        qty: addQty
      });
    }
    saveCart(cart);
    return cart;
  }

  function updateCartQty(productId, newQty) {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty < 1) {
      return removeFromCart(productId);
    }
    const cart = getCart();
    const item = cart.find(function (c) {
      return c.id === productId;
    });
    if (item) {
      item.qty = Math.min(99, qty);
      saveCart(cart);
    }
    return cart;
  }

  function removeFromCart(productId) {
    const cart = getCart().filter(function (c) {
      return c.id !== productId;
    });
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) {
      return sum + (parseInt(item.qty, 10) || 0);
    }, 0);
  }

  function getCartTotals(shippingCost) {
    const cart = getCart();
    const subtotal = cart.reduce(function (sum, item) {
      return sum + item.hargaNum * item.qty;
    }, 0);
    const ongkir = cart.length > 0 ? (typeof shippingCost === "number" ? shippingCost : 15000) : 0;
    const grandTotal = subtotal + ongkir;
    return { subtotal, ongkir, grandTotal };
  }

  // Orders API
  function getOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }

  function getOrderById(orderId) {
    return getOrders().find(function (o) {
      return o.id === orderId;
    });
  }

  function generateOrderId() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return "INV-SS-" + y + m + d + "-" + rand;
  }

  function createOrder(customer, shippingKey) {
    const cart = getCart();
    if (cart.length === 0) return null;

    const shipInfo = SHIPPING_OPTIONS[shippingKey] || SHIPPING_OPTIONS.regular;
    const totals = getCartTotals(shipInfo.cost);
    const orderId = generateOrderId();
    const nowIso = new Date().toISOString();

    const order = {
      id: orderId,
      createdAt: nowIso,
      paidAt: null,
      rejectedAt: null,
      status: "PENDING", // PENDING | PAID | REJECTED
      paymentMethod: "QRIS",
      qrisRef: "QRIS" + Date.now().toString().slice(-8),
      approvalRef: null,
      shippingMethod: shipInfo.label,
      customer: {
        nama: customer.nama,
        telepon: customer.telepon,
        alamat: customer.alamat,
        kota: customer.kota,
        catatan: customer.catatan || ""
      },
      items: cart.map(function (c) {
        return {
          id: c.id,
          nama: c.nama,
          gambar: c.gambar,
          kategori: c.kategori,
          satuan: c.satuan,
          hargaNum: c.hargaNum,
          qty: c.qty,
          subtotal: c.hargaNum * c.qty
        };
      }),
      subtotal: totals.subtotal,
      ongkir: totals.ongkir,
      grandTotal: totals.grandTotal
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    broadcastEvent("ORDER_CREATED", { orderId: order.id });
    return order;
  }

  function updateOrderStatus(orderId, newStatus) {
    const orders = getOrders();
    const order = orders.find(function (o) {
      return o.id === orderId;
    });
    if (!order) return null;

    order.status = newStatus;
    if (newStatus === "PAID") {
      order.paidAt = new Date().toISOString();
      order.approvalRef = "APR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    } else if (newStatus === "REJECTED") {
      order.rejectedAt = new Date().toISOString();
    }
    saveOrders(orders);
    broadcastEvent("ORDER_STATUS_CHANGED", { orderId: order.id, status: newStatus });
    return order;
  }

  function renderStatusBadge(status) {
    if (status === "PAID") {
      return '<span class="status-badge status-paid">&#10003; Paid / Lunas</span>';
    }
    if (status === "REJECTED") {
      return '<span class="status-badge status-rejected">&#10005; Ditolak</span>';
    }
    return '<span class="status-badge status-pending"><span class="pulse-dot"></span> Menunggu Bayar</span>';
  }

  // Deterministic Dummy QRIS SVG Generator (Pure JS, zero libraries)
  function generateDummyQrisSvg(seedText) {
    const size = 25;
    const cell = 8;
    const quiet = 16;
    const totalPx = size * cell + quiet * 2;

    let hash = 2166136261;
    const text = String(seedText || "SUSHI-SQUISHY-QRIS");
    for (let i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    function nextBit() {
      hash ^= hash << 13;
      hash ^= hash >>> 17;
      hash ^= hash << 5;
      return (hash >>> 0) % 2 === 1;
    }

    const grid = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });
    const reserved = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });

    function placeFinder(r0, c0) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
          reserved[rr][cc] = true;
          const inOuter = r >= 0 && r <= 6 && c >= 0 && c <= 6;
          const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const inInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          grid[rr][cc] = inOuter && (onBorder || inInner);
        }
      }
    }

    function placeAlignment(r0, c0) {
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          reserved[rr][cc] = true;
          grid[rr][cc] = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        }
      }
    }

    placeFinder(0, 0);
    placeFinder(0, size - 7);
    placeFinder(size - 7, 0);
    placeAlignment(size - 7, size - 7);

    for (let i = 8; i < size - 8; i++) {
      reserved[6][i] = true;
      reserved[i][6] = true;
      grid[6][i] = i % 2 === 0;
      grid[i][6] = i % 2 === 0;
    }

    for (let r = 10; r <= 14; r++) {
      for (let c = 10; c <= 14; c++) {
        reserved[r][c] = true;
        grid[r][c] = false;
      }
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!reserved[r][c]) {
          grid[r][c] = nextBit();
        }
      }
    }

    let rects = "";
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          const x = quiet + c * cell;
          const y = quiet + r * cell;
          rects += '<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" fill="#3d3137"/>';
        }
      }
    }

    const cx = totalPx / 2;
    const cy = totalPx / 2;

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + totalPx + '" height="' + totalPx + '" viewBox="0 0 ' + totalPx + " " + totalPx + '" role="img" aria-label="Kode QRIS Simulasi">' +
      '<rect width="100%" height="100%" fill="#ffffff"/>' +
      rects +
      '<rect x="' + (cx - 24) + '" y="' + (cy - 13) + '" width="48" height="26" rx="6" fill="#fff9fb" stroke="#ff5d8f" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="11" font-weight="800" fill="#d6336c">QRIS</text>' +
      "</svg>"
    );
  }

  // Shared Pastel Header matching Sushi Squishy design
  function renderHeader(activePage) {
    const holder = document.getElementById("site-header");
    if (!holder) return;

    const count = getCartCount();
    holder.innerHTML =
      '<header class="header">' +
      '  <div class="container header-content">' +
      '    <a href="index.html" class="logo">' +
      '      <span class="logo-icon">🍥</span>' +
      '      <div>' +
      '        <h1>Sushi Squishy</h1>' +
      '        <p>Good Quality, Cute &amp; Slow Rising Squishy</p>' +
      '      </div>' +
      '    </a>' +
      '    <nav class="header-nav" aria-label="Navigasi Utama">' +
      '      <a href="index.html" class="nav-pill ' + (activePage === "katalog" ? "active" : "") + '">Katalog</a>' +
      '      <a href="cart.html" class="nav-pill ' + (activePage === "cart" ? "active" : "") + '">Keranjang <span class="cart-badge" id="nav-cart-count">' + count + '</span></a>' +
      '      <a href="history.html" class="nav-pill ' + (activePage === "history" ? "active" : "") + '">Riwayat</a>' +
      '      <a href="qris-approve.html" target="_blank" rel="noopener" class="nav-pill sim-pill" title="Buka Simulator Approval QRIS di tab baru">Simulator QRIS &#8599;</a>' +
      '    </nav>' +
      '  </div>' +
      '</header>';
  }

  function updateNavBadge() {
    const badge = document.getElementById("nav-cart-count");
    if (badge) {
      badge.textContent = String(getCartCount());
    }
  }

  // Pastel Toast helper
  let toastTimer = null;
  function showToast(message) {
    let el = document.getElementById("ss-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ss-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  }

  onRealtimeUpdate(function () {
    updateNavBadge();
  });

  window.SSStore = {
    daftarSquishy: daftarSquishy,
    SHIPPING_OPTIONS: SHIPPING_OPTIONS,
    formatRupiah: formatRupiah,
    formatWaktu: formatWaktu,
    escapeHtml: escapeHtml,
    getCart: getCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotals: getCartTotals,
    getOrders: getOrders,
    getOrderById: getOrderById,
    createOrder: createOrder,
    updateOrderStatus: updateOrderStatus,
    renderStatusBadge: renderStatusBadge,
    generateDummyQrisSvg: generateDummyQrisSvg,
    renderHeader: renderHeader,
    updateNavBadge: updateNavBadge,
    showToast: showToast,
    onRealtimeUpdate: onRealtimeUpdate
  };
})();
