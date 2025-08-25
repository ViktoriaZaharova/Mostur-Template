(function () {
  function applyTheme(theme) {
    if (theme === 'dark') document.body.classList.add('dark-theme');
    else document.body.classList.remove('dark-theme');
  }

  // 1) Initialize from localStorage or prefers-color-scheme
  var stored = localStorage.getItem('theme');
  if (!stored) {
    try {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      stored = prefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', stored);
    } catch (e) { stored = 'light'; }
  }
  applyTheme(stored);

  // 2) Hook up button
  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('.btn-theme-toggle');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
      });
    });
  });
})();