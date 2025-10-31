# Ubuntu Font Applied

## Summary
All HTML pages have been updated to use Ubuntu fonts for all text elements. This change applies Ubuntu font for regular text and Ubuntu Mono font for code blocks across the entire website.

## Changes Made

### Modified Files:
- `index.html` (root)
- `404.html` (root)
- `docs/index.html`
- `docs/404.html`
- `public/404.html`

### Unchanged Files (Google verification):
- `google3ad91647a867b4ed.html` (root, docs/, public/) - Left untouched as required by Google

### What Was Added:
Each HTML file's `<head>` section now includes:

1. **Google Fonts preconnect links** for faster loading
2. **Ubuntu font family link** with multiple weights and styles
3. **CSS variables and global override** that applies Ubuntu fonts to all text elements

### The Applied Changes:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --ui-font: 'Ubuntu', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
    --mono-font: 'Ubuntu Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }
  html, body, p, span, div, li, a, button, input, select, textarea, table, tr, td, th,
  h1, h2, h3, h4, h5, h6, small, label, nav, footer, header, section, article, aside {
    font-family: var(--ui-font) !important;
  }
  code, pre, kbd, samp { font-family: var(--mono-font) !important; }
</style>
```

## How to Deploy

1. **For GitHub Pages**: Commit and push these changes to your main branch (or whichever branch GitHub Pages is serving from)
2. **For other hosts**: Upload the modified files to your web server
3. **Hard refresh** your website (Ctrl/Cmd+Shift+R) to see the changes

## Rollback Instructions

To revert these changes, remove the following from each HTML file's `<head>` section:
- The three `<link>` tags for Google Fonts
- The entire `<style>` block with font family overrides

## Notes

- Uses `!important` declarations to ensure Ubuntu fonts override existing theme styles
- Includes fallback fonts in case Ubuntu fails to load
- Code elements use Ubuntu Mono for better readability
- Changes are applied globally across all text elements
- Google verification files remain untouched as required

## Privacy Considerations

If you prefer not to use Google Fonts (for privacy or offline use), the fonts can be self-hosted using @font-face declarations with WOFF2 files instead.
