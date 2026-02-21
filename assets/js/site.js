(function(){
  var p = location.pathname.replace(/\/+$/,'') || '/';
  document.querySelectorAll('[data-nav]').forEach(function(a){
    var href = a.getAttribute('href').replace(/\/+$/,'') || '/';
    if (href === p) a.classList.add('active');
  });
  var y = new Date().getFullYear();
  var el = document.querySelector('[data-year]');
  if(el) el.textContent = y;
})();
