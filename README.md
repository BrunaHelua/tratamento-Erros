
# Tratamento de Erros no JavaScript

## Aula sobre erros no JavaScript - DIO 

1. ECMAScript Error

  Erros que ocorrem em tempo de execução. Ex: Algo não foi declarado, falta de ponto-vírgula, etc...  
  Composto por: mensagem, nome do erro, linha do erro, call stack (pilha de chamadas que ocorreram no código do JS até chegar até seu erro).  
  Podem aparecer no console do navegador ou alertas do sistema operacional.  
  
2. DOMException (Documento, Object, Model é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web).   

  Erro de exceção. Acontece quando 'relaciona' código JS a uma página da WEB. Ex: uma string contém um caracter inválido. Node não pode ser inserido em certo local da árvore DOM (relacionado à estrutura da árvore de elementos da página WEB).  

## Aula sobre tratamento de erros - DIO 

### Diferença entre throw e return

1. throw 
 
  ex: function verificaPalindromo(string) {   
  if (!string) return "String inválida";   
  // trata a informação que 'joga' para o usuário como um erro (a interface que aparece é de erro mesmo)  
  return string === string.split('').reverse().join(''); 
  } 
  
  
3. return
  
  ex: function verificaPalindromo(string) {   
  if (!string) return "String inválida";  
  // vai retornar uma string mesmo  
  return string === string.split('').reverse().join('');  
  }
  
### Diferença try...catch 

verifica se tem algum erro entre as declaraçãoes do bloco try - se o pedaço de código tem algum tipo de erro, ele vai ser tratado e capturado pelo catch (o pedaço de código pode ainda ser manipulado dentro do catch).  

  ex: function verificaPalindromo(string) {   
  if (!string) return "String inválida";   
  // trata a informação que 'joga' para o usuário como um erro (a interface que aparece é de erro mesmo)    
  return string === string.split('').reverse().join('');   
  }  
  
  function tryCatchExemplo(string) {   
  try {   
  // chama a função verificaPalindromo e verifica se é válida.   
  return verificaPalindromo(string);    
  }  
  //se a função verificaPalindromo retornar falsa, o catch vai pegar o erro, que pode ser manipulado   
  //log do console - não retorna uma string, retorna parte do log do pc mesmo   
  catch(e) {  
  // podia colocar também um throw para mostrar em forma de erro, ao invés do console.log, coloca nas estatística do navegador que capturou um erro.  
  console.log(e);  
  }  
  }  
  //colocar uma string vazia, vai retornar no console 'String inválida'  
  tryCatchExemplo('');  
  
### comando Finally  

é uma instrução que pode ser chamada independente de ter o erro ou não. Vai ser executado se o erro é capturado ou não. Quase porção 'independente' de bloquinho de código    

  ex: function tryCatchExemplo(string) {  
  try {  
  // chama a função verificaPalindromo e verifica se é válida.  
  return verificaPalindromo(string);   
  }  
  //se a função verificaPalindromo retornar falsa, o catch vai pegar o erro, que pode ser manipulado  
  //log do console - não retorna uma string, retorna parte do log do pc mesmo   
  catch(e) {  
  // podia colocar também um throw para mostrar em forma de erro, ao invés do console.log, coloca nas estatística do navegador que capturou um erro.  
  throw e;  
  }  
  finally {  
  console.log('A string enviada foi: ' + string);  
  }  
  }   
  //colocar uma string vazia, vai retornar no console 'String inválida'. Aqui o tryCatch é true.      
  tryCatchExemplo('ala');  
  
## Aula sobre objeto ERROR - customização de erros (usual para erros específicos)

Estrutura do ERROR  
 new Error(message, fileName, lineNumber)  
 //parâmetros são opcionais. fileName, lineNumber não são padrões de navegador. Precisa prestar atenção na compatibilidade com cada navegador      
 const  meuErro = new Error('Mensagem inválida');  //nova instância para o objeto meuErro
 
 meuErro.name = 'InvalidMessage'; //primeiro exibe o nome do erro, depois executa throw;  
 
 throw meuErro;  //vai lançar a mensagem do tipo erro     
 
 meuErro.stack // exibe onde foi encontrado erro e o que foi executado  
 
 
