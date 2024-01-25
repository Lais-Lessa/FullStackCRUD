Projeto: FullStackCrud

 Criação de um cadastro de clientes que poderá conter muitos contatos associados.

 Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Se ainda não tiver instalado, você pode baixá-los em nodejs.org.

 Depois de ter o Node.js e o npm instalados, você precisará instalar as dependências do projeto. Essas dependências são listadas no arquivo package.json do seu projeto.

 npm install

 Preencha corretamente as variáveis de ambiente.

 Esses comandos são executados no terminal (linha de comando) e garantirão que todas as bibliotecas necessárias para o seu projeto sejam baixadas e instaladas.

Rodas as migrações
npm run typeorm:run

Para executar o projeto em um ambiente de desenvolvimento, utilize o seguinte comando:
npm run dev

Este comando iniciará o servidor em modo de desenvolvimento, permitindo que você faça alterações no código e veja as atualizações em tempo real.

Rotas do Usuário

1. Criação de Usuário
Descrição: Cria um novo usuário na aplicação.
Rota: POST /users

{
  "name": "nome_usuario",
  "email": "usuario@dominio.com",
  "password": "senha_segura",
  "confirm": "senha_segura",
  "phoneNumber": "telefone_usuário"
}


2. Login do Usuário
Descrição: Realiza o login do usuário na aplicação.
Rota: POST /login

{
  "email": "usuario@dominio.com",
  "password": "senha_segura"
}

3. Leitura de Usuários
Descrição: Obtém a lista de usuários cadastrados.
Rota: GET /users

4. Remoção de Usuário
Descrição: Remove um usuário específico com base no ID fornecido.
Rota: DELETE /users/:id

Rotas de Contato

1. Criação de Contato
Descrição: Cria um novo contato associado a um usuário específico.
Rota: POST /:id/user

{
  "name": "Nome Contato",
  "email": "contato@dominio.com",
  "phoneNumber": "+55 (11) 98765-4321"
}

2. Leitura de Todos os Contatos de um Usuário
Descrição: Obtém a lista de todos os contatos associados a um usuário específico.
Rota: GET /contacts

3. Leitura de um Contato Específico
Descrição: Obtém informações detalhadas de um contato específico associado a um usuário.
Rota: GET /contacts/:id

4. Atualização de Contato
Descrição: Atualiza as informações de um contato específico associado a um usuário.
Rota: PATCH /contacts/:id

{
  "name": "Novo Nome Contato",
  "email": "novo_contato@dominio.com",
  "phoneNumber": "+55 (11) 98765-4321"
}

5. Remoção de Contato
Descrição: Remove um contato específico associado a um usuário.
Rota: DELETE /contacts/:id
