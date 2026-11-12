const DEFAULT_P = {
  name: "Muhamad Saefuloh",
  roles: ["Data Analyst", "Web Developer", "Dashboard Builder", "Problem Solver"],
  tagline:
    "Saya mengubah data menjadi insight lewat dashboard interaktif, dan membangun aplikasi web yang fungsional.",
  linkedin: "https://www.linkedin.com/in/muhamad-saefuloh-537a162b7",
  github: "https://github.com/Muhammad887654",
  email: "emailanda@contoh.com",
  about:
    "Saya senang memecah masalah rumit menjadi bagian-bagian kecil, membaca pola dari data, lalu mengubahnya menjadi keputusan yang bisa dijalankan. Lewat dashboard e-commerce dan aplikasi web yang saya bangun, saya melatih cara berpikir analitis dan pemecahan masalah dari hulu ke hilir.",
  steps: [
    ["01", "Pahami Masalah", "Merumuskan pertanyaan dan tujuan yang jelas."],
    ["02", "Olah Data", "Membersihkan dan menyusun data agar siap dianalisis."],
    ["03", "Temukan Insight", "Membaca tren dan pola lewat visualisasi."],
    ["04", "Ambil Solusi", "Menerjemahkan temuan menjadi tindakan nyata."],
  ],
  stats: [
    ["3", "Proyek"],
    ["Python", "Data & Dashboard"],
    ["Node.js", "Web Backend"],
    ["Docker", "Deployment"],
  ],
  skills: [
    ["Python & Data Analysis", 80],
    ["Dashboard (Streamlit)", 80],
    ["Node.js", 70],
    ["Database / Supabase", 65],
    ["Docker", 60],
    ["Git & GitHub", 75],
  ],
  projects: [
    [
      "Dashboard E-Commerce",
      "Dashboard Streamlit untuk memvisualisasikan data e-commerce: tren penjualan, kategori produk teratas, status pesanan, lokasi pelanggan, tren pendapatan, skor ulasan, dan waktu pengiriman. Dikemas dengan Docker.",
      "Data",
      ["Python", "Streamlit", "Docker"],
      "https://github.com/Muhammad887654/Dasboard-E-comerce",
      [
        ["Lihat kode di GitHub", "https://github.com/Muhammad887654/Dasboard-E-comerce"],
      ],
    ],
    [
      "QAF Blog",
      "Blog dengan registrasi email dan password, profil akun, serta postingan privat anggota. Dilengkapi antarmuka QAF Berbagi untuk kampanye donasi, unggah bukti, dan panel bendahara dengan Supabase.",
      "Web",
      ["Node.js", "Supabase", "Auth"],
      "https://github.com/Muhammad887654/qaf-blog",
      [
        ["Lihat kode di GitHub", "https://github.com/Muhammad887654/qaf-blog"],
      ],
    ],
    [
      "Global Bite",
      "Proyek capstone tim berupa aplikasi web rekomendasi kuliner untuk wisatawan. Menggabungkan skor popularitas berbasis machine learning dengan informasi lokasi, alamat, harga, dan merchant agar pengguna dapat menjelajahi rekomendasi hingga detail kuliner.",
      "Web",
      ["Web App", "Machine Learning", "Rekomendasi"],
      "https://github.com/verglimn/global-bite-clientside",
      [
        ["Live Demo", "https://global-bite-clientside-main-px1f3jhyi.vercel.app"],
        ["Server-side", "https://github.com/verglimn/global-bite-serverside"],
        ["API", "https://github.com/resi616/global-bite-api"],
      ],
    ],
  ],
  exp: [
    [
      "2024 – Sekarang",
      "Posisi / Peran Anda",
      "Nama Perusahaan",
      "Tuliskan pencapaian utama di sini.",
    ],
    [
      "2022 – 2024",
      "Posisi Sebelumnya",
      "Nama Organisasi",
      "Tanggung jawab dan hasil yang diraih.",
    ],
    [
      "2019 – 2023",
      "Pendidikan",
      "Nama Universitas / Sekolah",
      "Jurusan dan prestasi.",
    ],
  ],
};

let P = { ...DEFAULT_P };
const $ = (selector) => document.querySelector(selector);

function normalizePortfolio(data) {
  const profile = data && data.portfolio ? data.portfolio : data;
  const source = profile || {};
  const next = { ...DEFAULT_P };

  if (source.profile) {
    next.name = source.profile.name || next.name;
    next.tagline = source.profile.tagline || next.tagline;
    next.linkedin = source.profile.linkedin || next.linkedin;
    next.github = source.profile.github || next.github;
    next.email = source.profile.email || next.email;
    next.about = source.profile.about || next.about;
  }

  if (source.skills && source.skills.length) {
    next.skills = source.skills.map((skill) => [skill.name, Number(skill.level || 0)]);
  }

  if (source.projects && source.projects.length) {
    next.projects = source.projects.map((project) => {
      const tags = project.tags || [];
      const links = project.links || [];
      const codeLink = links.length ? links[0] : null;
      const extras = links.slice(1).map((link) => [link.label, link.url]);
      return [
        project.title,
        project.description,
        project.category || "Semua",
        tags,
        codeLink ? codeLink.url : next.projects[0]?.[4] || "#",
        extras.length ? extras : project.links && project.links.length ? [
          [project.links[0].label, project.links[0].url],
        ] : null,
      ];
    });
  }

  if (source.experience && source.experience.length) {
    next.exp = source.experience.map((item) => [
      item.period,
      item.title,
      item.organization,
      item.description,
    ]);
  }

  if (Array.isArray(source.stats) && source.stats.length) {
    next.stats = source.stats.map((item) => [item.value, item.label]);
  }

  if (Array.isArray(source.process) && source.process.length) {
    next.steps = source.process.map((item) => [item.number, item.title, item.description]);
  }

  return next;
}

function renderPortfolio() {
  $("#logo").textContent =
    P.name
      .split(" ")
      .map((word) => word[0])
      .join("") + ".";
  $("#name").textContent = P.name;
  $("#tagline").textContent = P.tagline;
  $("#about-t").textContent = P.about;
  $("#li").href = P.linkedin;
  $("#fn2").textContent = P.name;
  $("#yr").textContent = new Date().getFullYear();

  $("#steps").innerHTML = P.steps
    .map(
      (step) =>
        `<div class="st"><b>${step[0]}</b><h3>${step[1]}</h3><p>${step[2]}</p></div>`,
    )
    .join("");

  $("#stats").innerHTML = P.stats
    .map(
      (stat) =>
        `<div class="stat"><b>${stat[0]}</b><span>${stat[1]}</span></div>`,
    )
    .join("");

  $("#sk").innerHTML = P.skills
    .map(
      (skill) =>
        `<div class="skill"><div><span>${skill[0]}</span><span>${skill[1]}%</span></div><div class="bar"><i data-w="${skill[1]}"></i></div></div>`,
    )
    .join("");

  $("#pj").innerHTML = P.projects
    .map((project) => {
      const links = [
        ["Lihat kode di GitHub", project[4] || "#"],
        ...(project[5] || []),
      ];

      return `<div class="card" data-c="${project[2]}"><h3>${project[0]}</h3><p>${project[1]}</p>${(project[3] || [])
        .map((tag) => `<span class="tag">#${tag}</span>`)
        .join("")}<p class="project-links">${links
        .map(
          ([label, url]) =>
            `<a class="tag" href="${url}" target="_blank" rel="noopener">${label} ↗</a>`,
        )
        .join("")}</p></div>`;
    })
    .join("");

  const categories = ["Semua", ...new Set(P.projects.map((project) => project[2]))];
  $("#chips").innerHTML = categories
    .map(
      (category, index) =>
        `<button class="chip${index ? "" : " on"}">${category}</button>`,
    )
    .join("");

  $("#chips").onclick = (event) => {
    const button = event.target.closest(".chip");
    if (!button) return;

    document
      .querySelectorAll(".chip")
      .forEach((chip) => chip.classList.remove("on"));
    button.classList.add("on");

    document.querySelectorAll(".card").forEach((card) => {
      const match = button.textContent === "Semua" || card.dataset.c === button.textContent;
      card.classList.toggle("hide", !match);
    });
  };

  $("#tl").innerHTML = P.exp
    .map(
      (item) =>
        `<div class="ti"><small>${item[0]}</small><h3>${item[1]}</h3><b style="font-size:.9rem">${item[2]}</b><p>${item[3]}</p></div>`,
    )
    .join("");
}

function setupTyping() {
  let roleIndex = 0;
  let characterIndex = 0;
  let deleting = false;
  const typed = $("#typed");

  function tick() {
    const role = P.roles[roleIndex];
    typed.textContent = role.slice(0, characterIndex);

    if (!deleting && characterIndex === role.length) {
      deleting = true;
      return setTimeout(tick, 1400);
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % P.roles.length;
    }

    characterIndex += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 40 : 80);
  }

  tick();
}

function renderBlogSection() {
  const blogGrid = document.getElementById("blog-grid");
  if (!blogGrid) return;

  const posts = (window.__siteData && window.__siteData.blog && window.__siteData.blog.posts) || [
    {
      title: "Membangun Dashboard yang Bermanfaat",
      summary: "Dashboard bukan hanya soal tampilan, tetapi soal membantu orang mengambil keputusan yang lebih cepat dan tepat.",
      category: "Data Analytics",
      readTime: "5 menit",
      slug: "membangun-dashboard-yang-bermanfaat",
      tags: ["dashboard", "python", "streamlit"],
    },
    {
      title: "Tips Menulis Query Data yang Rapi",
      summary: "Menulis query yang bersih membuat analisis lebih cepat, mudah diulang, dan lebih mudah dipahami tim.",
      category: "Data Analytics",
      readTime: "4 menit",
      slug: "tips-menulis-query-data-yang-rapi",
      tags: ["sql", "data-cleaning", "analysis"],
    },
  ];

  blogGrid.innerHTML = posts.slice(0, 3).map((post) => `
    <article class="card blog-card">
      <span class="blog-category">${post.category || "Blog"}</span>
      <h3>${post.title}</h3>
      <p>${post.summary || ""}</p>
      <div class="blog-tags">${(post.tags || []).slice(0, 3).map((tag) => `<span>#${tag}</span>`).join("")}</div>
      <a class="btn btn-small" href="blog.html?post=${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}" rel="noopener">Baca artikel</a>
    </article>
  `).join("");
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          entry.target.querySelectorAll(".bar i").forEach((bar) => {
            bar.style.width = `${bar.dataset.w}%`;
          });
        }
      }),
    { threshold: 0.15 },
  );

  document.querySelectorAll(".rv").forEach((element) => observer.observe(element));
}

function setupPointerGlow() {
  addEventListener("pointermove", (event) => {
    const glow = $("#glow");
    glow.style.setProperty("--x", `${event.clientX}px`);
    glow.style.setProperty("--y", `${event.clientY}px`);
  });
}

function setupThemeToggle() {
  $("#theme").onclick = () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme:dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
  };
}

function setupContactForm() {
  $("#send").onclick = () => {
    location.href = `mailto:${P.email}?subject=${encodeURIComponent(
      "Halo dari " + ($("#fn").value || "pengunjung"),
    )}&body=${encodeURIComponent($("#fm").value)}`;
  };
}

function setupInteractiveAbout() {
  const about = document.getElementById("about");
  const portrait = document.getElementById("portrait");
  const frame = portrait.querySelector(".pframe");
  const chips = portrait.querySelectorAll(".pc");
  const cursor = document.createElement("div");
  cursor.className = "cur";
  document.body.appendChild(cursor);

  const state = {
    targetX: 50,
    targetY: 38,
    x: 50,
    y: 38,
    cursorX: 0,
    cursorY: 0,
    pointerX: 0,
    pointerY: 0,
  };

  (function animate() {
    state.x += (state.targetX - state.x) * 0.14;
    state.y += (state.targetY - state.y) * 0.14;
    portrait.style.setProperty("--mx", `${state.x}%`);
    portrait.style.setProperty("--my", `${state.y}%`);

    state.cursorX += (state.pointerX - state.cursorX) * 0.2;
    state.cursorY += (state.pointerY - state.cursorY) * 0.2;
    cursor.style.transform = `translate(${state.cursorX}px,${state.cursorY}px)`;

    requestAnimationFrame(animate);
  })();

  about.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;
    cursor.classList.add("on");
  });

  about.addEventListener("pointerleave", () => {
    cursor.classList.remove("on", "big");
  });

  portrait.addEventListener("pointermove", (event) => {
    const bounds = frame.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    state.targetX = x * 100;
    state.targetY = y * 100;
    frame.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
    frame.style.setProperty("--ry", `${(x - 0.5) * 16}deg`);

    chips.forEach((chip, index) => {
      const distance = (index + 1) * 10;
      chip.style.setProperty("--tx", `${(0.5 - x) * distance}px`);
      chip.style.setProperty("--ty", `${(0.5 - y) * distance}px`);
    });

    cursor.classList.add("big");
  });

  portrait.addEventListener("pointerleave", () => {
    state.targetX = 50;
    state.targetY = 38;
    frame.style.setProperty("--rx", "0deg");
    frame.style.setProperty("--ry", "0deg");

    chips.forEach((chip) => {
      chip.style.setProperty("--tx", "0px");
      chip.style.setProperty("--ty", "0px");
    });

    cursor.classList.remove("big");
  });
}

function setupAttireDetails() {
  const attireItems = [
    ["Jas Hitam", "Jas hitam berpotongan rapi, memberi kesan tegas dan profesional.", 28, 88],
    ["Kemeja Putih", "Kemeja putih bersih sebagai dasar tampilan formal.", 46, 62],
    ["Dasi Abu-abu", "Dasi abu-abu bertekstur dengan tampilan klasik yang serasi dengan setelan formal.", 55, 76],
    ["Jam Tangan", "Jam tangan analog klasik, menambah kesan disiplin dan teliti.", 57, 95],
  ];

  const image = document.getElementById("att-img");
  const attireFrame = document.getElementById("af");
  const attireList = document.getElementById("al");
  const attireSection = document.getElementById("attire");
  image.src = document.querySelector("#portrait img").src;

  const hotspots = [];
  const listItems = [];
  let activeIndex = 0;
  let paused = false;

  function setActiveItem(index) {
    activeIndex = index;
    hotspots.forEach((hotspot, itemIndex) => {
      hotspot.classList.toggle("on", itemIndex === index);
    });
    listItems.forEach((item, itemIndex) => {
      item.classList.toggle("on", itemIndex === index);
    });
  }

  attireItems.forEach((item, index) => {
    const hotspot = document.createElement("button");
    hotspot.className = "hs";
    hotspot.style.left = `${item[2]}%`;
    hotspot.style.top = `${item[3]}%`;
    hotspot.dataset.t = item[0];
    hotspot.textContent = index + 1;
    hotspot.setAttribute("aria-label", item[0]);
    attireFrame.appendChild(hotspot);
    hotspots.push(hotspot);

    const listItem = document.createElement("li");
    listItem.innerHTML = `<i>${index + 1}</i><div><b>${item[0]}</b><span>${item[1]}</span></div>`;
    attireList.appendChild(listItem);
    listItems.push(listItem);

    [hotspot, listItem].forEach((element) => {
      element.addEventListener("mouseenter", () => setActiveItem(index));
      element.addEventListener("click", () => setActiveItem(index));
    });
  });

  setActiveItem(0);
  attireSection.addEventListener("pointerenter", () => {
    paused = true;
  });
  attireSection.addEventListener("pointerleave", () => {
    paused = false;
  });

  setInterval(() => {
    if (!paused) setActiveItem((activeIndex + 1) % attireItems.length);
  }, 3200);
}

async function bootstrap() {
  try {
    if (window.loadSiteData) {
      const loadedData = await window.loadSiteData();
      window.__siteData = loadedData || {};
      P = normalizePortfolio(loadedData || {});
    }
  } catch (error) {
    console.warn("XML data not loaded, using default fallback data.", error);
  }

  renderPortfolio();
  renderBlogSection();
  setupTyping();
  setupRevealAnimation();
  setupPointerGlow();
  setupThemeToggle();
  setupContactForm();
  setupInteractiveAbout();
  setupAttireDetails();
}

document.addEventListener("DOMContentLoaded", bootstrap);
