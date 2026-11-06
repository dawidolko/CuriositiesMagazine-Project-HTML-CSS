# Curiosities Magazine

> 📰 **Sixteen pages, no JavaScript** — a fully responsive magazine and shop template built with HTML and CSS alone

**Curiosities Magazine** is a website template for a magazine that also sells: home, articles, three product pages with their own checkout screens, gallery, services, about, FAQ, contact and privacy — sixteen pages in all. Every layout, every hover state and every breakpoint is CSS — no scripted behaviour anywhere, which was the constraint it was built under.

It was produced for an internet technologies course and carries the evidence: W3C validation, responsiveness testing across viewports, a SEO report and KSS-style documentation of the stylesheets, all written up in this repository.

![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)
![No JavaScript](https://img.shields.io/badge/JavaScript-none-lightgrey)
![JSON-LD](https://img.shields.io/badge/Schema.org-JSON--LD-F5A623)
![W3C](https://img.shields.io/badge/W3C-validated-005A9C?logo=w3c&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Live:** [projekt1.dawidolko.pl](https://projekt1.dawidolko.pl)

---

## 🎯 Key Features

- **No behavioural JavaScript** — the menu, the galleries and the interactive states are CSS. The only `<script>` in the project is a JSON-LD block describing the site to search engines, which executes nothing.
- **Sixteen pages, one visual language** — each page gets its own stylesheet (`styleIndex.css`, `styleGallery.css`, `stylePay.css` …), so page-specific rules cannot leak into a neighbour.
- **A full purchase path** — three product pages, each with its own checkout screen, plus a shared payment page. The flow is complete rather than stopping at "add to cart".
- **Forms with HTML validation** — contact and payment use the browser's own constraint validation: required fields, types and patterns, no script needed.
- **Responsive without a framework** — tested across desktop, tablet and phone viewports with no horizontal scrolling and no clipped edges; the report is in this repository.
- **Semantic markup for SEO** — proper heading order, meta tags and landmark elements, with the SEO report included.
- **Documented stylesheets** — KSS-style comments describe the components, so the template can be modified without reverse-engineering the CSS.
- **W3C validated** — both the markup and the stylesheets pass validation.

---

## 🧩 The Pages

| Page                                                   | What it holds                              |
| ------------------------------------------------------ | ------------------------------------------ |
| `index.html`                                           | Home, with featured articles.              |
| `ourProducts.html`                                     | The product listing.                       |
| `productFirst.html` · `productSecond.html` · `productThird.html` | Individual product pages.        |
| `payFirstProduct.html` · `paySecondProduct.html` · `payThirdProduct.html` | Per-product checkout.    |
| `pay.html`                                             | The shared payment screen.                 |
| `gallery.html`                                         | Image gallery.                             |
| `services.html`                                        | What is offered.                           |
| `aboutUs.html`                                         | About the magazine.                        |
| `faq.html`                                             | Frequently asked questions.                |
| `contact.html`                                         | Contact form.                              |
| `privacy.html`                                         | Privacy notice.                            |

---

## 🛠️ Technology Stack

| Technology | Role                                                          |
| ---------- | ------------------------------------------------------------- |
| **HTML5**  | Sixteen semantic pages with landmarks and proper heading order. |
| **CSS3**   | Layout, responsiveness, states and transitions — one stylesheet per page. |
| **KSS**    | Documentation comments inside the stylesheets.                |
| **JSON-LD** | Schema.org description of the site for search engines.       |

---

## 🚀 Getting Started

There is nothing to build and nothing to install.

```bash
git clone https://github.com/dawidolko/CuriositiesMagazine-Project-HTML-CSS.git
cd CuriositiesMagazine-Project-HTML-CSS
open index.html
```

Or serve the directory:

```bash
python3 -m http.server   # http://localhost:8000
```

---

## 📁 Project Structure

```
CuriositiesMagazine-Project-HTML-CSS/
├── index.html                 # home
├── ourProducts.html           # product listing
├── productFirst.html  productSecond.html  productThird.html
├── payFirstProduct.html  paySecondProduct.html  payThirdProduct.html
├── pay.html                   # shared payment screen
├── gallery.html  services.html  aboutUs.html  faq.html
├── contact.html  privacy.html
├── css/                       # one stylesheet per page, KSS-documented
├── img/                       # magazine and product images
└── docs/                      # course documentation, validation and SEO reports
```

A Polish version of this document is in [README_POLISH.md](README_POLISH.md).

---

## ♿ Accessibility

An accessibility panel in the corner of every page changes text size, contrast, font and motion, and remembers the choice on the device. It sits on top of the markup and does not replace accessible markup.

## 📄 License

MIT © [Dawid Olko](https://dawidolko.pl)
