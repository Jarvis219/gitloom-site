---
title: "Instalação"
group: Getting started
order: 1
summary: "O que o GitLoom precisa, como baixá-lo e como abri-lo pela primeira vez."
updated: 2026-11-18
---

O GitLoom é um cliente Git gratuito para Mac. Ele executa o seu próprio `git`, então sua configuração, hooks, credenciais e aliases continuam valendo.

## Requisitos

- macOS 14 Sonoma ou posterior, num Mac com Apple silicon.
- git 2.40 ou posterior. O das Xcode Command Line Tools funciona, assim como o do Homebrew.

Para obter o git da Apple, execute isto no Terminal:

```sh
xcode-select --install
```

O GitLoom avisa ao abrir se não encontrar um git recente o bastante. Se você mantém o git num lugar incomum, escolha-o em **Ajustes ▸ Git**.

## Baixar

Baixe o `GitLoom.dmg` (42 MB) da [versão mais recente](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg) ou pelo Terminal:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Abra a imagem de disco e arraste o GitLoom para a pasta Aplicativos.

## Abrir pela primeira vez

O GitLoom ainda não é notarizado pela Apple, então o macOS bloqueia a primeira abertura. Para abri-lo:

1. Abra o GitLoom uma vez. O macOS diz que ele não pode ser aberto.
2. Vá em **Ajustes do Sistema ▸ Privacidade e Segurança** e clique em *Abrir Mesmo Assim* ao lado da mensagem sobre o GitLoom.
3. Confirme. A partir daí, o GitLoom abre normalmente.

Você só precisa fazer isso uma vez. As versões seguintes chegam pelo atualizador do próprio GitLoom (veja [Atualizações](/pt-br/docs/updates/)).

## Opcional: a ferramenta de linha de comando

Escolha **GitLoom ▸ Instalar Ferramenta de Linha de Comando…** para adicionar o comando `gitloom`, assim `gitloom .` abre a pasta em que você está. Veja [A ferramenta de linha de comando gitloom](/pt-br/docs/the-gitloom-command-line-tool/).
