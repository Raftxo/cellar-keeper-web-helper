# 🍷 cellar-keeper-web-helper

### Unofficial web companion for *Cellar Keeper* (EgoTrampoline)

> Stop tabbing out of the game to cross-reference the Steam guide. Pick a varietal, see its bottle layout by floor, column, and row, and place every bottle in seconds.

A lightweight, **dependency-free** static site that shows you **where every bottle of the 2,448 in Cellar 1 belongs** — floor, column position, and brand. It does not show shelf numbers because the in-game shelves are not numbered. Cellar 2 has a placeholder page until its details are available.

Based on the Cellar 1 information in [SteffRenn's Steam guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708). The guide is credited as the source; names and spellings are presented consistently here to make them easier to find.

---

## ✨ Features

- 🍷 **Bottle SVG icons in column headers** — each header shows N wine bottle icons + a number, so you instantly see whether the column holds 3, 5, 6 or 9 bottles per brand.
- 📋 **Excel-style table layout** — clean spreadsheet look with proportional column widths (3-bottle columns are wider to fit long brand names like *Mediterranean Pearl*; 9-bottle columns are capped because the icons already convey the size).
- 🔤 **Brands alphabetised within each column** — and distributed across columns of the same bottle count in alphabetical order (e.g. the 8 three-bottle brands in *Pinot Meunier* split 4 + 4 across the two 3-bottle columns, alphabetically).
- 🏢 **Varietals grouped by floor** — Floor 1 (18 varietals) / Floor 2 (12 varietals).
- 🌙 **Light/dark theme** — switch from the header; the preference is shared by both cellar pages and persisted in localStorage.
- 🏗️ **Cellar 2 placeholder** — linked from Cellar 1 and includes a link back.
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

| Metric | Value |
| --- | --- |
| Cellar | 1 (the only one covered by the source guide) |
| Total bottles | **2,448** ✓ (matches the store page) |
| Varietal sections | **30** (18 on Floor 1 + 12 on Floor 2) |
| Unique brands | **43** |
| Brand×varietal entries | **468** |
| Pisos (rows) per shelf | 4 or 5 (varies per varietal) |
| Bottles per column | 3, 5, 6 or 9 (varies per column) |

### Physical shelf layout

Each varietal has its own column layout measured directly from the in-game shelf. Shelves are not numbered in the game; examples:

| Varietal | Floor | Pisos | Columns |
| --- | --- | --- | --- |
| Sémillon | 1 | 5 | 3 / 9 / 3 / 5 |
| Pinot Grigio | 1 | 4 | 3 / 9 / 5 / 9 / 5 |
| Öküzgözü | 1 | 4 | 5 / 9 / 5 / 9 / 3 |
| Pomegranate | 2 | 5 | 6 / 9 / 6 |
| Mead | 2 | 5 | 6 / 9 / 6 |

The full list is in [`cellar-keeper-data.json`](./cellar-keeper-data.json) (canonical) / [`cellar-keeper-data.js`](./cellar-keeper-data.js) (ES module consumed by [`index.html`](./index.html)).

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
├── index.html                    # Cellar 1 app — imports data from cellar-keeper-data.js
├── cellar-2.html                 # Cellar 2 placeholder
├── theme.js                      # Shared light/dark theme toggle
├── favicon.svg                   # Wine bottle site icon
├── cellar-keeper-data.js         # Canonical data as an ES module
├── cellar-keeper-data.json       # Same data as JSON, for reference/other tools
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

- **Data source** — [SteffRenn's *Cellar Keeper Cellar 1 Alphabetical Shelf-by-Shelf Guide*](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708) on Steam Community.
- **Physical shelf layout** — measured directly from the in-game shelves.
- **Bottle SVG icon** — [wine-bottle by SVG Repo](https://www.svgrepo.com/svg/326735/wine-bottle) (free for commercial use).
- **Project structure inspiration** — [Raftxo/arcane-library-web-helper](https://github.com/Raftxo/arcane-library-web-helper) (MIT) — a similar companion for *Librarian: Tidy Up the Arcane Library!*

---

## ⚠️ Disclaimer

Unofficial fan-made project. **Not affiliated with EgoTrampoline or Valve.** *Cellar Keeper* and all related assets belong to their respective owners. The Steam guide and all credit for the underlying data go to SteffRenn.

---

# 🇪🇸 Versión en español

**cellar-keeper-web-helper** — Asistente web no oficial para *Cellar Keeper* (EgoTrampoline).

La aplicación permite elegir un varietal y ver la disposición de las botellas por planta, columna y piso. El juego no numera las estanterías, así que no se muestran códigos de estantería. Cellar 2 tiene una página provisional hasta que se conozcan sus datos.

- 🌙 **Tema claro/oscuro**, compartido entre ambas páginas y guardado en el navegador.
- 🏗️ **Enlace a Cellar 2**, con enlace de vuelta a Cellar 1.

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

* **30 secciones** de varietales: 18 en planta 1 + 12 en planta 2
* **2 448 botellas** en total (coincide con la store page del juego)
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

* **Fuente de datos** — [Guía de Steam de SteffRenn](https://steamcommunity.com/sharedfiles/filedetails/?id=3779159708) (Cellar 1).
* **Disposición física de estanterías** — medidas directamente del juego.
* **Icono SVG de botella** — [SVG Repo](https://www.svgrepo.com/svg/326735/wine-bottle) (uso comercial libre).
* **Estructura del proyecto** — inspirada en [Raftxo/arcane-library-web-helper](https://github.com/Raftxo/arcane-library-web-helper) (MIT).

### Aviso

Proyecto de fans no oficial. **Sin afiliación con EgoTrampoline ni con Valve.** *Cellar Keeper* y todos sus recursos pertenecen a sus respectivos dueños. La guía original y todo el mérito de los datos subyacentes son de SteffRenn.
