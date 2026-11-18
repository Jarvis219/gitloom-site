---
title: "Perfis"
group: Getting started
order: 4
summary: "Mantenha nome, e-mail, chave de assinatura, abas e lista de recentes separados para cada tipo de trabalho."
updated: 2026-11-18
---

Um perfil guarda a identidade com que você faz commit: um nome, um e-mail e uma chave de assinatura opcional. Use um para o trabalho e outro para projetos pessoais, por exemplo. Configure-os em **Ajustes ▸ Perfis**.

## O que um perfil guarda

Cada perfil tem:

- um nome de perfil, e o nome (`user.name`) e o e-mail (`user.email`) de commit;
- um método de assinatura: não assinar, SSH, GPG ou X.509, e se os commits são assinados por padrão;
- uma conta opcional com que ele faz push, quando as regras de [Contas SSH](/pt-br/docs/ssh-accounts/) não decidem;
- suas próprias abas abertas e repositórios recentes.

O GitLoom grava o nome, o e-mail e a chave de assinatura na configuração git de cada repositório, para que o terminal concorde com o GitLoom.

## Trocar de perfil

Troque de perfil pelo seletor no canto superior direito da janela. Um perfil é o padrão: o GitLoom começa com ele e volta para ele quando o perfil em uso é apagado. Use *Tornar Padrão* para mudar qual é.

## A identidade errada

Acima do botão de commit, o GitLoom mostra com qual identidade você está fazendo commit. Se esse e-mail não for o do perfil do repositório, a linha é marcada com um aviso; escolha o perfil certo no seletor da barra de ferramentas para corrigir.

## Remover um perfil

Selecione-o e clique em −. As abas abertas e os repositórios recentes dele são esquecidos. A configuração git já gravada nos repositórios fica como está. Sempre há pelo menos um perfil.
