# BAIST Odisha Computer Academy — Website Source Code

Responsive static website built with HTML, CSS, and JavaScript. Brand colours:
- Soft ice: `#F3F4F6`
- Deep navy: `#03045E`
- Cyan: `#0096C7`

## Files
- `index.html` — homepage and all main sections
- `styles.css` — visual system and responsive/mobile layout
- `script.js` — mobile navigation, WhatsApp, directions, and year
- `assets/favicon.svg` — simple favicon

## Before publishing
1. **Confirm the official WhatsApp number.** Set `WHATSAPP_NUMBER` in `script.js` to the country code plus number, digits only. The example format in comments is not an actual academy number.
2. Verify the phone numbers, email, address and exact map pin.
3. Confirm which course names are currently offered. The listed course names are enquiry prompts, not a promise that all are available.
4. Add the academy's approved logo and genuine photos if available.
5. Test all contact actions and page layouts on a phone.

## Run / deploy
Open `index.html` in a browser for a quick preview. Upload the folder to a static hosting provider or web server, preserving the folder structure. A custom domain can be connected through the hosting provider.

## Google Sites limitation
Google Sites does not import a complete multi-page HTML/CSS/JS website as a native site. Host this source separately and link to it from Google Sites, or embed a hosted page where supported. Whole-site embeds may have scrolling or mobile sizing limitations.

## Notes
- No external libraries are required.
- The map link searches the provided address; it does not claim the exact pin is verified.
- A live enquiry form is not included because the form destination and response-handling process need academy confirmation. A Google Form can be linked or embedded after it is created and tested.


## Added logo and Google Form
- Supplied logo included at `assets/belabhumi-academy-logo.jpeg` and displayed in the site header.
- Google Form link `https://forms.gle/d61p3R3VDD7raMpv9` is added as an enquiry section/button.
- The logo reads “Belabhumi Academy of Integrated Studies and Technology” while the site brand reads “BAIST Odisha Computer Academy”. Confirm they are intended to be used together before publishing.
- The short Google Forms URL is linked directly rather than guessing an embed URL. To embed the form itself, copy the official embed URL from Google Forms using Send → Embed HTML.


## Embedded form note
The page now tries to show the supplied short Google Forms URL inside an iframe and provides a direct-open fallback button. Google Forms short links may redirect in a way that blocks iframe embedding. If the form does not display, open the form in Google Forms, choose **Send → Embed HTML (`<>`)**, and replace the iframe `src` in `index.html` with the exact official embed URL (usually a `docs.google.com/forms/.../viewform?embedded=true` URL). The form's sharing settings must also allow respondents to access it.


## Google Form removed
The Google Form link, iframe, enquiry section, and its navigation link have been removed from this version. The supplied logo, course enquiry cards, contact details, phone links, and Google Maps directions remain.


## WhatsApp number configured
WhatsApp buttons are configured for **7077335811** using India country code `91` (`917077335811` in the WhatsApp URL format). Test the buttons on a phone before publishing.
