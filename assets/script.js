/* Compte à rebours de la page d’accueil.
   Pour l’activer, indiquez la date et l’heure de début de l’édition dans
   l’attribut data-date du bloc #rebours (index.html), format AAAA-MM-JJTHH:MM,
   par exemple data-date="2027-06-12T09:00". */
(function(){
  var bloc = document.getElementById('rebours');
  if(!bloc) return;
  var date = bloc.getAttribute('data-date');
  var cible = date ? new Date(date) : null;
  if(!cible || isNaN(cible)) return;
  function maj(){
    var reste = Math.max(0, cible - new Date());
    var j = Math.floor(reste/864e5), h = Math.floor(reste/36e5)%24,
        m = Math.floor(reste/6e4)%60, s = Math.floor(reste/1e3)%60;
    var v = [j,h,m,s];
    bloc.querySelectorAll('b').forEach(function(el,i){ el.textContent = String(v[i]).padStart(2,'0'); });
  }
  maj(); setInterval(maj, 1000);
})();

/* Chiffres qui défilent quand ils apparaissent à l’écran.
   Seuls les nombres sont animés : « ≈ 175 » ou « 6 + 1 » gardent leurs symboles. */
(function(){
  var cibles = document.querySelectorAll('.chiffre b');
  if(!cibles.length) return;
  var calme = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(calme || !('IntersectionObserver' in window)) return;
  function animer(el){
    var texte = el.getAttribute('data-final');
    var morceaux = texte.split(/(\d+)/);
    var debut = null, duree = 1600;
    function pas(t){
      if(!debut) debut = t;
      var p = Math.min(1, (t - debut) / duree);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = morceaux.map(function(m){ return /^\d+$/.test(m) ? Math.round(parseInt(m,10) * e) : m; }).join('');
      if(p < 1) requestAnimationFrame(pas); else el.textContent = texte;
    }
    requestAnimationFrame(pas);
  }
  var obs = new IntersectionObserver(function(entrees){
    entrees.forEach(function(en){
      if(en.isIntersecting){ obs.unobserve(en.target); animer(en.target); }
    });
  }, { threshold: 0.4 });
  cibles.forEach(function(el){
    var t = el.textContent.trim();
    if(!/\d/.test(t)) return;
    el.setAttribute('data-final', t);
    el.textContent = t.replace(/\d+/g, '0');
    obs.observe(el);
  });
})();
