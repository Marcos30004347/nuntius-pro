# Nuntius

## Descrição

Um aplicativo de chat em tempo real feito em node js.

## Membros e papeis

Aline Cristina Pinto - FullStack development and design\
Luiz Felipe Couto - FullStack development and design\
Marcos Vinicius - FullStack development and design\
Vinicius Juliao Ramos - FullStack development and design\
Wesley Raul Santos Vieira - FullStack development and design

## Principais Features e objetivos

- Sistema de login
- Poder enviar mensagens de texto, imagem e áudio
- Chat entre grupos de usuários

## Histórias de Usuário

1. Tarefas técnicas
   - Criar wireframes - Time completo
   - Criar projeto no backend. - Vinicius (NodeJS)
   - Criar projeto no frontend. - Aline (ReactJS, Jest, styled-components)
2. Como usuário, eu quero logar na aplicação
   - Criar tela de login - Luiz Felipe
   - Instrumentar a autenticação via Supabase. - Luiz
3. Como usuário, eu quero criar uma conta.
   - Criar tela de sign up - Luiz
   - Criar as rotas do backend. - Wesley
   - Instrumentar o registro via Supabase. - Marcos
4. Como usuário, eu quero criar uma sala de chat.
   - Criar tela de criação de sala - Aline
   - Criar rotina no backend para a criação da sala - Vinicius
   - Criar rotina para deletar a sala após o ultimo usuário deixar a sala. - Marcos
5. Como usuário, eu quero entrar numa sala de chat.
   - Criar tela do chat. - Aline
   - Criar rotina do backend para entrar na sala. - Marcos
   - Criar rotina do backend para logoff da sala. - Wesley
6. Como usuário eu quero mandar uma mensagem de texto.
   - Implementar rotina do backend para receber e reenviar as mensagens de texto para cada peer. - Wesley
7. Como usuário, eu quero mandar mensagem de áudio
   - No frontend, implementar a funcionalidade de gravação do áudio do microfone. - Aline
   - Implementar compressão e descompressão das mansagens de áudio. - Marcos
   - Implementar o reprodutor de áudio. - Vinicius
   - Implementar envio de áudio na direção cliente -> servidor - Wesley
   - Implementar envio de audio na direção servidor -> cliente. - Wesley
8. Como usuário, eu quero mandar mensagens anonimas.
   - Criar uma notação, por exemplo um caractere "!" no início da mensagem para identificar que é uma mensagem anonima. - Luiz
   - No frontend, exibir a mensagem anônima com estilo diferente das demais. - Aline
   - Criar a rotina no backend para retransmissão anônima das mensagens. - Vinicius
9. Como usuário, eu quero mandar mensagens privadas.
   - Criar uma notação, por exemplo um caractere "#"+<nome do usuário> para identificar para quem a mensagem será enviada privativamente. - Aline
   - No frontend, exibir a mensagem privada com estilo diferente das demais. Isto é, criar uma estrutura de exibição da mensagem privada. - Luiz
   - Criar uma rotina no backend que garanta que apenas o usuário alvo conseguirá ler a mensagem privada. - Marcos
10. Como usuário, eu quero poder responder uma mensagem de maneira explícita.
    - No frontend, exibir a mensagem de resposta de maneira diferente das demais, com um estilo próprio. - Welsey
11. Como usuário, eu quero gerenciar meu perfil.
    - Criar tela de edição de perfil - Aline
    - Criar rota para edição de perfil - Vinicius
12. Como usuário, eu quero visualizar o perfil de outro usuário.
    - Criar tela de visualização de perfil - Aline
    - Criar rota para busca de perfil - Vinicius

## Tecnologias principais

- Node js
- React js
- Supabase
- Docker
- Webhooks

## Mockups

[Figma](https://www.figma.com/file/sVDkQN4y72q4OGmWK71KOU/Nuntius?node-id=2604%3A2264)

## Arquitetura Adotada

Para a implementação a arquitetura escolhida foi a hexagonal por manter uma facilidade a mais de implementação pelos membros do grupo.

1. Portas: São utilizadas para a formatação dos dados para entrada e saída da aplicação.
   - ResponseInterface <br />
   ![ResponseInterface](https://user-images.githubusercontent.com/42242383/202282911-3741998e-4cf4-4204-abb5-218297762ba3.png)
   - StorageInterface <br />
      ![StorageInterface](https://user-images.githubusercontent.com/42242383/202282121-02fa9567-8c40-40c6-a326-e5261fe3bcfb.png)
   - AuthInterface <br />
      ![AuthInterface](https://user-images.githubusercontent.com/42242383/202282392-13e0bf7c-8914-4754-a620-11df7011b26e.png)
2. Adaptadores: São utilizados para conexão externa ao sistema.
   - SocketServerInteface <br />
   ![SocketServerInteface](https://user-images.githubusercontent.com/42242383/202283706-2a49c93d-1610-4046-81bf-61de5c7e90fb.png)
   - SocketInteface <br />
      ![SocketInteface](https://user-images.githubusercontent.com/42242383/202283408-65aa26d0-16af-4243-bd09-2db58c155275.png)
   - DataBaseInterface <br />
   ![DataBaseInterface](https://user-images.githubusercontent.com/42242383/202283831-25a4afb2-b137-4137-a26f-428a13af5d1d.png)

