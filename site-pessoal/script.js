const GITHUB_USER = "go-lissandro";

// Descrições para repositórios que estão sem descrição no GitHub
const DESCRICOES = {
  "impressora3d": "Análise de mercado, planilha de preços e anúncios para um negócio de impressão 3D.",
  "vitrini": "Página de vitrine em HTML.",
  "estudo-sheetcoin": "Estudo em Java.",
  "pratica-java-basico": "Exercícios de fundamentos da linguagem Java.",
  "monero-studing": "Estudos sobre a criptomoeda Monero com Python.",
  "util_ferramentas": "Coleção de ferramentas utilitárias em TypeScript.",
  "bank_fast_api": "API bancária construída com FastAPI.",
  "testTecnicoProjeto": "Projeto desenvolvido para teste técnico.",
  "cade-meu-pix-front": "Frontend do Cadê Meu Pix, aplicação de controle de cobrança.",
  "plataformEnglishFront": "Frontend de uma plataforma de ensino de inglês.",
  "plataformEnglish": "Plataforma de ensino de inglês.",
  "praticas_fast_api": "Práticas e exemplos com o framework FastAPI.",
};

const DESTAQUES = ["baseApi", "cade-meu-pix", "nexus_learn", "cade-meu-pix-front", "bank_fast_api", "impressora3d"];

const CORES = {
  Go: "#00ADD8", Python: "#3572A5", TypeScript: "#3178c6", JavaScript: "#f1e05a",
  Java: "#b07219", HTML: "#e34c26", Shell: "#89e051", Outros: "#6e7681",
};

const SKILLS = ["Go", "Fiber", "GORM", "Python", "FastAPI", "TypeScript", "JavaScript", "React", "Node.js",
  "Java", "Docker", "Git", "IA / NotebookLM", "Segurança", "Linux"];

let repos = (window.REPOS_SNAPSHOT || []).slice();
let filtroLang = "Todos";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nomeBonito = (n) => n.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
const dataBR = (iso) => new Date(iso).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });

function cardProjeto(r) {
  const lang = r.language || "Outros";
  const desc = r.description || DESCRICOES[r.name] || "Projeto pessoal.";
  const demo = r.homepage ? `<a href="${esc(r.homepage)}" target="_blank" rel="noopener">Demo ↗</a>` : "";
  return `
    <article class="card project">
      <div class="project-top">
        <span class="folder">📁</span>
        <div class="project-links">${demo}<a href="${esc(r.html_url)}" target="_blank" rel="noopener">Código ↗</a></div>
      </div>
      <h3>${esc(nomeBonito(r.name))}</h3>
      <p>${esc(desc)}</p>
      <div class="project-meta">
        <span class="tag"><span class="lang-dot" style="background:${CORES[lang] || CORES.Outros}"></span>${esc(lang)}</span>
        ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
        ${r.forks_count ? `<span>⑂ ${r.forks_count}</span>` : ""}
        <span>Atualizado em ${dataBR(r.pushed_at)}</span>
      </div>
    </article>`;
}

function contarLinguagens() {
  const c = {};
  repos.forEach((r) => { const l = r.language || "Outros"; c[l] = (c[l] || 0) + 1; });
  return Object.entries(c).sort((a, b) => b[1] - a[1]);
}

function renderTudo() {
  // Destaques
  const dest = DESTAQUES.map((n) => repos.find((r) => r.name === n)).filter(Boolean);
  $("#featured").innerHTML = dest.map(cardProjeto).join("");

  // Estatísticas
  const langs = contarLinguagens().filter(([l]) => l !== "Outros");
  const desde = repos.reduce((m, r) => (r.created_at < m ? r.created_at : m), new Date().toISOString());
  $("#stats").innerHTML = `
    <li><strong>${repos.length}</strong><span>projetos pessoais</span></li>
    <li><strong>${langs.length}</strong><span>linguagens</span></li>
    <li><strong>${new Date(desde).getFullYear()}</strong><span>no GitHub desde</span></li>`;

  // Filtros
  const opcoes = ["Todos", ...contarLinguagens().map(([l]) => l)];
  $("#filters").innerHTML = opcoes.map((l) => `<button class="chip ${l === filtroLang ? "active" : ""}" data-lang="${esc(l)}">${esc(l)}</button>`).join("");
  renderProjetos();

  // Barra de linguagens
  const total = repos.length || 1;
  const lc = contarLinguagens();
  $("#lang-bar").innerHTML = lc.map(([l, n]) => `<span title="${esc(l)}" style="flex:${n};background:${CORES[l] || CORES.Outros}"></span>`).join("");
  $("#lang-legend").innerHTML = lc.map(([l, n]) => `<li><span class="lang-dot" style="background:${CORES[l] || CORES.Outros}"></span>${esc(l)} <span class="muted">${Math.round((n / total) * 100)}%</span></li>`).join("");

  // Linha do tempo: projetos mais antigos -> mais recentes, agrupados por mês
  const porData = repos.slice().sort((a, b) => a.created_at.localeCompare(b.created_at));
  const grupos = new Map();
  porData.forEach((r) => {
    const k = dataBR(r.created_at);
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(r);
  });
  $("#timeline").innerHTML = [...grupos].reverse().map(([mes, rs]) => `
    <li><time class="mono">${esc(mes)}</time>
      <h4>${rs.length} ${rs.length > 1 ? "projetos iniciados" : "projeto iniciado"}</h4>
      <p class="muted">${rs.map((r) => `<a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(nomeBonito(r.name))}</a>`).join(" · ")}</p>
    </li>`).join("");
}

function renderProjetos() {
  const q = $("#search").value.trim().toLowerCase();
  const lista = repos.filter((r) => {
    const lang = r.language || "Outros";
    const texto = `${r.name} ${r.description || ""} ${DESCRICOES[r.name] || ""} ${lang}`.toLowerCase();
    return (filtroLang === "Todos" || lang === filtroLang) && (!q || texto.includes(q));
  });
  $("#all-projects").innerHTML = lista.map(cardProjeto).join("");
  $("#empty").hidden = lista.length > 0;
}

// Atualiza com dados ao vivo da API do GitHub: só repositórios do próprio usuário, sem forks
async function sincronizar() {
  const status = $("#sync-status");
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=pushed&per_page=100`);
    if (!res.ok) throw new Error(res.status);
    const dados = await res.json();
    const proprios = dados.filter((r) => r.owner?.login === GITHUB_USER && r.owner?.type === "User" && !r.fork);
    if (proprios.length) {
      repos = proprios;
      renderTudo();
      status.textContent = "· sincronizado com o GitHub";
    }
  } catch {
    status.textContent = "";
  }
}

// Roteamento por hash
function rota() {
  const id = (location.hash || "#inicio").slice(1);
  const alvo = document.getElementById(id) && document.getElementById(id).classList.contains("page") ? id : "inicio";
  document.querySelectorAll(".page").forEach((p) => (p.hidden = p.id !== alvo));
  document.querySelectorAll(".nav-links a").forEach((a) => a.classList.toggle("active", a.dataset.route === alvo));
  $(".nav-links").classList.remove("open");
  $(".menu-btn").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0 });
}

// Efeito de digitação
function digitar() {
  const frases = ["Desenvolvedor Backend em Go", "APIs com Python e FastAPI", "Frontends em TypeScript", "Estudante de segurança e blockchain"];
  let i = 0, j = 0, apagando = false;
  const el = $("#typed");
  (function tick() {
    const f = frases[i];
    el.textContent = f.slice(0, j);
    if (!apagando && j < f.length) j++;
    else if (apagando && j > 0) j--;
    else if (!apagando) { apagando = true; return setTimeout(tick, 1600); }
    else { apagando = false; i = (i + 1) % frases.length; }
    setTimeout(tick, apagando ? 35 : 70);
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $("#skills").innerHTML = SKILLS.map((s) => `<span class="skill">${esc(s)}</span>`).join("");
  $("#search").addEventListener("input", renderProjetos);
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    filtroLang = b.dataset.lang;
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
    renderProjetos();
  });
  $(".menu-btn").addEventListener("click", () => {
    const aberto = $(".nav-links").classList.toggle("open");
    $(".menu-btn").setAttribute("aria-expanded", String(aberto));
  });
  window.addEventListener("hashchange", rota);
  renderTudo();
  rota();
  digitar();
  sincronizar();
});
