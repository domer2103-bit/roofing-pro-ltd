# Roofing Pro Ltd — Website

A 2-page static website (home page + quote confirmation) built with plain HTML, CSS, JavaScript, and your logo. No build tools or frameworks required.

## Files
- `index.html` — both pages (home + confirmation), toggled by JS
- `style.css` — all styling, themed to your logo's green/navy palette
- `script.js` — multi-step form logic and page switching
- `logo.png` — your logo, used in the nav, footer, and confirmation page

## Before you deploy — things to double check

1. **Phone number**: replace `0151 555 0199` and the matching `tel:01515550199` links throughout `index.html` with your real number.
2. **Address & email**: update the footer address and `quotes@roofingpro.co.uk` with your real details.
3. **Form submissions**: right now the quote form and footer form don't send anywhere — submitting just shows the confirmation screen. To actually receive leads:
   - Sign up at [formspree.io](https://formspree.io) (free tier available), create a form, and replace `https://formspree.io/f/YOUR_FORM_ID` in both `<form action="...">` attributes in `index.html` with your real endpoint.
   - In `script.js`, remove the `e.preventDefault();` line inside the `quoteForm` submit handler so the browser actually POSTs the data before showing the confirmation page.
   - Alternatively, connect the forms to a CRM, Zapier webhook, or your own backend.

## Deploying with GitHub Pages

1. Push all four files (`index.html`, `style.css`, `script.js`, `logo.png`) to the root of your GitHub repo — same `git init` / `git add .` / `git commit` / `git push` flow you already used.
2. On GitHub, go to your repository → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Set **Branch** to `main`, folder `/ (root)`, then **Save**.
5. Wait 1–2 minutes — your live URL will appear at the top of that same screen:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

That link is public and ready to send to customers.

## Testing checklist before sharing the link

- [ ] Phone numbers are correct and tap-to-call works on a real mobile phone
- [ ] Logo displays correctly in the nav, footer, and confirmation screen
- [ ] Quote form submissions are actually being delivered to you (test it yourself first)
- [ ] Site looks correct on a phone, not just desktop
- [ ] Company name, address and email are accurate throughout
