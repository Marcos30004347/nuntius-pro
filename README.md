# Nuntius

## Descrição
Um aplicativo de chat em tempo real feito em node js.

## Membros e papeis
Aline Cristina Pinto - FullStack development and design

Luiz Felipe Couto - FullStack development and design

Marcos Vinicius - FullStack development and design

Vinicius Juliao Ramos - FullStack development and design

Wesley Raul Santos Vieira - FullStack development and design

## Principais Features e objetivos
* Sistema de login
* Poder enviar mensagens de texto, imagem e áudio
* Chat entre grupos de usuários

## Histórias de Usuário
1. Tarefas técnicas
   * Criar wireframes
   * Criar projeto no backend. (NodeJS)
   * Criar projeto no frontend. (ReactJS, Jest, styled-components)
2. Como usuário, eu quero logas na aplicação
   * Criar tela de login
   * Instrumentar a autenticação via Supabase.
3. Como usuário, eu quero criar uma conta.
   * Criar tela de sign up
   * Criar as rotas do backend.
   * Instrumentar o registro via Supabase.   
4. Como usuário, eu quero criar uma sala de chat.
   * Criar rotina no backend para a criação da sala
   * Criar rotina para deletar a sala após o ultimo usuário deixar a sala.
5. Como usuário, eu quero entrar numa sala de chat.
   * Criar tela do chat.
   * Criar rotina do backend para etrar na sala.
   * Criar rotina do backend para logoff da sala.
6. Como usuário eu quero mandar uma mensagem de texto.
   * Implementar rotina do backend para receber e reenviar as mensagens de texto para cada peer.
7. Como usuário, eu quero mandar mensagem de áudio 
   * No frontend, implementar a funcionalidade de gravação do áudio do microfone.
   * Implementar compressão e descompressão das mansagens de áudio.
   * Implementar o reprodutor de áudio.
   * Implementar envio de áudio na direção cliente -> servidor
   * Implementar envio de audio na direção servidor -> cliente.
8. Como usuário, eu uero mandar emnsagens anonimas.
   * Criar uma notação, por exemplo um caractere "!" no início da mensagem para identificar que é uma mensagem anonima.
   * No frontend, exibir a mensagem anônima com estilo diferente das demais.
   * Criar a rotina no backend para retransmissão annima das mensagens.
9.  Como usuário, eu quero mandar mensagens privadas.
   * Criar uma notação, por exemplo um caractere "@"+<nome do usuário> para identificar para quem a mensagem será enviada privativamente.
   * No frontend, exibir a mensagem privada com estilo diferente das demais. Isto é, criar uma estrutura de exibição da mensagem privada.
   * Criar uma rotina no backend que garanta que apenas o usuário alvo conseguirá ler a mensagem privada.
11. Como usuário, eu quero poder responder uma mensagem de maneira explícita.
   * No frontend, exibir a mensagem de resposta de maneira diferente das demais, com um estilo próprio.



## Tecnologias principais
* Node js
* React js
* Supabase
* Docker
* Webhooks

