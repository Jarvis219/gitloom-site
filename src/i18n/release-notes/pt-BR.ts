// Brazilian Portuguese release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Dez temas novos, claros e escuros: Fern, Tide, Blossom, Dune e Graphite.',
    'O grafo de commits se lê mais como um mapa: uma faixa na cor da branch vai do rótulo, atravessa o grafo e chega à mensagem do commit, e uma branch criada a partir da que está em checkout fica alinhada com ela, mesmo com vários commits.',
    'O commit em checkout é fácil de achar: um anel duplo em volta do avatar e uma faixa mais forte na linha.',
    'Arrastar uma branch para outra sempre age sobre a branch arrastada, qualquer que seja a que está em checkout: *Fast-forward de f para develop* quando f está atrás, *Rebase de f sobre develop*, *Mesclar f em develop* (oculto quando não há nada para mesclar).',
    'Os menus de branch dizem exatamente o que apagam: *Apagar Branch Local “f”*, ou *Apagar “f” e “origin/f”* quando há upstream. Os nomes aparecem entre aspas, então um nome curto não parece mais cortado.',
    'A lista de rótulos que abre ao passar o ponteiro sobre uma linha com muitas branches tem o menu de contexto completo para cada branch.',
    'Confirmações de Apagar, Push Forçado e outras ações destrutivas têm um botão vermelho.',
    'Clicar abaixo da última linha do grafo mantém o commit selecionado; a contagem de arquivos alterados continua legível em um painel estreito.',
    'Arquivos não preparados e preparados rolam em painéis próprios, com os cabeçalhos fixos; um diff aberto acompanha o arquivo quando você o prepara ou o tira da preparação, e fazer commit a partir dele abre o novo commit.',
    'O botão de fechar do diff fica na extremidade direita e é mais fácil de clicar.',
    'Um chaveiro que não entrega um token salvo não marca mais a conta como desconectada.',
  ],
  '1.0.2': [
    'A pré-visualização dos dados da IA se lê como texto: as instruções para a IA e o seu pedido com quebras de linha reais, as partes ocultadas marcadas, e o modelo e os limites em uma só linha. Um seletor Legível / JSON ainda mostra o pedido exato.',
  ],
  '1.0.1': [
    'Fechar a última janela agora só a oculta: clicar no ícone do Dock a traz de volta na hora, com as abas, o grafo e o terminal, em vez de carregar todos os repositórios de novo.',
    'Quando a janela tinha sido fechada de fato, o ícone do Dock abria uma página inicial vazia em vez dos seus repositórios.',
    'Os pull requests não dizem mais que o GitHub rejeitou o login salvo quando a conta padrão do repositório tem um token expirado mas outra conta funciona: essa conta é ignorada sem alarde, e contas que precisam de login não são mais escolhidas por padrão.',
    'Os tokens são lidos do chaveiro uma única vez, então um chaveiro ocupado não parece mais um login rejeitado.',
    'O ⚠ ao lado de uma branch cujo upstream foi apagado no remoto se explica quando você passa o ponteiro sobre ele e diz o que fazer.',
  ],
  '1.0.0': [
    'Primeira versão pública. Ainda sem notarização: na primeira abertura, o macOS pede confirmação — Ajustes do Sistema ▸ Privacidade e Segurança ▸ Abrir Mesmo Assim. As versões seguintes chegam pelo atualizador do próprio app.',
    'Grafo de commits para repositórios grandes (mais de 100 mil commits), detalhes e diffs de commits (lado a lado ou unificados, por palavra), histórico de arquivos e blame.',
    'Preparação por arquivo, trecho ou linha; commits com amend, sign-off, assinatura (GPG/SSH), coautores e convenções da equipe.',
    'Branches e tags, fetch / pull / push com rastreamento de upstream, stashes, desfazer e refazer para a maioria das operações.',
    'Merge, rebase, cherry-pick e revert arrastando e soltando no grafo; rebase interativo; um editor de conflitos de três vias.',
    'Abas, várias janelas, perfis que guardam cada um suas próprias abas, repositórios recentes e identidade de commit.',
    'Contas SSH que escolhem a chave certa para cada repositório; login no GitHub e no GitLab para pull requests, issues, revisões e Actions.',
    'Terminal integrado, editor de arquivos, busca e filtros, worktrees, submódulos, bisect, recuperação pelo reflog, Git LFS.',
    'Mensagens de commit e explicações por IA com o seu próprio provedor; um servidor MCP para que outras ferramentas possam controlar o GitLoom.',
    'Personalização de temas, layout e teclado; 16 idiomas.',
  ],
};
export default notes;
