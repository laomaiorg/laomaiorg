window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
  
  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.qylao.com/dist/mathjax/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  })();
