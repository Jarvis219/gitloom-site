// French release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Dix nouveaux thèmes, clairs et sombres : Fern, Tide, Blossom, Dune et Graphite.',
    'Le graphe des commits se lit davantage comme une carte : une bande à la couleur de la branche part de son étiquette, traverse le graphe et rejoint le message du commit, et une branche créée depuis la branche extraite reste alignée sur elle, même lorsqu’elle compte plusieurs commits.',
    'Le commit extrait se repère facilement : un double anneau autour de son avatar et une bande plus marquée sur la ligne.',
    'Glisser une branche sur une autre agit toujours sur la branche glissée, quelle que soit la branche extraite : *Avance rapide de f jusqu’à develop* quand f est en retard, *Rebaser f sur develop*, *Fusionner f dans develop* (masqué quand il n’y a rien à fusionner).',
    'Les menus des branches indiquent exactement ce qu’ils suppriment : *Supprimer la branche locale « f »*, ou *Supprimer « f » et « origin/f »* quand elle a une branche amont. Les noms sont entre guillemets, si bien qu’un nom court ne semble plus tronqué.',
    'La liste d’étiquettes qui s’ouvre au survol d’une ligne portant de nombreuses branches propose le menu contextuel complet de chaque branche.',
    'Les confirmations de suppression, de Push forcé et des autres actions destructrices ont un bouton rouge.',
    'Cliquer sous la dernière ligne du graphe conserve le commit sélectionné ; le nombre de fichiers modifiés reste lisible dans un panneau étroit.',
    'Les fichiers non indexés et indexés défilent chacun dans leur propre volet, en-têtes épinglés ; un diff ouvert suit son fichier quand vous l’indexez ou le retirez de l’index, et valider depuis ce diff ouvre le nouveau commit.',
    'Le bouton de fermeture du diff est à l’extrémité droite et plus facile à atteindre.',
    'Un trousseau qui refuse de fournir un jeton enregistré ne marque plus le compte comme déconnecté.',
  ],
  '1.0.2': [
    'L’aperçu des données IA se lit comme du texte : les instructions pour l’IA et votre requête avec de vrais retours à la ligne, les masquages signalés, le modèle et les limites sur une seule ligne. Un sélecteur Lisible / JSON affiche toujours la requête exacte.',
  ],
  '1.0.1': [
    'Fermer la dernière fenêtre ne fait plus que la masquer : un clic sur l’icône du Dock la fait revenir aussitôt, avec ses onglets, son graphe et son terminal, au lieu de recharger tous les dépôts.',
    'Lorsque la fenêtre avait vraiment été fermée, l’icône du Dock ouvrait une page d’accueil vide au lieu de vos dépôts.',
    'Les pull requests n’indiquent plus que GitHub a refusé la connexion enregistrée lorsque le compte par défaut du dépôt a un jeton expiré mais qu’un autre compte fonctionne : ce compte est ignoré discrètement, et les comptes qui nécessitent une connexion ne sont plus choisis par défaut.',
    'Les jetons ne sont lus qu’une fois dans le trousseau, si bien qu’un trousseau occupé ne ressemble plus à une connexion refusée.',
    'Le ⚠ à côté d’une branche dont la branche amont a été supprimée sur le dépôt distant s’explique au survol et indique quoi faire.',
  ],
  '1.0.0': [
    'Première version publique. Pas encore notarisée : à la première ouverture, macOS demande une confirmation — Réglages Système ▸ Confidentialité et sécurité ▸ Ouvrir quand même. Les versions suivantes arrivent par le système de mise à jour intégré à l’app.',
    'Graphe des commits pour les grands dépôts (plus de 100 000 commits), détails et diffs des commits (côte à côte ou unifiés, au niveau des mots), historique des fichiers et blame.',
    'Indexation par fichier, bloc ou ligne ; commits avec amend, sign-off, signature (GPG/SSH), co-auteurs et conventions d’équipe.',
    'Branches et tags, fetch / pull / push avec suivi de la branche amont, remisages (stash), annuler et rétablir pour la plupart des opérations.',
    'Merge, rebase, cherry-pick et revert par glisser-déposer sur le graphe ; rebase interactif ; un éditeur de conflits à trois voies.',
    'Onglets, plusieurs fenêtres, profils qui gardent chacun leurs onglets, leurs dépôts récents et leur identité de commit.',
    'Comptes SSH qui choisissent la bonne clé pour chaque dépôt ; connexion GitHub et GitLab pour les pull requests, issues, revues et Actions.',
    'Terminal intégré, éditeur de fichiers, recherche et filtres, worktrees, sous-modules, bisect, récupération via le reflog, Git LFS.',
    'Messages de commit et explications par IA avec votre propre fournisseur ; un serveur MCP pour que d’autres outils puissent piloter GitLoom.',
    'Personnalisation des thèmes, de la disposition et du clavier ; 16 langues.',
  ],
};
export default notes;
