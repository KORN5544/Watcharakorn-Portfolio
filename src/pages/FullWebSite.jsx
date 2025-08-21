import React from "react";
const skills = [
  { name: "HTML", level: 38 },
  { name: "CSS / Tailwind", level: 28 },
  { name: "JavaScript (ES6)", level: 20 },
  { name: "React", level: 39 },
  { name: "Node.js", level: 29 },
  { name: "Git & GitHub", level: 68 },
];

const projects = [
  {
    title: "Meow meow",
    desc: "เป็นชิ้นงานที่เกี่ยวกับการขายสินค้าดีเกี่ยวกับแมว",
    tags: ["Cat", "Shop", "Product"],
    img: "https://cdn.discordapp.com/attachments/1403000632582864946/1408112121279152289/image.png?ex=68a88e1b&is=68a73c9b&hm=777b4a5d77d07a58a86b0b94dbd404e74ccca2d8f0067c8e362c966da0fe032f&",
    link: "https://render-react-2rcq.onrender.com/",
  },
  {
    title: "Desserts and local sweets",
    desc: "ชิ้นงานนี้เป็นเว็ปแนะนำของหวานและขนมท้องถิ่น เป็นชิ้นงานที่เคยทำจากการที่มีอาจารย์สอนเลยเกิดผมงานชิ้นนี้",
    tags: ["Travel", "Candy", "Caramel"],
    img: "https://cdn.discordapp.com/attachments/1403000632582864946/1408108898224836739/image.png?ex=68a88b1a&is=68a7399a&hm=bf53431aff3a2c40abc61ce74ad27c495208f3a6f63b4aa785b9a345a9b49223&",
    link: "https://watcharakron-desserts.onrender.com/",
  },

];

const education = [
  {
    school: "วิทยาลัยอาชีวศึกษานครปฐม",
    program: "สาขาเทคโนโลยีสารสนเทศ",
    years: "2022 – 2026",
    details: [
      "กำลังศึกษาอยู่ระดับชั้น ปวส.1",
    ],
  },
];

function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {overline && (
        <div className="text-xs tracking-widest uppercase text-neutral-500">{overline}</div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-neutral-900">{title}</h2>
      {subtitle && (
        <p className="text-neutral-600 mt-3 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function Navbar() {
  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg tracking-tight">Portfolio Me<span className="text-neutral-400">.</span></a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="text-neutral-700 hover:text-black transition-colors"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-2xl px-4 py-2 bg-black text-white text-sm shadow-sm hover:shadow transition"
        >
          Hire Me
        </a>
        <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100" onClick={() => {
          const m = document.getElementById("mobile-menu");
          if (m) m.classList.toggle("hidden");
        }} aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </nav>
      <div id="mobile-menu" className="md:hidden hidden border-t border-neutral-200">
        <div className="container mx-auto px-4 py-3 grid gap-2 text-sm">
          <a href="#home" className="py-2">Home</a>
          <a href="#about" className="py-2">About</a>
          <a href="#skills" className="py-2">Skills</a>
          <a href="#projects" className="py-2">Projects</a>
          <a href="#education" className="py-2">Education</a>
          <a href="#contact" className="py-2">Contact</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-white via-white to-neutral-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 text-neutral-900">
            Hi, I’m Watcharakorn
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-2xl px-5 py-2.5 bg-black text-white text-sm shadow hover:shadow-md transition">View Projects</a>
            <a href="#contact" className="rounded-2xl px-5 py-2.5 bg-white border border-neutral-300 text-sm hover:bg-neutral-50">Contact</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-neutral-500">
            <a href="https://github.com/KORN5544" className="hover:text-black" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.7 1.8 1.9 2.2.9.4 2 .2 2.5 0 .1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.2-3.6-.1-.3-.5-1.7.1-3.6 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.5-1.6 3.5-1.3 3.5-1.3.6 1.9.2 3.3.1 3.6.8 1 1.2 2.2 1.2 3.6 0 4.9-2.9 5.9-5.6 6.2.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
            </a>
            <a href="https://www.instagram.com/korn_y18/" className="hover:text-black" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.55c0-1.33 0-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.96v5.64H9.32V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.33 2.4 4.33 5.52v6.23ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.13 20.45H3.55V9h3.58v11.45Z"/></svg>
            </a>
            <a href="https://mail.google.com/" className="hover:text-black" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-200 to-white rounded-3xl blur-2xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
            <img 
          src="https://cdn.discordapp.com/attachments/1403000632582864946/1408127202582593546/snapedit_1755792910850.jpeg?ex=68a89c26&is=68a74aa6&hm=424737794aa9fc95e758bce2d3112f39f3581f7df3bde64bb858276933ad615e&" 
          alt="Korn portrait" 
          className="w-full h-full object-cover" 
          />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-1">
          <SectionTitle
            overline="About Me"
            title="Personal Information"
            subtitle="Nothing is impossible except choosing not to do it."
          />
        </div>
        <div className="lg:col-span-2 grid gap-6 text-neutral-700">
          <div className="p-6 rounded-2xl border border-neutral-200 shadow-sm bg-white">
            <p>
              ข้อแรกที่ควรทำหลังตื่นคือการแปลกฟันล้างหน้าและอย่างสำคัญเลยคืออาบน้ำ
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-200 shadow-sm bg-white">
            <p>
              ข้อที่สองอย่าลังเลที่จะทำพอทำแล้วเดียวก็รู้เองว่ามันดีหรือไม่ดี
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Skills"
          title="SKILLS"
          subtitle="ภาพรวมของเครื่องมือและเทคโนโลยีที่ฉันใช้เป็นประจํา"
        />
        <div className="max-w-3xl mx-auto grid gap-5">
          {skills.map((s) => (
            <div key={s.name} className="p-4 rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-neutral-800">{s.name}</div>
                <div className="text-sm text-neutral-500">{s.level}%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-black"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Projects"
          title="PROJECTS ME"
          subtitle="ยังเป็นชิ้นงานที่เกิดจากการเรียนรู้ที่ห้องเรียน"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                <p className="text-sm text-neutral-600 mt-2 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Education"
          title="ประวัติการศึกษา"
          subtitle="กำลังศึกษาหรือจบการศึกษา"
        />
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((e) => (
            <div key={e.school} className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-semibold text-neutral-900">{e.school}</h3>
                <div className="text-sm text-neutral-500">{e.years}</div>
              </div>
              <div className="text-neutral-700 mt-1">{e.program}</div>
              <ul className="list-disc pl-6 mt-3 text-neutral-600 space-y-1">
                {e.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Contact"
          title="Contact Me"
          subtitle="อยากทราบข้อมูลหรืออยากได้พูดคุยติดต่อมาได้เลย"
        />
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! I’ll get back to you soon."); }} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-neutral-600">Name</label>
                  <input className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-neutral-600">Email</label>
                  <input type="email" className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-neutral-600">Message</label>
                <textarea rows={5} className="px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Tell me a bit about your project..." required />
              </div>
              <div className="flex items-center justify-end ">
                <button type="submit" className="rounded-2xl px-5 py-2.5 bg-black text-white text-sm shadow hover:shadow-md transition">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Kron Portfolio. All rights reserved.</div>
        <div className="flex items-center gap-4 text-neutral-500">
          <a href="#home" className="hover:text-black text-sm">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default function KornPortfolio() {
  return (
    <main className="font-sans antialiased text-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
