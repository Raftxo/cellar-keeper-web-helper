# 🍷 cellar-keeper-web-helper

### Unofficial web companion for *Cellar Keeper* (EgoTrampoline)

> Stop tabbing out of the game to cross-reference the Steam guide. Pick a varietal, see its bottle layout by floor, column, and row, and place every bottle in seconds.

A lightweight, **dependency-free** static site that shows you **where every bottle belongs** in both cellars — floor, column position, and brand. It does not show shelf numbers because the in-game shelves are not numbered.

Based on the Cellar 1 information in [SteffRenn's Steam guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708) and the Cellar 2 information in [kaorukamiya1980's Steam guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3821795288). The guides are credited as the source; names and spellings are presented consistently here to make them easier to find.

---

## ✨ Features

- 🍷 **Bottle SVG icons in column headers** — each header shows N wine bottle icons + a number, so you instantly see whether the column holds 3, 5, 6 or 9 bottles per brand.
- 📋 **Excel-style table layout** — clean spreadsheet look with proportional column widths (3-bottle columns are wider to fit long brand names like *Mediterranean Pearl*; 9-bottle columns are capped because the icons already convey the size).
- 🔤 **Brands alphabetised within each column** — and distributed across columns of the same bottle count in alphabetical order (e.g. the 8 three-bottle brands in *Pinot Meunier* split 4 + 4 across the two 3-bottle columns, alphabetically).
- 🏢 **Varietals grouped by floor** — Cellar 1: 18 on Floor 1 + 12 on Floor 2; Cellar 2: 45 unique varietals across both floors.
- 🌙 **Light/dark theme** — switch from the header; the preference is shared by both cellar pages and persisted in localStorage.
- 🍷 **Cellar 2 shelf layouts** — full chip layout and shelf tables for all 45 Cellar 2 varietals.
- 🧭 **Neighbouring shelf cards** — selecting a varietal also shows the shelf directly above/below it (or beside it at the edges), so you can place bottles without switching pages.
- 🔗 **Bookmarkable URLs** — `index.html#Sémillon`, `index.html#Pinot%20Grigio`, `index.html#Pomegranate` load the varietal directly.
- 📱 **Mobile-friendly** — collapses to a single column on small screens.
- 💾 **100% offline** — `index.html` + `cellar-keeper-data.js`, no build step, no dependencies, no server.

---

## 🚀 How to use

### 🌐 Try it online

[**the-silent-pulse.com/cellar-keeper-web-helper**](https://the-silent-pulse.com/cellar-keeper-web-helper/)

No sign-up, no install — runs directly in the browser.

### 💾 Run it locally

```bash
git clone https://github.com/Raftxo/cellar-keeper-web-helper.git
cd cellar-keeper-web-helper
# Serve via a local HTTP server (required for ES modules)
python3 -m http.server 8000
# then visit http://localhost:8000
```

You can bookmark a specific varietal: `index.html#Pomegranate` loads with *Pomegranate* already selected.

---

## 📚 The data

| Metric | Cellar 1 | Cellar 2 |
| --- | --- | --- |
| Total bottles | **2,448** | **4,424** |
| Varietal sections | **30** (18 Floor 1 + 12 Floor 2) | **45** |
| Pisos (rows) per shelf | 4 or 5 | 4 or 5 |
| Bottles per column | 3, 5, 6 or 9 | 3, 5, 6 or 9 |

Cellar 1 also has **43 unique brands** across **468 brand×varietal entries**.

### Physical shelf layout

Each varietal has its own column layout measured directly from the in-game shelf. Shelves are not numbered in the game; examples:

| Varietal | Floor | Pisos | Columns |
| --- | --- | --- | --- |
| Sémillon | 1 | 5 | 3 / 9 / 3 / 5 |
| Pinot Grigio | 1 | 4 | 3 / 9 / 5 / 9 / 5 |
| Öküzgözü | 1 | 4 | 5 / 9 / 5 / 9 / 3 |
| Pomegranate | 2 | 5 | 6 / 9 / 6 |
| Mead | 2 | 5 | 6 / 9 / 6 |

The full data lives in [`cellar-keeper-data.js`](./cellar-keeper-data.js) (Cellar 1) and [`cellar-keeper-data-2.js`](./cellar-keeper-data-2.js) (Cellar 2), both ES modules consumed by the pages.

---

## 📝 Names and spellings

The guide is the reference for the bottle and varietal listings. To make names easier to find, this helper uses diacritics for some varietals and consistent display names for a few entries. These are presentation choices; the guide remains the source for the listings and the in-game shelf layouts.

| Name in the guide | Name shown here | Note |
| --- | --- | --- |
| `Semillon` | `Sémillon` | Diacritics included for lookup |
| `Carmenere` | `Carménère` | Diacritics included for lookup |
| `Okuzgozu` | `Öküzgözü` | Diacritics included for lookup |
| `Bogazkere` | `Boğazkere` | Diacritics included for lookup |
| `Pino Grigio` | `Pinot Grigio` | Uses the same varietal name throughout |
| `Kestral Ridge` / `Kestrel` | `Kestrel Ridge` | Consistent display name |
| `Mediterranean` | `Mediterranean Pearl` | Full display name |
| `Verdant` | `Verdant Drop` | Full display name |

### In-game naming note

The guide lists Glera; the helper displays **Novafizz** and adds a ★ note that the bottle label uses that name.

---

## 📁 Project structure

```
cellar-keeper-web-helper/
├── index.html                    # Cellar 1 app — imports cellar-keeper-data.js
├── cellar-2.html                 # Cellar 2 app — imports cellar-keeper-data-2.js
├── theme.js                      # Shared light/dark theme toggle
├── favicon.svg                   # Wine bottle site icon
├── cellar-keeper-data.js         # Cellar 1 canonical data as an ES module
├── cellar-keeper-data-2.js       # Cellar 2 canonical data as an ES module
├── README.md                     # This file
├── LICENSE                       # MIT
└── .gitignore
```

No `node_modules/`, no `package.json`, no build step. The site is served as static files.

---

## 🚢 Deploy to GitHub Pages

GitHub Pages publishes the `main` branch from the repository root. After pushing changes, the site updates automatically at:

[**the-silent-pulse.com/cellar-keeper-web-helper**](https://the-silent-pulse.com/cellar-keeper-web-helper/)

---

## 🙏 Credits

- **Data sources** — [SteffRenn's *Cellar Keeper Cellar 1 Alphabetical Shelf-by-Shelf Guide*](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708) and [kaorukamiya1980's Cellar 2 guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3821795288) on Steam Community.
- **Physical shelf layout** — measured directly from the in-game shelves.
- **Bottle SVG icon** — [wine-bottle by SVG Repo](https://www.svgrepo.com/svg/326735/wine-bottle) (free for commercial use).
- **Project structure inspiration** — [Raftxo/arcane-library-web-helper](https://github.com/Raftxo/arcane-library-web-helper) (MIT) — a similar companion for *Librarian: Tidy Up the Arcane Library!*

---

## ⚠️ Disclaimer

Unofficial fan-made project. **Not affiliated with EgoTrampoline or Valve.** *Cellar Keeper* and all related assets belong to their respective owners. The Steam guides and all credit for the underlying data go to SteffRenn and kaorukamiya1980.

---

# 🇪🇸 Versión en español

**cellar-keeper-web-helper** — Asistente web no oficial para *Cellar Keeper* (EgoTrampoline).

La aplicación permite elegir un varietal y ver la disposición de las botellas por planta, columna y piso. El juego no numera las estanterías, así que no se muestran códigos de estantería. Cellar 1 y Cellar 2 incluyen sus estanterías completas.

- 🌙 **Tema claro/oscuro**, compartido entre ambas páginas y guardado en el navegador.
- 🍷 **Cellar 2 completo**, con sus 45 varietales y enlace de vuelta a Cellar 1.
- 🧭 **Estanterías vecinas**, que se muestran junto a la seleccionada para colocar botellas sin cambiar de página.

### Cómo usarlo

#### 🌐 En línea (recomendado, una vez desplegado)

Abre la [**aplicación en línea**](https://the-silent-pulse.com/cellar-keeper-web-helper/).

Sin registros ni instalación: funciona en el navegador.

#### 💾 En local

```bash
git clone https://github.com/Raftxo/cellar-keeper-web-helper.git
cd cellar-keeper-web-helper
# Servir vía HTTP local (necesario para los módulos ES)
python3 -m http.server 8000
# luego visita http://localhost:8000
```

Puedes marcar un varietal concreto: `index.html#Pomegranate` abre la app con *Pomegranate* ya seleccionado.

### Datos

* **Cellar 1**: 30 secciones de varietales (18 en planta 1 + 12 en planta 2) y **2 448 botellas** en total
* **Cellar 2**: 45 varietales y **4 424 botellas** en total
* Cada estantería tiene 4 o 5 pisos, y columnas de 3, 5, 6 o 9 botellas por marca
* Las estanterías no están numeradas en el juego y no se muestran códigos

### Nombres y ortografía

La guía es la referencia para el listado de vinos y varietales. Para facilitar las búsquedas, aquí se añaden diacríticos en algunos nombres y se muestran de forma uniforme unos pocos nombres de marcas. Son criterios de presentación: la guía sigue siendo la fuente del listado y se mantiene intacta la disposición de las estanterías.

| En la guía | Nombre mostrado | Nota |
| --- | --- | --- |
| `Semillon` | `Sémillon` | Ortografía francesa habitual |
| `Carmenere` | `Carménère` | Ortografía francesa/chilena habitual |
| `Okuzgozu` | `Öküzgözü` | Ortografía turca habitual |
| `Bogazkere` | `Boğazkere` | Ortografía turca habitual |
| `Pino Grigio` | `Pinot Grigio` | Usa el nombre del varietal en toda la aplicación |
| `Kestral Ridge` / `Kestrel` | `Kestrel Ridge` | Forma completa y consistente de la marca |
| `Mediterranean` | `Mediterranean Pearl` | Forma completa de la marca |
| `Verdant` | `Verdant Drop` | Forma completa de la marca |

La guía incluye el varietal Glera; el asistente añade una nota informativa indicando que la botella del juego lleva la etiqueta **Novafizz**.

### Despliegue en GitHub Pages

GitHub Pages publica automáticamente la rama `main` desde la raíz del repositorio. Al subir cambios, la web se actualiza en:

[**the-silent-pulse.com/cellar-keeper-web-helper**](https://the-silent-pulse.com/cellar-keeper-web-helper/)

### Créditos

* **Fuentes de datos** — [Guía de Steam de SteffRenn](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708) (Cellar 1) y [guía de kaorukamiya1980](https://steamcommunity.com/sharedfiles/filedetails/?id=3821795288) (Cellar 2).
* **Disposición física de estanterías** — medidas directamente del juego.
* **Icono SVG de botella** — [SVG Repo](https://www.svgrepo.com/svg/326735/wine-bottle) (uso comercial libre).
* **Estructura del proyecto** — inspirada en [Raftxo/arcane-library-web-helper](https://github.com/Raftxo/arcane-library-web-helper) (MIT).

### Aviso

Proyecto de fans no oficial. **Sin afiliación con EgoTrampoline ni con Valve.** *Cellar Keeper* y todos sus recursos pertenecen a sus respectivos dueños. Las guías originales y todo el mérito de los datos subyacentes son de SteffRenn y kaorukamiya1980.
