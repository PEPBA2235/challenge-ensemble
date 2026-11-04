# Site du Challenge Ensemble

Site statique (HTML et CSS, sans outil de construction) hébergé sur GitHub Pages,
à l’adresse https://challenge-ensemble.pepbretillarmor.org

## Modifier un texte
Ouvrir la page concernée sur GitHub, cliquer sur le crayon (Edit), remplacer le texte
entre crochets [ ], puis « Commit changes ». Le site se met à jour en quelques minutes.

## Ajouter une photo ou un logo
1. Déposer l’image dans le dossier `img/` (Add file > Upload files).
2. Dans la page, remplacer `<div class="a-remplacer">Photo</div>`
   par `<img src="img/nom-du-fichier.jpg" alt="Description de la photo">`.
Compresser les photos avant envoi (moins de 500 Ko chacune) : le site ne doit pas dépasser 1 Go.

## Activer le compte à rebours
Dans `index.html`, renseigner `data-date="2027-06-12T09:00"` (exemple) sur le bloc `id="rebours"`.

## Ajouter une édition (ex. 2028)
1. Copier `edition-2027.html` en `edition-2028.html` et mettre à jour les informations.
2. Transformer l’ancienne page 2027 en archive sur le modèle de `edition-2026.html`.
3. Mettre à jour les liens du menu (en-tête de chaque page).

## Couleurs
Toutes les couleurs sont définies en haut de `assets/style.css`.

## Ne pas supprimer
Le fichier `CNAME` : il relie le site au sous-domaine.
