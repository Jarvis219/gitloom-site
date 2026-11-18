---
title: "Git LFS"
group: Tools
order: 23
summary: "Rastreie arquivos grandes com o Git LFS, baixe-os e bloqueie arquivos para que colegas não os editem ao mesmo tempo."
updated: 2026-11-18
---

O GitLoom funciona com o Git LFS quando o `git-lfs` está instalado no seu Mac. Sem ele, o GitLoom ainda lista os arquivos LFS, mas não consegue baixá-los nem bloqueá-los.

## O grupo GIT LFS

Num repositório que usa LFS, a barra lateral tem um grupo GIT LFS com os arquivos LFS. Um arquivo que ainda não foi baixado, em que só o ponteiro está no disco, tem um ícone de download. Um arquivo bloqueado mostra quem o bloqueou. Clique duas vezes num arquivo para abri-lo.

Clique com o botão direito num arquivo para:

- *Abrir Arquivo*;
- *Baixar Este Arquivo*, quando só o ponteiro está aqui;
- *Bloquear* ou *Desbloquear*.

## Baixar todos os arquivos LFS

**Repositório ▸ Avançado ▸ Baixar Arquivos do Git LFS** executa `git lfs pull` e baixa os arquivos grandes deste checkout.

## Rastrear um novo tipo de arquivo

Clique com o botão direito num arquivo alterado na área de stage ▸ *Rastrear com LFS (\*.ext)* para rastrear todos os arquivos com essa extensão. Num repositório que já usa LFS, o mesmo menu tem *Bloquear (LFS)* e *Desbloquear (LFS)*.
