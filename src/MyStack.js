import React from 'react';

function MyStack() {
  return (
    <section id="MyStack" className="center tc mw9 pv4">
      <h2 className="fw6 f3 f2-ns lh-title mv0">My stack</h2>
      <ul className="list ph3 ph5-ns">
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-html5 f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">HTML</h3>
          <p className="f5 fr w-80 mt1 tl">I'm using semantic HTML</p>
        </li>
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-css3-alt f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">CSS</h3>
          <p className="f5 fr w-80 mt1 tl">I know CSS</p>
        </li>
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-sass f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">Sass</h3>
          <p className="f5 fr w-80 mt1 tl">
            I can also use preprocessors (like sass) to style
          </p>
        </li>
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-js-square f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">JavaScript</h3>
          <p className="f5 fr w-80 mt1 tl">Still learning</p>
        </li>
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-git-alt f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">GIT</h3>
          <p className="f5 fr w-80 mt1 tl">I'm famillary with using GIT</p>
        </li>
        <li className="f2 fl w-50 pa2">
          <i class="fab fa-react f1 v-mid pt3 fl w-20"></i>
          <h3 className="f4 fl w-80 mb1 tl">React</h3>
          <p className="f5 fr w-80 mt1 tl">Learning</p>
        </li>
      </ul>
    </section>
  );
}

export default MyStack;
