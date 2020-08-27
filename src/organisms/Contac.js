import React from 'react';
import Header from '../atoms/Header';

function Contact() {
  return (
    <section id="Contact" className="center mw8 tc pv4 flex flex-wrap">
      <Header text="Reach me" />
      <a
        href="#"
        className="dib f6 f5-ns b db pa2 link dim black tc w-100 w-50-ns"
      >
        <i className="far fa-envelope f3 mr2" />
        <p className="dib">pawel.janiszews@interia.pl</p>
      </a>
      <a
        href="#"
        className="dib f6 f5-ns b db pa2 link dim black tc w-100 w-50-ns"
      >
        <i className="fas fa-phone f3 mr2" />
        <p className="dib">793 253 825</p>
      </a>
      <form className="pa4 black-80 w-100 flex flex-wrap justify-around">
        <div className="w-100 w-25-ns">
          <label htmlFor="mail" className="f6 b db mb2 tl">
            Your mail
          </label>
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="email"
            aria-describedby="Place for your email"
            placeholder="James.bond@wp.pl"
          />
        </div>
        <div className="w-100 w-25-ns">
          <label htmlFor="mail" className="f6 b db mb2 tl">
            Your name
          </label>
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="Place for your name"
            placeholder="James Bond"
          />
        </div>
        <div className="w-100 w-80-ns">
          <label htmlFor="mail" className="f6 b db mb2 tl">
            Your message
          </label>
          <textarea
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100 h4"
            type="email"
            aria-describedby="Place for your message"
            placeholder="Hi, I want to hire you!"
          />
        </div>
        <button
          type="submit"
          className="f6 dim w-30-ns b pointer no-underline br-pill ba ph3 pv2 mb2 black"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
