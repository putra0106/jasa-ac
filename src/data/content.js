import { Wrench, WashingMachine } from "lucide-react";
const navItem = [
  {
    id: 1,
    link: "home",
    contentNav: "Home",
  },
  {
    id: 2,
    link: "serviceAndPricing",
    contentNav: "Layanan & Harga",
  },
  {
    id: 3,
    link: "benefits",
    contentNav: "Kenapa Pilih Kami?",
  },
  {
    id: 4,
    link: "garansi",
    contentNav: "Garansi",
  },
  {
    id: 5,
    link: "testimoni",
    contentNav: "Testimoni",
  },
  {
    id: 6,
    link: "faq",
    contentNav: "FAQ",
  },
];

// service and pricing
const services = [
  {
    title: "Cuci AC Berkala",
    price: "Rp 75.000",
    description: "Biar AC awet, dingin maksimal, dan udaranya segar lagi.",
  },
  {
    title: "Benerin AC Bocor Air / Netes",
    price: "Rp 120.000",
    description: "Biar gak ada genangan air lagi di lantai kamar",
  },
  {
    title: "Isi Ulang Freon (Full)",
    price: "Rp 150.000",
    description:
      "Hanya diisi kalau emang tekanannya berkurang ya, gak bakal dimain-mainin.",
  },
  {
    title: "Bongkar Pasang",
    price: "Rp 350.000",
    description: "Buat yang mau pindahan AC atau pasang AC baru.",
  },
];

// why choose us
const benefit = [
  {
    title: "Teknisinya Sopan & Jujur",
    description:
      "Kami paham rasanya risi masukin orang asing ke dalam rumah. Teknisi kami orangnya ramah, rapi, dan gak bakal ngada-ngadain kerusakan.",
  },
  {
    title: "Datang Sesuai Jam Janjian",
    description:
      "Gak pake PHP. Jam berapa kamu janjian sama admin kami di WA, jam segitu teknisi kami usahakan sudah sampai di depan rumah.",
  },
  {
    title: "Kerjanya Bersih",
    description:
      "Sebelum mulai cuci AC, kasur atau barang-barang di bawah AC bakal kami tutup plastik dulu biar gak kecipratan air kotor. Pas pulang, rumah kamu tetep bersih.",
  },
];

export { navItem, services, benefit };
