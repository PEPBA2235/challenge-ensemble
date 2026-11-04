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
