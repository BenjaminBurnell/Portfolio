// render-projects.js — supports optional data-limit on .repo-grid
import { PROJECTS, FEATURED } from "./projects.js";

const grid = document.querySelector(".repo-grid");
if (!grid) throw new Error("Missing .repo-grid container");

// Read optional limit from DOM (e.g., data-limit="4")
const limitAttr = grid.getAttribute("data-limit");
const LIMIT = limitAttr ? Math.max(0, parseInt(limitAttr, 10) || 0) : 0;

grid.innerHTML = "";

// Reuse your arrow icon (keeps theme)
const LIVE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 -960 960 960" fill="var(--fg)">
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
</svg>`;

function langLabel(p) {
  const t = (p.tech || []).join(" ").toLowerCase();
  if (t.includes("python")) return "Python";
  if (t.includes("javascript")) return "JavaScript";
  if (t.includes("fastapi")) return "Python";
  return "Project";
}
function guessLangDot(p) {
  const t = (p.tech || []).join(" ").toLowerCase();
  if (t.includes("python")) return "python";
  if (t.includes("javascript")) return "js";
  if (t.includes("html")) return "html";
  return "pyml";
}

function makeCard(p) {
  const langDot = guessLangDot(p);
  const liveAnchor = p.live
    ? `<a href="${p.live}" target="_blank" aria-label="Visit Live Demo">${LIVE_ICON}</a>`
    : `<a target="_blank" aria-label="Visit Live Demo">${LIVE_ICON}</a>`;

  // Use live site when available; otherwise use internal route
  const onClick = p.live
    ? `window.open('${p.live}', '_blank')`
    : `openProject('${p.id}')`;

  return `
    <div class="repo-card" onclick="${onClick}">
      <div class="repo-header">
        <h3>${p.title}</h3>
        <div class="repo-links">${liveAnchor}</div>
      </div>

      <p>${p.description}</p>

      <div class="repo-tags">
        ${(p.tech || []).map(t => `<span class="tag">${t}</span>`).join("")}
      </div>

      <div class="repo-meta">
        <span class="lang"><span class="dot ${langDot}"></span> ${langLabel(p)}</span>
      </div>
    </div>
  `;
}


// Sort: order asc, then title
const allSorted = Object.values(PROJECTS).sort((a, b) => {
  const ao = a.order ?? 9999, bo = b.order ?? 9999;
  return ao - bo || a.title.localeCompare(b.title);
});

// FEATURED to the front, then fill from the rest
const featuredSet = new Set(FEATURED);
const featured = allSorted.filter(p => featuredSet.has(p.id));
const rest = allSorted.filter(p => !featuredSet.has(p.id));
const ordered = [...featured, ...rest];

// Apply limit if present (e.g., homepage)
const toRender = LIMIT > 0 ? ordered.slice(0, LIMIT) : ordered;

grid.innerHTML = toRender.map(makeCard).join("");