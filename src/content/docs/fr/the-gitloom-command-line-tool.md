---
title: "L’outil en ligne de commande gitloom"
group: Tools
order: 24
summary: "Installez la commande gitloom pour ouvrir dépôts, diffs, historique de fichier et blame depuis votre terminal."
updated: 2026-11-18
---

La commande `gitloom` ouvre GitLoom depuis un terminal. Elle lance GitLoom si nécessaire.

## L’installer

Choisissez **GitLoom ▸ Installer l’outil en ligne de commande…**. Cela ajoute un lien dans `~/.local/bin/gitloom`, sans mot de passe administrateur. Si `~/.local/bin` n’est pas encore dans votre PATH, GitLoom vous le signale ; ajoutez cette ligne à `~/.zshrc` :

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Pour l’installer pour tous les shells sans modifier le PATH, utilisez *Installer dans /usr/local/bin…* dans **Réglages ▸ Intégrations ▸ Outil en ligne de commande**. macOS demande alors le mot de passe d’un administrateur. Cette section indique aussi où `gitloom` est installé.

GitLoom ne remplace que son propre lien. Si un autre fichier nommé `gitloom` s’y trouve déjà, il n’est pas touché et GitLoom vous le signale.

## Commandes

| Commande | Effet |
|---|---|
| `gitloom [path]` | Ouvre le dépôt qui contient `path` (par défaut : le dossier actuel) |
| `gitloom clone <url> [dir]` | Ouvre la fenêtre de clonage préremplie |
| `gitloom diff [<rev>]` | Ouvre le dépôt où vous vous trouvez et sélectionne `<rev>` (par défaut : la ligne des modifications non commitées) |
| `gitloom log <file>` | Ouvre l’historique du fichier |
| `gitloom blame <file>[:<line>]` | Ouvre le blame du fichier, à cette ligne |
| `gitloom mcp` | Lance le serveur MCP de GitLoom sur stdio (voir [Serveur MCP](/fr/docs/mcp-server/)) |

Par exemple :

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
