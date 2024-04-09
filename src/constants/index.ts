import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import { LuFiles } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";


export const HomeButton = [
  {
    name : 'Experience',
    link : '/Experience'
  },
  {
    name : 'Skills',
    link : '/skills'
  },  {
    name : 'Projects',
    link : '/my-projects'
  },  {
    name : 'Resume',
    link : '/resume'
  },
]

export const SkillData = [
  {
    name: "Html 5",
    Image: "/image/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/image/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/image/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/image/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/image/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/image/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/image/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/image/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/image/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/image/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/image/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/image/mongodb.png",
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
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "Skills",
    icon: GiSkills,
    link: "/my-skills",
  },
  {
    name: "Experience",
    icon: MdWorkOutline,
    link: "/experience",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "Resume",
    icon: LuFiles,
    link: "/resume",
  },
];

