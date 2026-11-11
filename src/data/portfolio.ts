import type { PortofolioItem } from '../types/content';

export const portfolioItems: PortofolioItem[] = [
  {
    "id": "PRJ-014",
    "kategori": "Economic Analytics & BI",
    "warnaKategori": "blue",
    "judul": "Indonesia Economic Sentiment.",
    "seoTitle": "Analisis Sentimen Bisnis & Konsumen Indonesia | ITB–ITK BPS",
    "klien": "Badan Pusat Statistik (BPS)",
    "labelKlien": "Sumber data:",
    "highlight": "Analisis 80 kuartal sentimen bisnis dan konsumen Indonesia.",
    "deskripsi": "Dashboard interaktif untuk membandingkan Indeks Tendensi Bisnis (ITB) dan Indeks Tendensi Konsumen (ITK), membaca divergensi sentimen, serta menelusuri pola ekonomi periode 2000 Q2–2020 Q1.",
    "fitur": [
      "Tren ITB–ITK dan filter periode/kuartal",
      "Peta empat kuadran sentimen ekonomi",
      "Profil statistik, korelasi & divergensi",
      "Tabel master data dan ekspor CSV"
    ],
    "metrikNilai": "80 Kuartal",
    "metrikLabel": "Observasi historis · 2000 Q2–2020 Q1",
    "linkGambar": "./assets/prj_img/indonesia-economic-sentiment.webp",
    "linkProject": "https://iamikhsank.github.io/indonesia-economic-sentiment-analysis/",
    "linkRepo": "https://github.com/iamikhsank/indonesia-economic-sentiment-analysis",
    "techStack": [
      "React 19",
      "TypeScript",
      "Python",
      "Recharts"
    ],
    "caseStudy": {
      "seoTitle": "Analisis Sentimen Ekonomi Indonesia — ITB & ITK",
      "problem": "Indikator kepercayaan bisnis dan konsumen dapat bergerak berbeda. Data historis perlu disajikan secara interaktif agar tren, volatilitas, dan divergensinya mudah dibandingkan.",
      "data": "80 observasi kuartalan ITB dan ITK periode 2000 Q2–2020 Q1, bersumber dari data publik Badan Pusat Statistik (BPS).",
      "analysis": "Validasi data dengan Python/Pandas, perhitungan rata-rata dan standar deviasi, korelasi Pearson, selisih ITB–ITK, serta klasifikasi empat kuadran terhadap level netral 100.",
      "dashboard": "Dashboard React/TypeScript dengan tren dua indeks, peta kuadran, filter periode dan kuartal, profil statistik, insight ringkas, serta tabel data dengan ekspor CSV.",
      "insight": "Dalam dataset proyek, rata-rata ITB 106,70 dan ITK 108,09. ITK lebih volatil; korelasi ITB–ITK sekitar 0,369 menunjukkan hubungan positif yang tidak selalu searah. Temuan ini menggambarkan periode historis, bukan kondisi ekonomi terkini.",
      "businessImpact": "Mempermudah eksplorasi data ekonomi historis dan komunikasi temuan statistik melalui dashboard interaktif yang bisa diakses publik, dengan alur analisis yang tersedia di repository proyek."
    }
  },
  {
    id: "PRJ-004",
    kategori: "Enterprise BI & Govt",
    warnaKategori: "blue",
    judul: "BI-BEGR Telemetry.",
    seoTitle: "Enterprise Culture Maturity Telemetry | Government Business Intelligence Case Study",
    klien: "Bank Indonesia (Kantor Pusat & Perwakilan)",
    highlight: "Zero-TCO Enterprise Culture Maturity Index Dashboard on Google Workspace.",
    deskripsi: "Platform visualisasi telemetri budaya kerja tingkat tinggi yang dioperasikan secara serverless di atas ekosistem Google Workspace. Memantau tingkat kematangan budaya (Culture Maturity Level - CML) di seluruh Satuan Kerja (Satker) Bank Indonesia tanpa sewa server.",
    fitur: [
      "Tracking Kematangan Budaya (CML 360°) Seluruh Satker",
      "Monitoring Championship Program & EVP",
      "Export Laporan Formal Otomatis ke PDF A4",
      "Single Source of Truth Google Sheets Engine"
    ],
    metrikNilai: "100% Zero Cost",
    metrikLabel: "Penghematan Biaya Server BI",
    linkGambar: "./assets/prj_img/BI_BEGR.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "TypeScript"],
    caseStudy: {
      seoTitle: "Enterprise Culture Maturity Telemetry | Government Business Intelligence Case Study",
      problem: "Bank Indonesia memerlukan pemantauan tingkat kematangan budaya kerja (Culture Maturity Level - CML) secara terpusat di seluruh Satuan Kerja (Satker) tanpa membebankan anggaran sewa server tahunan yang tinggi.",
      data: "Konsolidasi log survei berkala, laporan pelaksanaan program championship, dan data keterlibatan pegawai dari puluhan Satker ke dalam master Google Sheets terstruktur via Apps Script.",
      analysis: "Kalkulasi indeks CML 360° menggunakan skoring berbobot untuk setiap dimensi budaya, pemetaan maturity tier (Stage 1-5), dan analisis komparatif antar-Satker.",
      dashboard: "Antarmuka visual berbasis React & Apps Script dengan heatmap tingkat kematangan Satker, filter wilayah, serta modul ekspor laporan formal PDF A4 sekali klik.",
      insight: "Teridentifikasi bahwa 18% Satker memerlukan intervensi langsung pada pilar inovasi digital, sementara Satker wilayah timur menunjukkan adopsi program championship tercepat.",
      businessImpact: "Menerapkan sistem monitoring real-time berstandar enterprise dengan 100% Zero Server Cost (TCO Rp 0/bulan), menghemat ratusan juta rupiah biaya Lisensi BI tahunan."
    }
  },
  {
    id: "PRJ-005",
    kategori: "Supply Chain & Inventory ERP",
    warnaKategori: "emerald",
    judul: "StockFlow Analytics Engine.",
    seoTitle: "StockFlow Analytics Engine | Supply Chain ERP & Inventory BI Case Study",
    klien: "Enterprise Distributor & E-Commerce Merchant",
    highlight: "ABC-XYZ Pareto Matrix & Dynamic Safety Stock Engine on Google Sheets.",
    deskripsi: "Platform Business Intelligence & Supply Chain Optimization Engine berbasis Apps Script. Memecahkan masalah kebocoran omzet akibat kehabisan barang (stockout) dan penumpukan modal kerja akibat barang mati (dead stock) secara otomatis.",
    fitur: [
      "Analisis Matriks ABC-XYZ (Pareto 80/20 & Volatilitas Demand)",
      "Dynamic Reorder Point (ROP) & Safety Stock Estimator",
      "Lost Sales Calculator & Dead Stock Liquidation Hub",
      "Multi-Warehouse Governance & Stock Transfer Logging"
    ],
    metrikNilai: "0% Lost Sales",
    metrikLabel: "Optimasi Modal Kerja Gudang",
    linkGambar: "./assets/prj_img/StockflowERP.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Pure SVG Engine"],
    caseStudy: {
      seoTitle: "StockFlow Analytics Engine | Supply Chain ERP & Inventory BI Case Study",
      problem: "Kebocoran omzet akibat kehabisan stok (stockout) barang laris dan penumpukan modal kerja pada barang mati (dead stock) akibat estimasi reorder point secara manual di Excel.",
      data: "Pengolahan data transaksi penjualan bulanan, riwayat pengiriman supplier, lead time barang, dan log mutasi gudang.",
      analysis: "Implementasi Analisis Matriks ABC-XYZ (Prinsip Pareto 80/20 & Volatilitas Demand) serta kalkulasi otomatis Dynamic Reorder Point (ROP) & Safety Stock Estimator.",
      dashboard: "Dashboard visual interaktif dengan status indikator ketersediaan barang (Safe, Warning, Critical Out), modul penentuan jumlah pesanan ulang, dan fitur Dead Stock Liquidation Hub.",
      insight: "12% produk kategori A menyumbang 78% total omzet bisnis, namun memiliki tingkat kehabisan stok terbesar akibat periode pemesanan ulang yang kaku.",
      businessImpact: "Memangkas kecenderungan lost sales hingga 0%, mengoptimalkan perputaran modal kerja gudang hingga 35%, dan mempercepat pengambilan keputusan restock."
    }
  },
  {
    id: "PRJ-006",
    kategori: "Real Estate & Property ERP",
    warnaKategori: "purple",
    judul: "EstateManagement ERP.",
    seoTitle: "EstateManagement ERP | Real Estate Operations & Tenant Billing BI Case Study",
    klien: "Pengembang Kawasan Properti & Real Estate",
    highlight: "Interactive Visual Siteplan & Automated Tenant Billing on Google Sheets.",
    deskripsi: "Sistem ERP Properti Premium & Modular dengan visualisasi siteplan interaktif real-time, peta status unit properti, billing otomatis tagihan sewa/IPL, dan portal tenant mandiri.",
    fitur: [
      "Interactive Visual Siteplan Map (Status Unit Ready, Sold, Booked)",
      "Automated IPL & Rent Billing Generator (Invoice & PDF Drive)",
      "Tenant Portal Mandiri & Riwayat Pembayaran Tagihan",
      "Multi-Block Estate Occupancy & Revenue Analytics"
    ],
    metrikNilai: "98% On-time",
    metrikLabel: "Ketepatan Pembayaran Tagihan IPL",
    linkGambar: "./assets/prj_img/EstateManagement ERP.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Motion"],
    caseStudy: {
      seoTitle: "EstateManagement ERP | Real Estate Operations & Tenant Billing BI Case Study",
      problem: "Pengembang kawasan properti kesulitan memantau status okupansi unit di banyak blok serta mengalami keterlambatan penagihan IPL (Iuran Pengelolaan Lingkungan) dan sewa.",
      data: "Integrasi data master unit properti, peta koordinat blok, data penyewa/pemilik, serta riwayat pembayaran tagihan bulanan.",
      analysis: "Pemodelan rasio okupansi kawasan, analisis Aging Receivables tagihan IPL, dan estimasi arus kas masuk (Cash Inflow Projection).",
      dashboard: "Antarmuka Interactive Visual Siteplan Map dengan warna indikator status unit (Ready, Sold, Booked), generator tagihan otomatis PDF ke Google Drive, dan portal tenant.",
      insight: "Keterlambatan pembayaran IPL terbanyak terjadi akibat proses pengiriman invoice fisik manual yang lambat dan tanpa pengingat otomatis.",
      businessImpact: "Meningkatkan ketepatan waktu pembayaran tagihan IPL hingga 98%, menghemat waktu administrasi invoice hingga 85%, dan memberikan visibilitas okupansi 100% real-time."
    }
  },
  {
    id: "PRJ-007",
    kategori: "Enterprise Multichannel ERP",
    warnaKategori: "blue",
    judul: "Multichannel Commerce ERP.",
    seoTitle: "Multichannel Commerce ERP | E-Commerce Sales Integration BI Case Study",
    klien: "Modern Multi-Channel Merchants & E-Commerce Distributors",
    highlight: "Serverless E-Commerce Integration (Tokopedia, Shopee, Direct) on Google Sheets.",
    deskripsi: "Platform ERP Serverless yang mengonsolidasikan log transaksi, stok produk, dan ledger keuangan dari Tokopedia, Shopee, Facebook/Instagram Ads, dan Direct Store ke dalam satu database terpusat Google Sheets.",
    fitur: [
      "Multichannel Sales Order Consolidation & Sync",
      "Integrated Financial Ledger & Real-time Revenue Reporting",
      "Role-Based Access Control (RBAC) & Approval Workflows",
      "System-wide Diagnostic Monitoring & Idempotent Log Engine"
    ],
    metrikNilai: "5 Channel -> 1 Cockpit",
    metrikLabel: "Konsolidasi Data Real-time",
    linkGambar: "./assets/prj_img/Sales Analytics Cockpit.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "TypeScript"],
    caseStudy: {
      seoTitle: "Multichannel Commerce ERP | E-Commerce Sales Integration BI Case Study",
      problem: "Merchant e-commerce yang berjualan di Tokopedia, Shopee, TikTok Shop, dan toko fisik mengalami kesulitan merekap total omzet harian dan memantau persediaan barang lintas saluran.",
      data: "Ingesting data pesanan harian, biaya admin marketplace, stok produk, dan log transaksi dari 5 saluran penjualan berbeda.",
      analysis: "Konsolidasi ledger keuangan terpadu, kalkulasi Net Profit Margin setelah dipotong biaya platform marketplace, dan rekonsiliasi stok otomatis.",
      dashboard: "Kokpit eksekutif terintegrasi dengan chart tren omzet harian per channel, perbandingan profitabilitas produk, dan sistem alert stok kritis.",
      insight: "Saluran Shopee menyumbang volume pesanan terbanyak, namun Tokopedia menghasilkan Net Profit Margin tertinggi akibat struktur biaya promosi yang lebih efisien.",
      businessImpact: "Menyatu padukan 5 saluran penjualan ke dalam 1 kokpit terpadu, memangkas waktu konsolidasi laporan dari 2 hari menjadi kurang dari 5 menit."
    }
  },
  {
    id: "PRJ-008",
    kategori: "Financial Analytics & Market BI",
    warnaKategori: "emerald",
    judul: "Dynamic Sector Rotation.",
    seoTitle: "Dynamic Sector Rotation Engine | Financial Analytics & Market BI Case Study",
    klien: "Fund Managers, Research Analysts & Active Investors",
    highlight: "Real-time GICS Capital Rotation Detection & Momentum Signal Engine.",
    deskripsi: "Platform analisis rotasi modal makro-ekonomi antar 11 sektor GICS secara real-time. Mengubah data harga pasar mentah menjadi sinyal momentum transaksi dan analisis tren kontekstual.",
    fitur: [
      "Real-time Capital Rotation Tracking (11 GICS Sectors)",
      "Relative Strength & Momentum Rank Scoring Engine",
      "Interactive Recharts Visual Analytics (Cyclical vs Defensive)",
      "Automated Textual Market Signal & Risk Mitigation Insights"
    ],
    metrikNilai: "11 Sektor Real-time",
    metrikLabel: "Deteksi Sinyal Rotasi Modal",
    linkGambar: "./assets/prj_img/Dynamic Sector Rotation & Momentum Analytics.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Recharts"],
    caseStudy: {
      seoTitle: "Dynamic Sector Rotation Engine | Financial Analytics & Market BI Case Study",
      problem: "Investment manager dan analis pasar kesulitan melacak arah pergerakan modal makro-ekonomi antar 11 sektor GICS secara real-time untuk penyesuaian alokasi portofolio.",
      data: "Streaming data harga penutupan harian, volume transaksi, dan data indeks sektoral saham dari penyedia data pasar.",
      analysis: "Skoring momentum berbasis Relative Strength Index (RSI), pergerakan rata-rata (Moving Averages), dan pemetaan rotasi makro (Cyclical vs Defensive).",
      dashboard: "Visualisasi Recharts interaktif dengan matriks rotasi sektor, pemetaan ranking momentum, serta sinyal naratif otomatis mitigasi risiko.",
      insight: "Modal institusional terdeteksi mulai berpindah dari sektor teknologi menuju sektor energi 2 minggu sebelum pengumuman perubahan suku bunga pasar.",
      businessImpact: "Memberikan sinyal awal rotasi modal makro secara real-time, memungkinkan manajer investasi mengambil posisi defensif lebih cepat dan mengoptimalkan return portofolio."
    }
  },
  {
    id: "PRJ-009",
    kategori: "Operations Cockpit & CRM Workspace",
    warnaKategori: "purple",
    judul: "Analytics Workspace.",
    seoTitle: "Analytics Workspace | SaaS Operations & CRM Business Intelligence Case Study",
    klien: "SaaS Operations & Agency Workspace Management",
    highlight: "Unified Revenue Streams, CRM Channels & Operations Cockpit on Google Sheets.",
    deskripsi: "Platform business intelligence & operasi kerja tingkat lanjut yang mengonsolidasi aliran data pendapatan, log pesanan, tracking produk, saluran komunikasi CRM, dan kolaborasi tim ke dalam satu kokpit terpadu.",
    fitur: [
      "Unified Operations Cockpit & Revenue Stream Tracker",
      "Dynamic Comparison Engine (YoY Historical Growth Milestones)",
      "Integrated CRM & Member Collaboration Channels",
      "Frictionless Auth & Session-Mapped Google Sheets API Router"
    ],
    metrikNilai: "100% Unified",
    metrikLabel: "Konsolidasi Operations Cockpit",
    linkGambar: "./assets/prj_img/AnalyticsWorkspace.png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "TypeScript"],
    caseStudy: {
      seoTitle: "Analytics Workspace | SaaS Operations & CRM Business Intelligence Case Study",
      problem: "Perusahaan SaaS dan agensi menghadapi fragmentasi data operasi, di mana log penjualan, tiket dukungan CRM, dan performa tim berada di platform terpisah.",
      data: "Penggabungan aliran data pendapatan bulanan (MRR/ARR), tiket CRM pengguna, log pesanan layanan, dan metrik kolaborasi tim internal.",
      analysis: "Pemodelan pertumbuhan historis Year-over-Year (YoY), kalkulasi Customer Lifetime Value (CLV), dan skoring efisiensi operasional.",
      dashboard: "Kokpit operasi terpadu dengan perbandingan pencapaian milestone bisnis, pelacak status tiket CRM real-time, dan kontrol akses berbasis peran (RBAC).",
      insight: "Waktu penyelesaian tiket CRM berbanding lurus dengan tingkat perpanjangan berlangganan (renewal rate) klien enterprise.",
      businessImpact: "Memecahkan isolasi data (data silos) dengan efisiensi operasi 100% terpadu, mempercepat respons tim layanan hingga 40%."
    }
  },
  {
    id: "PRJ-010",
    kategori: "Healthcare & Supply Chain",
    warnaKategori: "emerald",
    judul: "MediCare Supply Engine.",
    seoTitle: "MediCare Supply Engine | Healthcare Consumables Logistics BI Case Study",
    klien: "Jaringan Rumah Sakit & Distributor Alat Kesehatan",
    highlight: "Automated Medical Consumables & Hospital Allocation Tracking on Google Sheets.",
    deskripsi: "Sistem manajemen rantai pasok medis terintegrasi yang mengotomatisasi distribusi alat kesehatan, obat-obatan, dan tracking alokasi faskes/rumah sakit secara real-time.",
    fitur: [
      "Real-time Hospital & Faskes Stock Allocation Tracker",
      "Batch Expiry Date Alert & Critical Inventory Thresholds",
      "Automated Emergency Purchase Order (PO) Workflows",
      "Cold-Chain Logistical Status Monitoring"
    ],
    metrikNilai: "100% Tracking",
    metrikLabel: "Akurasi Distribusi Alkes & Obat",
    linkGambar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Vite"],
    caseStudy: {
      seoTitle: "MediCare Supply Engine | Healthcare Consumables Logistics BI Case Study",
      problem: "Jaringan rumah sakit dan distributor alat kesehatan mengalami risiko kedaluwarsa bahan medis habis pakai akibat keterlambatan tracking distribusi antar-faskes.",
      data: "Monitoring data inventaris medis harian, tanggal kedaluwarsa lot/batch, alokasi stok per faskes, serta temperatur rantai dingin (cold-chain).",
      analysis: "Peringatan dini kedaluwarsa berbasis algoritma FIFO, kalkulasi batas kritis stok (Critical Stock Threshold), dan alokasi stok darurat.",
      dashboard: "Dashboard kontrol inventaris rumah sakit dengan status warna risiko kedaluwarsa, pembuat Purchase Order (PO) otomatis, dan pelacak distribusi rantai dingin.",
      insight: "15% stok alat kesehatan berisiko kedaluwarsa dapat diselamatkan jika didistribusikan ulang ke faskes dengan tingkat penggunaan tinggi 30 hari lebih awal.",
      businessImpact: "Menjamin 100% akurasi tracking alokasi medis & obat, mengeliminasi potensi kerugian finansial akibat barang medis expired."
    }
  },
  {
    id: "PRJ-001",
    kategori: "Sistem Inventaris Gudang",
    warnaKategori: "emerald",
    judul: "Inventory Control.",
    seoTitle: "Inventory Control App | Warehouse ERP & Barcode BI Case Study",
    klien: "Retail & Distribusi Nasional",
    highlight: "Real-time warehouse management with zero backend cost.",
    deskripsi: "Sistem manajemen gudang real-time yang menggunakan Google Sheets sebagai database utama, dibalut dengan antarmuka web modern untuk staf lapangan.",
    fitur: [
      "Integrasi Barcode & QR Code Scanner via Kamera",
      "Alert Reorder Point Otomatis (Email/WhatsApp)",
      "Tracking Mutasi Stok Multi-Gudang (FIFO)",
      "Role-based Access Control (Admin vs Staf Gudang)"
    ],
    metrikNilai: "100%",
    metrikLabel: "Pengurangan Biaya Server",
    linkGambar: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React"],
    caseStudy: {
      seoTitle: "Inventory Control App | Warehouse ERP & Barcode BI Case Study",
      problem: "Staf gudang distributor nasional melakukan pencatatan barang masuk/keluar secara manual di kertas, menyebabkan selisih stok fisik dan laporan keuangan.",
      data: "Data master SKU barang, log pemindaian barcode/QR code, lokasi rak gudang, dan mutasi stok antar-cabang.",
      analysis: "Metodologi pemotongan stok FIFO (First-In, First-Out), kalkulasi Reorder Point (ROP) harian, dan pencocokan otomatis selisih stok (Stock Opname Reconciliation).",
      dashboard: "Antarmuka Web App responsif mobile dengan fitur scanner kamera smartphone untuk pencatatan barang dan notifikasi pengingat ROP otomatis.",
      insight: "Selisih stok terbesar terjadi saat periode pergantian shift gudang akibat tidak adanya verifikasi pemindaian fisik waktu nyata.",
      businessImpact: "Menghilangkan selisih stok hingga 0%, memberikan sistem manajemen gudang real-time dengan 100% Zero Server Cost."
    }
  },
  {
    id: "PRJ-003",
    kategori: "Data Pipeline & BI",
    warnaKategori: "purple",
    judul: "Custom Dashboard BI.",
    seoTitle: "Custom Dashboard BI | FMCG Multi-Branch Data Pipeline BI Case Study",
    klien: "FMCG Enterprise",
    highlight: "Menyulap ribuan baris data mentah menjadi wawasan bisnis.",
    deskripsi: "Data pipeline dari berbagai cabang dikonsolidasikan otomatis ke Master Sheet, kemudian divisualisasikan menggunakan custom React Dashboard tanpa perlu langganan Tableau/PowerBI.",
    fitur: [
      "ETL Pipeline Otomatis (Extract Transform Load)",
      "Interactive Charts (Filter by Date/Region)",
      "Sinkronisasi Real-time < 5 Detik",
      "Export Laporan ke PDF/CSV"
    ],
    metrikNilai: "3 Hari -> 5 Menit",
    metrikLabel: "Percepatan Rekap Laporan",
    linkGambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "React", "Google Sheets"],
    caseStudy: {
      seoTitle: "Custom Dashboard BI | FMCG Multi-Branch Data Pipeline BI Case Study",
      problem: "Perusahaan FMCG dengan puluhan cabang mengalami penundaan laporan konsolidasi omzet bulanan hingga 3 hari kerja akibat pengumpulan file Excel manual.",
      data: "Ingesting file laporan dari 25 cabang secara otomatis menggunakan ETL Pipeline Apps Script ke Master Google Sheets.",
      analysis: "Konsolidasi agregat omzet harian, analisis kontribusi cabang, dan perbandingan target vs pencapaian aktual bulanan.",
      dashboard: "Dashboard React kustom tanpa biaya lisensi bulanan dengan filter tanggal, wilayah, dan fitur ekspor laporan resmi PDF/CSV.",
      insight: "Cabang di wilayah Jawa Tengah mengalami peningkatan penjualan produk segmen ekonomi sebesar 45% setelah penyesuaian harga grosir lokal.",
      businessImpact: "Memangkas waktu rekap laporan bisnis dari 3 Hari Kerja menjadi hanya 5 Menit, menghemat biaya lisensi software BI komersial."
    }
  },
  {
    id: "PRJ-011",
    kategori: "Logistics & Fleet Management",
    warnaKategori: "blue",
    judul: "Loka Logistics App.",
    seoTitle: "Loka Logistics App | Fleet Management & Cargo Manifest BI Case Study",
    klien: "Perusahaan Ekspedisi & Armada Logistik",
    highlight: "Fleet Tracking, Cargo Manifest & Automated Delivery Dispatch on Google Sheets.",
    deskripsi: "Aplikasi manajemen armada logistik dan pelacakan kargo pengiriman barang. Mengelola jadwal pengemudi, manifes muatan kargo, serta operasional biaya armada secara transparan.",
    fitur: [
      "Real-time Cargo Manifest & Dispatch Scheduler",
      "Fleet Fuel & Operational Expense Tracking",
      "Digital Proof of Delivery (POD) Signature Integration",
      "Delivery Lead-Time & Route Optimization Metrics"
    ],
    metrikNilai: "100% Real-time",
    metrikLabel: "Visibilitas Status Pengiriman",
    linkGambar: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Chart.js"],
    caseStudy: {
      seoTitle: "Loka Logistics App | Fleet Management & Cargo Manifest BI Case Study",
      problem: "Perusahaan armada ekspedisi kesulitan memantau posisi pengiriman kargo, penggunaan bahan bakar armada, dan bukti penerimaan barang (Proof of Delivery).",
      data: "Log jadwal pengemudi, manifes muatan kargo, pengeluaran BBM, serta koordinat lokasi dan jam pengiriman.",
      analysis: "Metrik Delivery Lead-Time, kalkulasi efisiensi konsumsi BBM per kilometer, dan pemetaan rute pengiriman optimal.",
      dashboard: "Antarmuka pelacak armada real-time dengan fitur tanda tangan digital POD (Proof of Delivery) langsung dari smartphone pengemudi.",
      insight: "Rute pengiriman jalur selatan menghemat konsumsi BBM hingga 14% dibandingkan jalur utara pada jam operasional sibuk.",
      businessImpact: "Memberikan visibilitas 100% status pengiriman kargo secara real-time, menekan biaya operasional BBM armada hingga 12%."
    }
  },
  {
    id: "PRJ-012",
    kategori: "Sales & CRM Analytics",
    warnaKategori: "purple",
    judul: "Sales Analytics Cockpit.",
    seoTitle: "Sales Analytics Cockpit | B2B Sales Pipeline & Funnel BI Case Study",
    klien: "B2B Commercial Sales Team & Distributor",
    highlight: "Real-time Sales Pipeline & Representative Performance Cockpit on Google Sheets.",
    deskripsi: "Dasbor analitik performa penjualan B2B dan manajemen pipeline transaksi sales representative. Menyajikan perbandingan kuota target bulanan, komisi, dan rasio konversi deal.",
    fitur: [
      "Sales Funnel & Pipeline Stage Conversion Tracking",
      "Representative Target vs Achievement Leaderboard",
      "Commission Calculator & Deal Velocity Analytics",
      "Real-time Sales Revenue Forecast & Projection Charts"
    ],
    metrikNilai: "3.5x Fast",
    metrikLabel: "Percepatan Deal Velocity Sales",
    linkGambar: "./assets/prj_img/Sales Analytics Cockpit (2).png",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "Vite"],
    caseStudy: {
      seoTitle: "Sales Analytics Cockpit | B2B Sales Pipeline & Funnel BI Case Study",
      problem: "Tim sales B2B tidak memiliki visibilitas terhadap status deal pipeline, estimasi komisi, dan kecepatan penutupan transaksi (deal velocity).",
      data: "Data prospek, tahap funnel penjualan (Lead, Contacted, Proposal, Won/Lost), nilai deal, dan riwayat aktivitas tim sales.",
      analysis: "Kalkulasi rasio konversi per tahap funnel, perbandingan target vs pencapaian harian sales rep, dan perkiraan omzet (Revenue Forecast).",
      dashboard: "Dasbor analitik penjualan interaktif dengan leaderboard performa sales, kalkulator komisi otomatis, dan chart proyeksi omzet.",
      insight: "Deal B2B yang ditindaklanjuti dalam waktu kurang dari 24 jam setelah proposal dikirim memiliki rasio konversi 3x lebih tinggi.",
      businessImpact: "Mempercepat deal velocity tim sales hingga 3.5x lebih cepat, meningkatkan akurasi estimasi pencapaian target bulanan."
    }
  },
  {
    id: "PRJ-013",
    kategori: "Retail POS & Inventory ERP",
    warnaKategori: "emerald",
    judul: "Retail-ERP System.",
    seoTitle: "Retail-ERP System | Multi-Store POS & Wholesale BI Case Study",
    klien: "Retail Store Chains & Offline/Online POS Outlets",
    highlight: "Serverless Point of Sale & Multi-Store Inventory Management on Google Sheets.",
    deskripsi: "Sistem ERP retail terpadu yang memfasilitasi transaksi kasir (Point of Sale), pencatatan stok multi-toko offline/online, dan manajemen harga grosir/eceran secara real-time.",
    fitur: [
      "Multi-Store POS Cashier & Receipt Printing",
      "Real-time Multi-Branch Inventory Synchronization",
      "Wholesale vs Retail Tiered Pricing Matrix",
      "Daily Sales Profit & Loss Summary Reports"
    ],
    metrikNilai: "100% Real-time",
    metrikLabel: "Konsolidasi Stok Multi-Toko",
    linkGambar: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React 19", "TypeScript"],
    caseStudy: {
      seoTitle: "Retail-ERP System | Multi-Store POS & Wholesale BI Case Study",
      problem: "Jaringan toko retail offline dan toko online kesulitan menyinkronkan stok barang saat terjadi transaksi bersamaan di kasir dan marketplace.",
      data: "Log transaksi kasir POS waktu nyata, master harga grosir & eceran, serta status persediaan multi-cabang.",
      analysis: "Rekonsiliasi persediaan otomatis antar-toko, skoring keuntungan harian (Daily Profit & Loss), dan pemetaan tingkat perputaran produk.",
      dashboard: "Sistem POS kasir berbasis web yang terhubung langsung dengan cetak struk dan pembaruan stok cabang instan.",
      insight: "Penjualan paket bundel produk pada jam sibuk akhir pekan meningkatkan nilai rata-rata keranjang belanja (Average Order Value) sebesar 28%.",
      businessImpact: "Mencegah kondisi kehabisan stok lintas cabang (zero stock mismatch) dan mempercepat proses transaksi kasir hingga 50%."
    }
  },
  {
    id: "PRJ-002",
    kategori: "HR & Payroll Automation",
    warnaKategori: "blue",
    judul: "HR & Payroll Automation.",
    klien: "Perusahaan Manufaktur (>500 Karyawan)",
    highlight: "Otomatisasi 100% proses slip gaji dan rekap absensi.",
    deskripsi: "Mengganti sistem manual Excel menjadi web app dinamis. Pegawai dapat login, melihat slip gaji PDF bulanan, dan mengajukan cuti langsung dari HP mereka.",
    fitur: ["Pembuatan Slip Gaji PDF Otomatis massal", "Portal Karyawan Mandiri (Self-Service)", "Approval Cuti Bertingkat via Email", "Dashboard Analitik HR untuk Manajemen"],
    metrikNilai: "15 Jam/Minggu",
    metrikLabel: "Waktu Diselamatkan",
    linkGambar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    linkProject: "#",
    techStack: ["Apps Script", "Google Sheets", "React"]
  }
];
