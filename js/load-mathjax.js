window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
  },
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://npm.elemecdn.com/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
