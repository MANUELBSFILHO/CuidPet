## Explicando

HTML (index.html):
Estrutura a página da web e define os elementos, como campos de entrada para o nome do pet e seus cuidados, botões para ações específicas e uma área para listar os cuidados adicionados.

CSS (styles.css):
Define o estilo visual da página, incluindo cores, fontes e layout, proporcionando uma apresentação mais agradável e organizada.

JavaScript (script.js):

*Evento de Clique no Botão "Adicionar Cuidado"*:
Coleta as informações inseridas pelo usuário (nome do pet, alimentação, exercício, cuidados de saúde).
Cria um novo elemento na página para exibir essas informações.
Adiciona esse elemento à lista de cuidados existente na página.
Limpa os campos do formulário para preparar para novas entradas.

*Evento de Clique no Botão "Imprimir Relatório"*:
Coleta todos os itens de cuidado existentes na lista.
Abre uma nova janela no navegador e insere o conteúdo desses itens em uma página HTML.
Fecha a janela de impressão após a impressão ser concluída.
Utiliza history.pushState para evitar que a página atual seja adicionada ao histórico de navegação.

*Evento de Clique no Botão "Limpar"*:
Reseta os campos do formulário para que o usuário possa inserir novas informações.

*Evento de Clique no Botão "Novo Cuidado"*:
Remove o último item de cuidado adicionado à lista, permitindo ao usuário adicionar informações sobre um novo pet.

O código utiliza JavaScript para manipular o DOM (Modelo de Objeto de Documento), que é a representação da estrutura da página HTML. Ele responde a eventos do usuário (como cliques em botões) e atualiza dinamicamente a página em resposta a esses eventos. O código também usa CSS para estilizar a página, tornando-a visualmente atraente.