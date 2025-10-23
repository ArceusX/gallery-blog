/**
 * @file App.jsx
 * @description The main application component that sets up routing and global layout.
 */
import React, { Suspense, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLanguageStore from './store/languageStore';

import { Home, About, Blog, Contact, Calendar } from './pages';
import { ContactInfo, Navbar, Footer, LanguageSelector, FullBlogPost } from './components';

import siteInfo from '@content/siteInfo';
import { content } from '@utils/contentLoader';

import './App.css';

const App = () => {
  const language = useLanguageStore((state) => state.language);

  const contentPosts  = content.posts[language.code]  || content.posts.en;
  const contentMedia  = content.media[language.code]  || content.media.en;
  const contentAbout  = content.about[language.code]  || content.about.en;
  const contentEvents = content.events[language.code] || content.events.en;

  document.title = siteInfo.meta.appName;

  return (
    <Router>
      <div className="app-wrapper">
        <LanguageSelector />
        {/* Top navbar to have appName logo
            that opens to homepage on click*/}
        <Navbar icon={siteInfo.meta.icon} items={siteInfo.navbarPaths} appName={siteInfo.meta.appName} />
        <ContactInfo 
          address={siteInfo.personal.address}
          email={siteInfo.personal.contactEmail}
        />
        {/* For each Route, define URL and component/page to show */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <Home
                items={contentMedia}
                images={siteInfo.meta.banner}
                text ={siteInfo.meta.bannerText}
              />
            } />
            <Route path="/about" element={
              <About
                items={contentAbout}
                fundraising={siteInfo.fundraising} />} />
            <Route path="/calendar" element={
              <Calendar events={contentEvents} localeMap={siteInfo.localeMap || { en: "en-US", }}  />} />
            <Route path="/blog" element={
              <Blog posts = {contentPosts} />} />
            <Route path="/contact" element={
              <Contact
              address={siteInfo.personal.contactEmail}
              appName={siteInfo.meta.appName} 

            />} />
            <Route path="/blog/post/:id" element={<FullBlogPost posts={contentPosts} />} />
          </Routes>
        </Suspense>

        <Footer
          icon={siteInfo.meta.icon}
          appName={siteInfo.meta.appName}
          author={siteInfo.personal.author}
          contact={siteInfo.personal.authorEmail}
          github={siteInfo.personal.github}
        />

      </div>
    </Router>
  );
};

export default App;
