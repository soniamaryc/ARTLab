(function(){
  function normalizePath(p){
    // Ensure consistent slashes and remove trailing index.html or slashes
    return p.replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\/$/, '');
  }

  function markActive(){
    var links = document.querySelectorAll('.hero-buttons a');
    var current = normalizePath(window.location.pathname);

    // Remove 'active' class from all links
    links.forEach(function(a){
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    });

    // Add 'active' class only to the exact match of the current link
    links.forEach(function(a){
      var href = a.getAttribute('href');
      if(!href) return;
      try{
        var url = new URL(href, window.location.origin);
        var linkPath = normalizePath(url.pathname);
        if(current.endsWith(linkPath)){
          a.classList.add('active');
          a.setAttribute('aria-current', 'page');
        }
      }catch(e){
        console.error('Error processing link:', e);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', markActive);
})();
