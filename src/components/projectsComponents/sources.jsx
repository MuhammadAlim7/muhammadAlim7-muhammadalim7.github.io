import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img3 from "../../assets/img/image3.png";

export const elements = [
  {
    id: "",
    title: "App Pembayaran SPP",
    img: [img1, img2, img3],
    lang: [
      { name: "PHP" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Bootstrap" },
      { name: "DataTables" },
      { name: "Jquery" },
    ],
    desc: [
      "Aplikasi Pembayaran SPP adalah sebuah aplikasi berbasis PHP yang bertujuan untuk mempermudah administrasi sekolah dalam mengelola dan memproses pembayaran SPP (Sumbangan Pembinaan Pendidikan). Aplikasi ini dirancang agar siswa, orang tua, dan pihak sekolah dapat melakukan dan memantau pembayaran SPP dengan lebih mudah melalui antarmuka yang ramah pengguna.",
      "Beberapa fitur utama dari aplikasi ini termasuk manajemen pengguna dengan sistem login untuk admin, siswa, dan orang tua, yang masing-masing memiliki hak akses yang berbeda. Modul pembayaran SPP memungkinkan penginputan dan pemrosesan pembayaran secara online, membuat prosesnya lebih cepat dan efisien.",
      "Laporan bulanan dan tahunan yang tersedia memudahkan sekolah dalam memantau pembayaran yang diterima, dengan analisis data yang membantu dalam pengambilan keputusan. Keamanan data sangat diutamakan, dengan enkripsi data dan backup data secara berkala untuk memastikan informasi sensitif tetap terlindungi.",
      "Menggunakan aplikasi ini memberikan berbagai keuntungan, seperti menghemat waktu dan tenaga dalam mengelola pembayaran SPP, memastikan semua pembayaran tercatat dengan transparan, memudahkan siswa dan orang tua untuk memantau status pembayaran secara online, serta membantu sekolah dalam pengelolaan data dan pembuatan laporan keuangan.",
      "Secara keseluruhan, Aplikasi Pembayaran SPP dirancang sebagai solusi lengkap bagi sekolah dalam mengelola pembayaran SPP dengan fokus pada kemudahan penggunaan, keamanan, dan keakuratan data.",
    ],
    source: "https://github.com/MuhammadAlim7/Aplikasi-Pembayaran-SPP",
  },
  {
    id: "",
    title: "App E-Commerce",
    img: [img2, img1, img3],
    lang: [
      { name: "CodeIgniter" },
      { name: "PHP" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Bootstrap" },
    ],
    desc: [
      "ILorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, similique. Ipsam dignissimos aut incidunt mollitia sed, rerum perferendis nobis assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur est fugiat porro repudiandae sapiente unde sequi, voluptate id omnis ad iure excepturi a ex? Ipsum eligendi, voluptate ad illum a temporibus eveniet ut, cumque ipsa neque accusantium amet sunt.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus quae dicta aut corporis ducimus iste, numquam ad perferendis ullam sequi provident neque laudantium, expedita quo quam repellendus placeat modi cumque nisi? Facere, vitae iste!.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur est fugiat porro repudiandae sapiente unde sequi, voluptate id omnis ad iure excepturi a ex? Ipsum eligendi, voluptate ad illum a temporibus eveniet ut, cumque ipsa neque accusantium amet sunt.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda ab distinctio doloribus, quasi at quae harum, id nostrum cupiditate magnam. Laudantium error, fugiat corporis quaerat ut animi officiis minima.",
    ],
    source: "https://github.com/MuhammadAlim7/",
  },
  // {
  //   id: "",
  //   title: "Kuruma+ CarsWiki",
  //   img: img3,
  //   lang: [{ name: "Figma" }],
  //   desc: [
  //     "ILorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, similique. Ipsam dignissimos aut incidunt mollitia sed, rerum perferendis nobis assumenda.",
  //   ],
  // },
];
console.log;
export function ImgSkeleton() {
  return (
    <div
      role="status"
      className="aspect-video w-full animate-pulse  cursor-wait  rounded-xl bg-gray-300 dark:bg-gray-700"
    ></div>
  );
}
