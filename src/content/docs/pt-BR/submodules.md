---
title: "Submódulos"
group: Tools
order: 22
summary: "Veja o estado de cada submódulo, inicialize e atualize-os, abra um na sua própria aba, adicione ou remova-os."
updated: 2026-11-18
---

Quando um repositório tem submódulos, a barra lateral mostra um grupo SUBMÓDULOS com cada um e o estado dele.

## Ler a lista

Cada linha mostra o caminho do submódulo e o estado dele:

- um ✓ e o commit em checkout quando ele está em dia, ou *conteúdo modificado* / *conteúdo não rastreado* quando tem alterações;
- *Atualizar* quando está fora de sincronia: o commit em checkout não é o que o repositório principal registra (passe o ponteiro por cima para ver os dois);
- *Init* quando ainda não foi inicializado;
- *conflito* quando o commit registrado está em conflito.

## Trabalhar com um submódulo

Clique duas vezes num submódulo para abri-lo na sua própria aba. Clique com o botão direito nele para:

- *Abrir em Nova Aba*;
- *Atualizar para o Commit Registrado* ou *Atualizar para o Remoto Mais Recente*;
- *Init*, para um que não foi inicializado;
- *Mostrar no Finder*;
- *Remover Submódulo…*.

Se um submódulo tem alterações sem commit, a atualização pergunta antes. O git para se as suas alterações estiverem no caminho; nada é forçado.

Para atualizar os submódulos depois de todo pull que traz commits novos, ative *Atualizar submódulos após o pull* em **Ajustes ▸ Git**.

## Adicionar um submódulo

**Repositório ▸ Avançado ▸ Adicionar Submódulo…** pede a URL, o caminho e, opcionalmente, uma branch.

## Remover um submódulo

*Remover Submódulo…* desinicializa o submódulo e o remove do índice. Os dados do repositório dele (`.git/modules/<name>`) vão para o Lixo, então os commits continuam recuperáveis. Faça commit depois para concluir. Se o submódulo tiver alterações sem commit, commits que não estão em nenhum remoto ou stashes, o GitLoom os lista antes.
