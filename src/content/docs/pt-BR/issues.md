---
title: "Issues"
group: Accounts & hosting
order: 30
summary: "Crie e navegue por issues do GitHub e do GitLab, e comece uma branch a partir de uma delas."
updated: 2026-11-18
---

Com uma conta do GitHub ou do GitLab adicionada, o GitLoom mostra as issues do repositório na barra lateral.

## Criar e navegar

- **Repositório ▸ GitHub / GitLab ▸ Nova Issue…** cria uma issue.
- Navegue pelas issues do repositório no grupo Issues da barra lateral. Você pode filtrá-las por rótulo e marco.
- Clique com o botão direito numa issue para *Criar Branch a Partir da Issue*, *Abrir no Navegador* ou *Copiar Link*.
- Na paleta de comandos (<kbd>⌘K</kbd>), digite `#` para encontrar pull requests e issues.
- O **Launchpad** (<kbd>⇧⌘K</kbd>) lista as issues que esperam por você em todos os repositórios.

## Começar uma branch a partir de uma issue

*Criar Branch a Partir da Issue* cria uma branch com o nome da issue. O nome segue o modelo de **Ajustes ▸ Git ▸ Branch a partir de uma issue**, por padrão `{type}/{number}-{slug}`, em que `{type}` é `fix` ou `feat`. O modelo do `.gitloom/team.json` de uma equipe tem prioridade sobre o seu.
