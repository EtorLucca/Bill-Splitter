<h1>Divisor de conta de consumação</h1>

<h3>Para rodar o projeto, basta acessar o link:</h3>
https://bill-splitter-nu.vercel.app/


<h3>Caso queira rodar no seu computador:</h3>

- Clonar o repositório:
  <code> git clone https://github.com/EtorLucca/Bill-Splitter.git </code>

- Instalar as dependências:
  <code> yarn install </code>

- Iniciar o projeto:
  <code> yarn dev </code>

- O projeto será aberto por padrão no endereço "localhost:3000"


<h2>Como funciona a aplicação</h2>

- Primeiramente cadastrar os clientes clicando no ícone no canto superior direito (MODAL abrirá para cadastro).
- Em seguida cadastrar os produtos consumidos, pelo ícone de carrinho ao lado do cadastro de clientes(MODAL abrirá para cadastro).
- O sistema já irá calcular o total e a divisão igual por pessoa.
- Para divisão parcial (por consumação individual) selecionar o cliente.
- Na parte direita aparecerá o Cliente selecionado e a lista de produtos cadastrados na comanda.
- Selecionar para cada produto a quantidade de pessoas para qual será feita a divisão.
- A aplicação calcula o valor individual a ser pago (ETAPA NÃO IMPLEMENTADA / EM IMPLEMENTAÇÃO)
- A aplicação calcula a taxa de serviço caso o cliente queira pagar (ETAPA NÃO INICIADA)


<h2>Tecnologias utilizadas</h2>
- Next JS <br>
- React JS <br>
- React Hooks (useState, useEffect) <br>
- JSON (como "banco de dados")
- Fetch API (GET, POST e DELETE)
- Javascript <br>
- HTML <br>
- CSS <br>
- Flexbox <br>
- Responsividade <br>


<h2>Etapas Seguintes</h2>
- Implementação da divisão e cálculo da taxa de serviço
- Refatoração do código
- Componentização e reaproveitamento de código