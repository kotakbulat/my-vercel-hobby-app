```markdown
# 📱 Feeds PoC: Contextual Commerce di dalam Feed Terpadu

Feeds adalah Proof of Concept (PoC) sederhana berbasis React yang dibuat untuk menguji apakah konten bisa jadi alat marketing yang efektif, bukan sekadar hiburan; dirancang untuk memvalidasi dua hipotesis produk utama:

1. ***Engagement (Membangun Persepsi Positif #ValueOriented)*:** *Dalam industri travel, OTA dan airline seringkali lebih banyak mendapat review negatif (delay, reschedule, cancel) dibanding pengalaman positif yang jarang dibagikan.
Dengan adanya feed konten, kita bisa “mengisi ruang” tersebut dengan cerita, pengalaman, dan highlight positif dari produk dan operasional kita.
Ini membantu membentuk persepsi yang lebih baik di mata user, sekaligus bisa dimanfaatkan sebagai bahan untuk campaign atau paid ads.*
2. **Contextual Commerce (Mendorong Konversi #CuanOriented):** *"Konten tidak hanya untuk dilihat, tapi juga bisa mendorong niat beli.
Saat user melihat konten yang relevan (misalnya video liburan), kita bisa menyisipkan CTA yang natural (seperti pesan tiket).
Dengan begitu, konten menjadi bagian dari funnel marketing yang bisa meningkatkan kemungkinan user untuk langsung melakukan transaksi.

Selain itu, model ini juga bisa dikembangkan ke arah affiliate marketing, di mana content creator atau bahkan customer bisa ikut mempromosikan produk ke circle sosial atau komunitas mereka.
Ini membuka peluang distribusi yang lebih luas dan organik, sekaligus mendorong lebih banyak transaksi melalui jaringan personal mereka."*

Aplikasi ini **bukan** untuk tahap *production*. Aplikasi ini menggunakan data *mock* (palsu), CSS, dan simulasi API untuk sekadar menguji pengalaman pengguna (UX/UI) secara cepat.

---

## ✨ Fitur Utama

- **🔄 Unified Infinite Scroll**: Menggabungkan komponen teks, gambar, dan video vertikal 9:16 dengan mulus ke dalam satu *feed* (beranda) menggunakan API bawaan `IntersectionObserver`.
- **🎥 Simulasi Platform**: 
  - **YouTube**: Menampilkan *embed iframe* YouTube asli yang dipaksa ke rasio 9:16 bergaya Shorts/Reels.
  - **Twitter/X**: Menampilkan kartu teks yang bersih dan mudah dibaca.
  - **Instagram**: Menampilkan gambar dengan *caption* dari pembuat konten.
- **✈️ Lapisan Niat Kontekstual (*Contextual Intent Layer*)**: Sebuah *overlay* CTA berdesain kaca buram (*frosted-glass*) yang elegan, otomatis muncul pada konten yang memiliki metadata *travel* (misal: Vlog Tokyo, foto liburan di Bali).
- **🔗 Pembuatan Tautan Dinamis**: Mengklik tombol CTA akan memproses metadata dari postingan terkait dan menghasilkan tautan pencarian tiket pesawat secara aktual (melalui Airpaz).

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Bahasa**: TypeScript (menggunakan *Discriminated Unions* untuk *rendering* komponen yang aman)
- **Styling**: Native CSS (Modular, CSS variables, Flexbox)
- **State Management**: React `useState`, `useEffect`, `useRef`
- **Data**: Data JSON statis (*mock*) + simulasi jeda jaringan (*network delay*)

---

## 🚀 Cara Menjalankan Project

### Prasyarat (Prerequisites)
- [Node.js](https://nodejs.org/) (direkomendasikan v16+)

### Instalasi

1. **Clone atau Buat Project**
   Jika Anda belum membuat kerangka aplikasi menggunakan Vite, jalankan:
   ```bash
   npm create vite@latest omnifeed-poc -- --template react-ts
   cd omnifeed-poc
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. **Lihat Aplikasi**
   Buka browser Anda dan arahkan ke `http://localhost:5173`

---

## 📁 Struktur Project

```text
src/
├── components/
│   ├── Feed.tsx          # Menangani logika & state infinite scroll
│   ├── PostCard.tsx      # Wrapper utama yang me-render jenis media yang tepat
│   ├── VideoCard.tsx     # Wrapper iframe YouTube Shorts (Rasio 9:16)
│   ├── ImageCard.tsx     # Blok gambar ala Instagram
│   ├── TextCard.tsx      # Blok teks ala Twitter/X
│   └── FlightCTA.tsx     # Kartu overlay untuk contextual commerce (Pesan Tiket)
├── mockData.ts           # Simulasi API yang mengembalikan batch feed campuran
├── types.ts              # Interface TypeScript (Tipe Post, TravelMeta)
├── utils.ts              # Fungsi helper (Pembuat URL tiket penerbangan)
├── styles.css            # Styling kustom, animasi, dan variabel CSS
├── App.tsx               # Wrapper aplikasi utama dan Header
└── main.tsx              # Entry point React DOM
```

---

## 🧠 Cara Kerjanya di Balik Layar

### 1. Discriminated Unions (TypeScript)
Aplikasi menggunakan struktur TypeScript yang kuat. Setiap *post* memiliki `type: 'video' | 'image' | 'text'`. Berdasarkan tipe ini, *compiler* TS menjamin bahwa `VideoCard` pasti menerima `videoId`, sedangkan `TextCard` pasti menerima `content`.

### 2. Contextual CTA (CTA Kontekstual)
Beberapa postingan *mock* disuntikkan objek opsional bernama `travelMeta`:
```typescript
travelMeta: {
  departureAirport: "LAX",
  arrivalAirport: "HND",
  departureDate: "2024-11-15",
  cabin: "economy",
  price: 850
}
```
Jika `PostCard.tsx` mendeteksi adanya objek ini, komponen `<FlightCTA />` akan dimunculkan (di-*render*) dengan posisi absolut di atas media terkait, menciptakan "jembatan niat" (intent bridge) yang sama sekali tidak mengganggu konten.

### 3. Pembuatan Konten Tanpa Batas (Endless Generation)
Untuk menyimulasikan *feed* tanpa batas (infinite) tanpa membutuhkan *database* yang besar, file `mockData.ts` mengambil sekumpulan data *mock* statis yang tersedia, mengacak posisinya, memberikannya UUID baru yang unik, dan mengirimkannya kembali ke UI setiap kali pengguna men-*scroll* sampai ke bagian paling bawah layar.

---

## ⚠️ Keterbatasan (Mengapa ini disebut PoC)

Untuk membawa aplikasi ini ke tahap *production*, beberapa hal berikut perlu diatasi:
- **TOS & Scraping:** Saat ini aplikasi menggunakan YouTube *embed*. Aplikasi nyata akan membutuhkan akses API resmi (OAuth) atau infrastruktur *scraping* yang kompleks untuk mengambil video dengan aman tanpa melanggar kebijakan platform (Terms of Service).
- **Backend:** Membutuhkan *database* sesungguhnya (seperti PostgreSQL/MongoDB) dan algoritma rekomendasi *feed*.
- **Autentikasi:** Belum ada sistem *login* pengguna atau manajemen sesi.
- **Performa:** Me-render puluhan *iframe* YouTube pada satu halaman secara perlahan akan menghabiskan memori (RAM). Aplikasi *production* harus menggunakan gambar *placeholder* (thumbnail) yang baru akan memuat video ketika diklik atau ketika videonya terlihat di layar (menggunakan lazy-loading/intersection observer).

---

**Dibuat untuk menguji ide, dengan cepat. 🚀**
```