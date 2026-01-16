import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Spline } from "@/components/ui/svgs/spline";
import { PyCharm } from "@/components/ui/svgs/pycharm";
import { GCP } from "@/components/ui/svgs/gcp";
import { AWS } from "@/components/ui/svgs/aws";
import { Kaggle } from "@/components/ui/svgs/kaggle";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Supabase } from "@/components/ui/svgs/supabase";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Figma } from "@/components/ui/svgs/figma";
import { JS } from "@/components/ui/svgs/js";

export const DATA = {
  name: "Sayak Bhunia",
  initials: "SB",
  url: "http://localhost:3000",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Software Engineer | Full Stack Dev ツ",
  summary:
    "crafting minimal websites and web components using efficient code and building engaging tech communities for the past 3 years. Want to hire me -> [Resume](https://drive.google.com/file/d/1bTeakeAU3vWgknQJ9sw-iOD07XS9zLUY/view?usp=sharing)",
  avatarUrl: "/me1.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "JavaScript", icon: JS},
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "Figma", icon: Figma},
    { name: "Pycharm", icon: PyCharm},
    { name: "Kaggle Notebook", icon: Kaggle},
    { name: "GCP", icon: GCP},
    { name: "AWS", icon: AWS},
    { name: "MySQL", icon: MySQL},
    { name: "MongoDB", icon: MongoDB},
    { name: "Supabase", icon: Supabase}
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sbhunia2903@gmail.com",
    tel: "+918017829475",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sayak-Bhunia",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayak-bhunia-452419252/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hashmap_uh",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sbhunia2903@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Maximize",
      href: "https://www.maximize.money/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/maximize8_logo.jpg",
      start: "Jan 2025",
      end: "Arp 2025",
      description:
        "Spearheaded high-impact feature development with Next.js and REST APIs to boost website traffic by 52%, built and tested engagement tools like feedback forms and waitlist counters improving tracking accuracy by 40%, and developed a scalable Laravel–MySQL transaction analytics dashboard enhancing system scalability by 45% with real-time user monitoring."
    },
  ],
  education: [
    {
      school: "Narula Institute of Technology",
      href: "https://www.nit.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/nit logo1.png",
      start: "July 2022",
      end: "June 2026",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "Aug 2023",
      end: "Sept 2023",
    },
  ],
  projects: [
    {
      title: "Bon Appetit",
      href: "https://bon-appetit-website.vercel.app/",
      dates: "Aug 2024",
      active: true,
      description:
        "Bon appetit is an online food ordering website that brings gourmet style food to your door step within minutes.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Vercel",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sayak-Bhunia/Bon-Appetit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "ba.png",
    },
    {
      title: "SnapSearch",
      href: "https://snapsearch.streamlit.app/",
      dates: "July 2024",
      active: true,
      description:
        "snapsearch streamlines your social media exploration, making it effortless to locate and access the content you need in just a few clicks.",
      technologies: [
        "Streamlit",
        "Python",
        "Exa API"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sayak-Bhunia/SnapSearch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "ss.png",
    },
    {
      title: "Dev Dojo",
      href: "https://devdojo.vercel.app/",
      dates: "Dec 2023",
      active: true,
      description:
        "a landing page for a tech community that i created from scratch to gather cool people to contribute in tech.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Git",
        "Vercel",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sayak-Bhunia/devdojo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "dd.png",
    },
    {
      title: "MEDWIZ",
      href: "https://medwizard.vercel.app/",
      dates: "Sep 2023",
      active: true,
      description:
        "medwiz is an ai powered chatbot to connect you with the best docs of their respective fields in kolkata.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sayak-Bhunia/MEDWIZ_0.1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "mw.png",
    },
    {
      title: "cli-cs-trivia",
      href: "https://github.com/Sayak-Bhunia/cli-cs-trivia",
      dates: "May 2023",
      active: true,
      description:
        "a cli app/game trivia to test your computer science fundamental knowledge of oops, js and cpp.",
      technologies: [
        "CLI",
        "Node.js",
      ],
      image: "cli.png",
    },
  ],
  hackathons: [
    {
      title: "Brainrot Hackathon",
      dates: "Dec 2024",
      location: "Online (SF origin)",
      description:
        "Built a EXA API wrapper named SnapSearch that searches keywords or vector embeddings on all kinds of social media platforms just in a snap.",
      image:
        "bh.png",
      links: [
        {
          title: "Devpost",
          href: "https://devpost.com/software/rizzai",
        },
      ],
    },
    {
      title: "HackOdisha 3.0",
      dates: "Sep 2023",
      location: "NIT Rourkela, Odisha, India",
      description:
        "Medical consultation in Kolkata made easy with AI magic. Basically trained an AI chatbot on medical data for medical and medicinal consultation and deployed it on a web based interface.",
      image:
        "ho.webp",
      links: [
        {
          title: "Devfolio",
          href: "https://devfolio.co/projects/ezmed-cb1e",
        },
      ],
    },
    {
      title: "CodeFest 2023",
      dates: "Mar 2023",
      location: "JIS University, Kolkata, India",
      description:
        "Built a linktree alike web based interface to provide all necessary links to learn programming for beginners.",
      image:
        "cf.webp",
      links: [
        {
          title: "Devfolio",
          href: "https://devfolio.co/projects/coders-dasboard-d8fd",
        },
      ],
    },
  ],
} as const;
