import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import { LuFiles } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";


export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/svg/linkedin.svg",
    linkTo : 'https://www.linkedin.com/in/mohamad-fadel-12a251194/'
  },
  {
    name: "Facebook",
    src: "/svg/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/svg/instagram.svg",
  },
];
export const Projects = [
  {
    title: "Natacara Id By Astra",
    text: "Natacara merupakan inovasi terbaru dari Astra Digital. Secara harfiah, Natacara merupakan kepanjangan dari ‘Menata Acara’. Dikembangkan secara khusus sebagai platform event management untuk memudahkan para penyelenggara maupun peserta event dalam mengadakan atau mengikuti event.",
    src: "/image/Natacara.png",
  },
  {
    title: "Seva Id By Astra",
    text: "SEVA adalah platform yang dioperasikan oleh PT Astra Auto Digital yang memudahkan pengguna dalam proses pengajuan pembelian dan pembiayaan (kredit) mobil yang didukung oleh Mitra yang terpercaya. SEVA memberikan kemudahan bagi pengguna untuk mendapatkan informasi terkait mobil, perhitungan kredit, dan juga pengajuan kredit mobil secara online. Syarat dan ketentuan pengajuan pembiayaan kepada Mitra yang tersedia pada aplikasi",
    src: "/image/seva_id.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/experience",
    icon: MdWorkOutline,
    link: "/experience",
  },
  {
    name: "/my-skills",
    icon: GiSkills,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/resume",
    icon: LuFiles,
    link: "/resume",
  },
];
