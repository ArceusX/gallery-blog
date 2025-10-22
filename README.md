# React Personal Gallery & Blog App

Your everyday gallery, that you can adopt to a variety of uses: as a "How To" guide,
a photo blog, event calendar, or portfolio showcase. Video is supported and the interface is mobile-friendly.

Everything is coded as a **React** component, so you can easily add new **organized content** with one line of code.

Other pages & functionalities facilitate a full blog. See **Features** 


## Pages

1. `Home` page (/) opens to a scrolldown gallery. Users can filter by tags or dates
2. `About` page has a working Donate box (coded as a component that you can put on any page).
3. `Calendar` Page allows you to tag events and shows the lunar day equivalent of a day
4. `Blog` Page shows posts that open to their individual pages on click and allows users to filter by tags
5. `Contact` Page allows a user to send emails that can be forwarded to you via Gmail or Sendgrid

## Additional Features
1. The app supports multiple languages. Create different versions of your content and the app dynamically loads the version that matches the user’s selected language. If no language-specific version is available, it defaults to English.
2. Clicking on image or video opens a modal that shows the full item just like a gallery.   
   A user can press the left (<), right (>) keys to scroll between items, or Space or Esc to close the modal
4. The code applies all React best practices to maximize site performance.

## Live Demo

View the app live here: [React Image Gallery](https://beautify-sd.netlify.app/)

## Libraries Used

- **react-router-dom**
- **sendgrid/mail**: Email-forwarding on Contact Page
- **react-player**: Support video media
- **lunar-javascript**: Convert to lunar day efficiently
- **zustand**: Factilitate multi-language support
- **react-awesome-reveal**: Delay load for visual effect

## Start

1. **Setup Netlify (For Hosting & Serving Requests)**  
    A. Create an account at Netlify.  
	B. Create a new project and link it to your chosen repo on GitHub for deployment.
    C. You may want to set the build command as `npm run build:live` if you want to deploy a live version with its own content.   
	D. In `[project]/[app_name]/netlify/functions` folder, create sendEmail.js. In that file, import `@sendgrid/mail` and  write `exports.handler = async (event)` that calls `await sgMail.send(msg)`
<br>

2. **Setup Gmail (To Send Emails On Netlify Request)**  
	A. Generate `GMAIL_APP_PASS` at https://myaccount.google.com/apppasswords  
	B. In `Contact.jsx`, set `handleSubmit` to use `sendGmail` rather than `sendSendGrid`  
    C. In Netlify, add keys `GMAIL_USER` and `GMAIL_APP_PASS` in Project Configuration > Environment variables > Add a variable
<br>

2. **Setup SendGrid (To Send Emails On Netlify Request)**  
	A. Create your SendGrid Account and register your email to use the service
    B. Install SendGrid and remove comment on `const sgMail` in in netlify/functions/sendSendGrid.js
    C.   
	C. Create a `SENDGRID_API_KEY`. In Netlify, add key in Project Configuration > Environment variables > Add a variable  
	D. In `siteInfo.js` file, edit `personal.contactEmail` to be the email you registered with SendGrid   
<br>  
	
3. **Build & Run App**   
    A. Download this repo, cd into it, and run ...  
    B.  `npm install`, `npm run dev` to build local  
    C. To build a hosted version, simply push changes to this app's repo on Github. Netlify will
        automatically see the changes and build your app   
<br>

4. **Add & Change Content**  
    A. See the names of files and the code structure of files in `src/content/sample` to understand how you can add your own content, including text, images, videos, and translations  
    B. To deploy your own live version, copy `sample` folder onto `src/content` and rename the copy `live`.    
    C. For version live, create `.env.live file` in the root (/) directory and add line `VITE_MODE_FOLDER=live`. Then in `/package.json`, add ` "build:live": "vite build --mode live" ` to add the option to build a live version on the command line that uses content and assets in the `live` folders.  
    D. To specify content for a new language, ie German, in file `siteInfo.js`, add:
    
        1. `de: "de-DE", to localeMap property,
        2. de: "YOUR TRANSLATION" to meta.bannerText property,
        3. A new array entry copying the provided sample to languages property
    C. Add new properties with key `de` in `navbarTranslations.js` and `uiTranslations.js` to add translations for the elements on the app
        