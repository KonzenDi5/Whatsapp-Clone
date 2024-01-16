# Bem vindo ao Whatsapp Clone for Orpen



## Sobre o Projeto

Este site foi desenvolvido em apenas **2 dias**, sem o auxílio de videoaulas. 

Página de **apresentação** responsiva. //path='/'

=> Tem perfil em menu lateral se clicar no nome na conversa
=> Tem mensagens arquivadas

O site possui uma integração com o **Firebase** para autenticação de usuários. Comecei a implementar a lógica para integrar o chat inteiramente através do Firebase. Deixei alguns endpoints para isso, já conectados ao banco de dados para enviar mensagens. No entanto, ainda não há uma tratativa correta dentro do banco de dados para distribuir as mensagens para a linha correta.

Não tive tempo de aplicar a lógica do envio da mensagem, mas seria usaria o mesmo contexto de apresentação para controlar o estado do array.

Não apliquei funcionalidade nos icones do header da sidebar, achei trabalhoso.

Portanto, o chat foi implementado com um contexto dentro do aplicativo, que manipula e atualiza os estados dos chats para visualização.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra http://localhost:3000 para visualizá-lo no navegador.

A página será recarregada se você fizer alterações.\
Você também pode ver quaisquer erros de lint no console.