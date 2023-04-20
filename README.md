# VerseVenture</br> </br>  🧾 Descrição
 

O VerseVenture é um software desenvolvido em React Native Expo Go com duas telas que simula um sistema de hospedagem de hotel. todo o software é executado em situações específicas.

## Tela de Login

Nessa tela, o usuário poderá fazer login no sistema inserindo um nome de usuário ou um e-mail e uma senha. O usuário "admin" ou "admin@hotmail.com" com senha "000" já está cadastrado no sistema. Existem três comportamentos possíveis nessa tela:

1. Quando o usuário não preencher todos os campos e clicar em entrar, o sistema mostrará a mensagem "Preencha todos os campos".
2. Se o usuário inserir um usuário ou senha não cadastrados, o sistema mostrará a mensagem "E-mail ou senha incorretos".
3. Se o usuário inserir o usuário "admin" e a senha "000", o sistema mostrará a mensagem "Logado com sucesso".

## Tela Inicial

Na situação específica da tela, só sera mostrado um hotel na tela.

A tela inicial exibe um hotel com o nome, imagem, preço, nota (de 0 a 5 estrelas) e comentarios. Os hoteis tem uma descrição e comentários de usuários, que serão exibidos quando o usuário clicar no botão correspondente. 
Ao clicar no botão "Descrição", o conteúdo da descrição é exibido e também acontece o mesmo com comentarios. Os dois conteúdos não podem ser exibidos simultaneamente.



## 📥 Instalação

1. Baixe os arquivos do projeto do repositório do GitHub em seu computador local, clicando no botão verde "Code" e selecionando a opção "Download ZIP". Em seguida, extraia o arquivo ZIP em uma pasta de sua escolha.

2. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar e instalar a versão mais recente do Node.js em https://nodejs.org/en/download/.

3. Abra um terminal ou prompt de comando e navegue até a pasta do projeto que você acabou de extrair do arquivo ZIP.

4. Digite o comando `npm install` no terminal para instalar as dependências do projeto.

5. Agora, digite o comando `expo start` para iniciar o projeto.

6. Em seguida, o Expo Developer Tools será aberto em seu navegador padrão. Nele, você pode escolher rodar o app em um emulador ou no seu próprio dispositivo móvel.

7. Caso escolha rodar no seu próprio dispositivo móvel, instale o aplicativo Expo Go em seu celular Android ou iPhone e escaneie o QR code exibido na página do Expo Developer Tools.
