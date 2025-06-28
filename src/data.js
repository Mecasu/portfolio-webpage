import redux from "./assets/Skills/reduxLogo.png";
import figma from "./assets/Skills/figmaLogo.png";
import js from "./assets/Skills/jsLogo.png";
import react from "./assets/Skills/reactLogo.png";
import vs from "./assets/Skills/vsLogo.png";
import java from "./assets/Skills/java.png";
import tailwind from "./assets/Skills/tailwind.png";
import sql from "./assets/Skills/postgreSql.png";
import spring from "./assets/Skills/spring.png";
import html from "./assets/Skills/html.png";
import css from "./assets/Skills/css.png";

import ecommerce from "./assets/Projects/ecommerce.png";
import pizza from "./assets/Projects/pizza.png";
import laptop from "./assets/Projects/laptop.png";
import right from "./assets/Projects/right.png";
import left from "./assets/Projects/left.png";

export const skillsData = {
  en: {
    title: "Skills",
    skills: [
      { name: "javascript", img: { src: js, alt: "javascript" } },
      { name: "react", img: { src: react, alt: "react" } },
      { name: "redux", img: { src: redux, alt: "redux" } },
      { name: "vs code", img: { src: vs, alt: "vs code" } },
      { name: "figma", img: { src: figma, alt: "figma" } },
    ],
  },
  tr: {
    title: "Yetenekler",
    skills: [
      { name: "javascript", img: { src: js, alt: "javascript" } },
      { name: "react", img: { src: react, alt: "react" } },
      { name: "redux", img: { src: redux, alt: "redux" } },
      { name: "vs code", img: { src: vs, alt: "vs code" } },
      { name: "figma", img: { src: figma, alt: "figma" } },
    ],
  },
};

export const profileData = {
  en: {
    information: {
      birthday: { name: "Birth Date", value: "23.05.1995" },
      city: { name: "City", value: "Antalya" },
      education: {
        name: "Education",
        value: "Akdeniz Unv. Eletrical-Electronic Engineer Licence, 2020",
      },
      preferred: { name: "Preferred Role", value: "Backend, Fullstack" },
    },
    about: {
      title: "About me",
      content: [
"I am an enthusiastic full-stack developer who is passionate about learning new skills and constantly improving myself by taking on new challenges. I have achieved my goal of becoming a software developer and enrolled in an intensive 6-month full-stack development program at Workintech. During this program, I received training in frontend development for 3 months and backend development for the remaining 3 months."        
      ],
    },
    titles: ["Profile", "Basic Information"],
  },
  tr: {
    information: {
      birthday: { name: "Doğum Tarihi", value: "23.05.1995" },
      city: { name: "İkamet Şehri", value: "Antalya" },
      education: {
        name: "Eğitim Durumu",
        value: "Akdeniz Ünv. Elektrik-Elektronik Müh. Lisans, 2020",
      },
      preferred: { name: "Tercih Ettiği Rol", value: "Backend, Fullstack" },
    },
    about: {
      title: "Hakkımda",
      content: [
        "Ben, yeni beceriler öğrenme ve kendimi sürekli olarak yeni zorluklarla geliştirme konusuna sahip, hevesli bir full-stack geliştiricisiyim. Yazılım geliştiricisi olma hedefimi gerçekleştirdim ve 6 aylık yoğun Workintech full-stack geliştirme programına başladım. Bu programın 3 ayında ön yüz geliştirme, 3 ayında ise arka yüz geliştirme alanlarında eğitim aldım",
      ],
    },
    titles: ["Profil", "Temel Bilgiler"],
  },
};

export const projectsData = {
  en: {
    title: "Projects",
    projects: [
      {
        title: "Autochess.site",
        content:
          "AutoChess.site is a comprehensive analytics platform where Dota Auto Chess players can track their seasonal statistics, rankings, and performance history.",
        skills: ["react", "vercel", "axios", "router"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: ecommerce, alt: "autochess" },
        ],
        linkApp: "https://www.autochess.site/",
    //    linkGitHub: "https://github.com/Mecasu/autochess-site",
      },
      {
        title: "Order Pizza",
        content:
          "The commercial-ready pizza order page was created for personal development. Created responsive design objects using CSS",
        skills: ["react", "redux", "axios", "router", "vercel"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: pizza, alt: "pizza" },
        ],
        linkApp: "https://fsweb-s7-challenge-pizza-ruby-alpha.vercel.app/",
        linkGitHub: "https://github.com/Mecasu/fsweb-s7-challenge-pizza",
      },
    ],
    links: ["View on Github", "Go to app"],
  },
  tr: {
    title: "Projeler",
    projects: [
      {
        title: "Autochess.site",
        content:
          "AutoChess.site, Dota Auto Chess oyuncularının sezonluk istatistiklerini, sıralamalarını ve performans geçmişini takip edebilecekleri kapsamlı bir analiz platformudur.",
        skills: ["react", "vercel", "axios", "router"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: ecommerce, alt: "autochess" },
        ],
        linkApp: "https://www.autochess.site/",
       // linkGitHub: "https://github.com/Mecasu/autochess-site",
      },
      {
        title: "Pizza Sipariş",
        content:
          "Ticari kullanıma uygun pizza sipariş sayfası kişisel gelişim için oluşturuldu.CSS kullanarak duyarlı tasarım nesneleri oluşturuldu.",
        skills: ["react", "redux", "axios", "router", "vercel"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: pizza, alt: "pizza" },
        ],
        linkApp: "https://fsweb-s7-challenge-pizza-ruby-alpha.vercel.app/",
        linkGitHub: "https://github.com/Mecasu/fsweb-s7-challenge-pizza",
      },
    ],
    links: ["Github'ta görüntüle", "Uygulamaya git"],
  },
};


export const headerData = {
  en: {
    title: "Hi!",
    content: `I’m Melih. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!`,
    text: [
      "Currently",
      "Freelancing",
      "for",
      "UX, UI, & Web Design",
      "Project.",
      "Invite me to join your team",
    ],
    selections: { mode: ["dark mode", "light mode"], language: "türkçe" },
  },
  tr: {
    title: "Merhaba!",
    content: `Ben Melih. Ben tam kapsamlı bir geliştiriciyim. Sağlam işler yapabilirim ve ölçeklenebilir ön uç ürünleri. Tanışalım!`,
    text: [
      "Şu anda",
      "UX, UI, & Web Dizayn",
      "Projesinde",
      "Serbest",
      "Çalışıyorum.",
      "Beni ekibinize katılmaya davet edin",
    ],
    selections: { mode: ["karanlık mod", "aydınlık mod"], language: "english" },
  },
};

export const footerData = {
  en: ["Let’s work together on", "your next product.", "Personal Blog"],
  tr: ["Bir sonraki projende", "birlikte çalışalım.", "Kişisel Blog"],
};
