# Master Content Update Guide

This guide covers how to edit every visible part of the **Being Architect** website.

## 🟢 1. The Logo
The logo is currently text-based.
- **File**: `src/components/Navbar.tsx`
- **Search for**: `BEING` and `Architect` inside the code.
- **To Image**: If you want to replace it with an image logo:
    1. Save your logo as `logo.png` in the `public/` folder.
    2. In `Navbar.tsx`, replace the text `<div>...</div>` with `<img src="/logo.png" alt="Logo" className="w-32" />`.

## 🟡 2. Hero Section (Home Page Top)
The big image and text when you first open the site.
- **File**: `src/components/Hero.tsx`
- **Main Title**: Look for `<h1 ...>`. currently "SHAPING<br />SILENCE".
- **Subtitle**: Look for `<p ...>`. currently "ARCHITECTURE THAT SPEAKS...".
- **Background Image**: Look for `backgroundImage: 'url(...)'`. You can change this URL to an image in your `public` folder (e.g., `url(/my-hero.jpg)`).

## 🔵 3. Projects & Portfolio
- **File**: `src/constants.tsx`
- **Instructions**: Scroll to `export const PROJECTS`.
- **Action**: Edit titles, descriptions, images, and categories here. This updates the Home page, All Projects page, and Detail pages automatically.

## 🟣 4. The Studio (Architects)
- **File**: `src/components/About.tsx`
- **Instructions**: Scroll to `const ARCHITECTS`.
- **Action**: Edit names, bios, stats, and images here. Adding a new person here automatically adds them to the carousel.

## 🟠 5. Testimonials & Process
- **File**: `src/constants.tsx`
- **Instructions**:
    - Scroll to `export const TESTIMONIALS` to edit client reviews.
    - Scroll to `export const PROCESS_STEPS` to edit the "Discovery, Design, etc." steps.

## 🟤 6. Contact & Footer
- **Contact Page**: `src/components/Contact.tsx`
    - Edit email, phone number, and address text here.
- **Footer (Bottom of site)**: `src/components/Footer.tsx`
    - **Edit Links**: Look for code like `<a href="#" ...>`. Change `#` to your actual profile URL (e.g., `https://instagram.com/beingarchitect`).
    - **Add New Link**:
        1.  Copy an existing `<a ...> ... </a>` block.
        2.  Paste it next to the others.
        3.  Change the icon (e.g., `<Twitter size={18} />`). *Note: You must import new icons from 'lucide-react' at the top of the file.*

## 🖼️ 7. Managing Images
**I have created a `public` folder for you.**

- **Where is it?**: Look in your file explorer on the left. You will see a folder named `public`. Inside it, there is a `projects` folder.
- **How to use it**:
    1.  Drag your image (e.g., `house.jpg`) into `public/projects/`.
    2.  In your code (`constants.tsx`), change the `imageUrl` to: `imageUrl: '/projects/house.jpg'`.
- **Note**: You don't need to import these images. Just use the string path starting with `/`.

## 🧠 8. SEO & Browser Tab Info
- **Page Title**:
    - **File**: `index.html`
    - **Action**: Look for `<title>BEING ARCHITECT ...</title>` and change the text.
- **Favicon (Tab Icon)**:
    - **File**: `public/vite.svg` (or similar).
    - **Action**: Replace the file in `public/` with your own `favicon.ico` or `logo.svg`.

## ⚠️ Important Note
- **Do not touch**: Files ending in `.css` or `tailwind.config` unless you want to change the core design colors/fonts.
- **Always Save**: `Cmd+S` or `Ctrl+S` to see changes.

## 🛠️ Quick Cheat Sheet
| Content to Edit | File Location |
| :--- | :--- |
| **Projects** | `src/constants.tsx` |
| **Architects** | `src/components/About.tsx` |
| **Logo/Nav** | `src/components/Navbar.tsx` |
| **Hero Title/Img** | `src/components/Hero.tsx` |
| **Footer/Socials** | `src/components/Footer.tsx` |
| **Contact Info** | `src/components/Contact.tsx` |
| **Tab Title (SEO)** | `index.html` |
