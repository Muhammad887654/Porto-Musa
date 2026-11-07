const P={
name:"Muhamad Saefuloh",
roles:["Data Analyst","Web Developer","Dashboard Builder","Problem Solver"],
tagline:"Saya mengubah data menjadi insight lewat dashboard interaktif, dan membangun aplikasi web yang fungsional.",
linkedin:"https://www.linkedin.com/in/muhamad-saefuloh-537a162b7",
email:"emailanda@contoh.com",
about:"Saya senang memecah masalah rumit menjadi bagian-bagian kecil, membaca pola dari data, lalu mengubahnya menjadi keputusan yang bisa dijalankan. Lewat dashboard e-commerce dan aplikasi web yang saya bangun, saya melatih cara berpikir analitis dan pemecahan masalah dari hulu ke hilir.",
steps:[["01","Pahami Masalah","Merumuskan pertanyaan dan tujuan yang jelas."],["02","Olah Data","Membersihkan dan menyusun data agar siap dianalisis."],["03","Temukan Insight","Membaca tren dan pola lewat visualisasi."],["04","Ambil Solusi","Menerjemahkan temuan menjadi tindakan nyata."]],
stats:[["2","Proyek GitHub"],["Python","Data & Dashboard"],["Node.js","Web Backend"],["Docker","Deployment"]],
skills:[["Python & Data Analysis",80],["Dashboard (Streamlit)",80],["Node.js",70],["Database / Supabase",65],["Docker",60],["Git & GitHub",75]],
projects:[
["Dashboard E-Commerce","Dashboard Streamlit untuk memvisualisasikan data e-commerce: tren penjualan, kategori produk teratas, status pesanan, lokasi pelanggan, tren pendapatan, skor ulasan, dan waktu pengiriman. Dikemas dengan Docker.","Data",["Python","Streamlit","Docker"],"https://github.com/Muhammad887654/Dasboard-E-comerce"],
["QAF Blog","Blog dengan registrasi email dan password, profil akun, serta postingan privat anggota. Dilengkapi antarmuka QAF Berbagi untuk kampanye donasi, unggah bukti, dan panel bendahara dengan Supabase.","Web",["Node.js","Supabase","Auth"],"https://github.com/Muhammad887654/qaf-blog"]],
exp:[
["2024 – Sekarang","Posisi / Peran Anda","Nama Perusahaan","Tuliskan pencapaian utama di sini."],
["2022 – 2024","Posisi Sebelumnya","Nama Organisasi","Tanggung jawab dan hasil yang diraih."],
["2019 – 2023","Pendidikan","Nama Universitas / Sekolah","Jurusan dan prestasi."]]
};
const $=s=>document.querySelector(s);
$("#logo").textContent=P.name.split(" ").map(w=>w[0]).join("")+"."; $("#name").textContent=P.name;
$("#tagline").textContent=P.tagline;$("#about-t").textContent=P.about;$("#li").href=P.linkedin;
$("#fn2").textContent=P.name;$("#yr").textContent=new Date().getFullYear();
$("#steps").innerHTML=P.steps.map(t=>`<div class="st"><b>${t[0]}</b><h3>${t[1]}</h3><p>${t[2]}</p></div>`).join("");
$("#stats").innerHTML=P.stats.map(s=>`<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
$("#sk").innerHTML=P.skills.map(s=>`<div class="skill"><div><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><i data-w="${s[1]}"></i></div></div>`).join("");
$("#pj").innerHTML=P.projects.map(p=>`<div class="card" data-c="${p[2]}"><h3>${p[0]}</h3><p>${p[1]}</p>${p[3].map(t=>`<span class="tag">#${t}</span>`).join("")}<p style="margin:14px 0 0"><a class="tag" href="${p[4]}" target="_blank" rel="noopener">Lihat kode di GitHub ↗</a></p></div>`).join("");
const cats=["Semua",...new Set(P.projects.map(p=>p[2]))];
$("#chips").innerHTML=cats.map((c,i)=>`<button class="chip${i?"":" on"}">${c}</button>`).join("");
$("#chips").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("on"));b.classList.add("on");document.querySelectorAll(".card").forEach(c=>c.classList.toggle("hide",b.textContent!=="Semua"&&c.dataset.c!==b.textContent))};
$("#tl").innerHTML=P.exp.map(e=>`<div class="ti"><small>${e[0]}</small><h3>${e[1]}</h3><b style="font-size:.9rem">${e[2]}</b><p>${e[3]}</p></div>`).join("");
// typing
let ri=0,ci=0,del=false;const ty=$("#typed");
(function tick(){const r=P.roles[ri];ty.textContent=r.slice(0,ci);
if(!del&&ci===r.length){del=true;return setTimeout(tick,1400)}
if(del&&ci===0){del=false;ri=(ri+1)%P.roles.length}
ci+=del?-1:1;setTimeout(tick,del?40:80)})();
// reveal + bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll(".bar i").forEach(b=>b.style.width=b.dataset.w+"%")}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
// glow
addEventListener("pointermove",e=>{const g=$("#glow");g.style.setProperty("--x",e.clientX+"px");g.style.setProperty("--y",e.clientY+"px")});
// theme
$("#theme").onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};
// contact
$("#send").onclick=()=>{location.href=`mailto:${P.email}?subject=${encodeURIComponent("Halo dari "+($("#fn").value||"pengunjung"))}&body=${encodeURIComponent($("#fm").value)}`};

// Foto interaktif + kursor di bagian Tentang
(()=>{
const ab=document.getElementById("about"),pt=document.getElementById("portrait"),fr=pt.querySelector(".pframe"),chips=pt.querySelectorAll(".pc");
const cur=document.createElement("div");cur.className="cur";document.body.appendChild(cur);
const st={tx:50,ty:38,x:50,y:38,cx:0,cy:0,mx:0,my:0};
(function loop(){
st.x+=(st.tx-st.x)*.14;st.y+=(st.ty-st.y)*.14;
pt.style.setProperty("--mx",st.x+"%");pt.style.setProperty("--my",st.y+"%");
st.cx+=(st.mx-st.cx)*.2;st.cy+=(st.my-st.cy)*.2;
cur.style.transform="translate("+st.cx+"px,"+st.cy+"px)";
requestAnimationFrame(loop)})();
ab.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;st.mx=e.clientX;st.my=e.clientY;cur.classList.add("on")});
ab.addEventListener("pointerleave",()=>cur.classList.remove("on","big"));
pt.addEventListener("pointermove",e=>{
const r=fr.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
st.tx=px*100;st.ty=py*100;
fr.style.setProperty("--rx",((.5-py)*14)+"deg");fr.style.setProperty("--ry",((px-.5)*16)+"deg");
chips.forEach((c,i)=>{const k=(i+1)*10;c.style.setProperty("--tx",((.5-px)*k)+"px");c.style.setProperty("--ty",((.5-py)*k)+"px")});
cur.classList.add("big")});
pt.addEventListener("pointerleave",()=>{
st.tx=50;st.ty=38;fr.style.setProperty("--rx","0deg");fr.style.setProperty("--ry","0deg");
chips.forEach(c=>{c.style.setProperty("--tx","0px");c.style.setProperty("--ty","0px")});
cur.classList.remove("big")});
})();

// Keterangan berpakaian (hotspot di foto)
(()=>{
const A=[["Jas Hitam","Jas hitam berpotongan rapi, memberi kesan tegas dan profesional.",28,88],["Kemeja Putih","Kemeja putih bersih sebagai dasar tampilan formal.",46,62],["Dasi Abu-abu","Dasi abu-abu bermotif halus, aksen yang tetap kalem dan elegan.",55,76],["Sapu Tangan Saku","Pocket square putih, detail kecil yang membuat penampilan lebih rapi.",69,80],["Jam Tangan","Jam tangan analog klasik, menambah kesan disiplin dan teliti.",57,94]];
const img=document.getElementById("att-img"),af=document.getElementById("af"),al=document.getElementById("al"),sec=document.getElementById("attire");
img.src=document.querySelector("#portrait img").src;
const hs=[],li=[];let cur=0,paused=false;
function set(i){cur=i;hs.forEach((h,k)=>h.classList.toggle("on",k===i));li.forEach((l,k)=>l.classList.toggle("on",k===i))}
A.forEach((a,i)=>{
const b=document.createElement("button");b.className="hs";b.style.left=a[2]+"%";b.style.top=a[3]+"%";b.dataset.t=a[0];b.textContent=i+1;b.setAttribute("aria-label",a[0]);af.appendChild(b);hs.push(b);
const l=document.createElement("li");l.innerHTML="<i>"+(i+1)+"</i><div><b>"+a[0]+"</b><span>"+a[1]+"</span></div>";al.appendChild(l);li.push(l);
[b,l].forEach(el=>{el.addEventListener("mouseenter",()=>set(i));el.addEventListener("click",()=>set(i))});
});
set(0);
sec.addEventListener("pointerenter",()=>paused=true);sec.addEventListener("pointerleave",()=>paused=false);
setInterval(()=>{if(!paused)set((cur+1)%A.length)},3200);
})();
