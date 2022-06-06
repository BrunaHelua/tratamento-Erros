//Atividade sobre tratamento de erros
//Objetivo: função que recebe um array e o retorne, caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

function funcaoErro(arr, num) {

    if(!arr && !num) throw new ReferenceError("Os parâmetros não foram enviados. Envie os parâmetros");
    if(typeof arr != 'object') throw new TypeError("O array não é do tipo object.");
    if(typeof num != 'number') throw new TypeError("O número não é do tipo number.");
    if(arr.length !== num) throw new RangeError("Tamanho invalido");
    return arr;
}

function tryCatch(arr, num) {  
    try {  
    // chama a função funcaoErro e verifica se é válida.  
    return funcaoErro(arr, num);   
    }  
    //se a função retornar falsa, o catch vai pegar o erro, que pode ser manipulado  
    //log do console - não retorna uma string, retorna parte do log do pc mesmo   
    catch(e) { //possivel realizar coisas diferentes dependendo do tipo de erro que se tem no try {} 
    // pode colocar tanto um throw quanto um console para mostrar em forma de erro (o console.log coloca nas estatística do navegador que capturou um erro.)
    //Dois modos de mostrar o erro, usando console.log e throw  
    if (e instanceof ReferenceError) {
        console.log("Este é um ReferenceError");
        //console.log(e.name);
        //console.log(e.stack);
        //console.log(e.message);
        throw(e);
    }
    else if(e instanceof TypeError){
        console.log("Este é um TypeError");
        //console.log(e.message);
        //console.log(e.name);
        //console.log(e.stack);
        throw(e);
    }
    else if(e instanceof RangeError){
        console.log("Este é um RangeError");
        
        //console.log(e.message);
        //console.log(e.name);
        // console.log(e.stack);
        throw(e);
    }
    else {
        console.log("Ocorreu um erro inesperado! " + e);
    }
    } 
    //finally {  
    //console.log('A string enviada foi: ' + string);  
    //}  
    }   

console.log(funcaoErro([1, 2], 2));
    //colocar uma string vazia, vai retornar no console 'String inválida'. Aqui o tryCatch é true.      
    //tryCatch('ala'); 



//const  meuErro = new Error('Mensagem inválida');  //nova instância para o objeto meuErro
 
//meuErro.name = 'InvalidMessage'; //primeiro exibe o nome do erro, depois executa throw;  
 
// throw meuErro;  //vai lançar a mensagem do tipo erro     
 
//meuErro.stack // exibe onde foi encontrado erro e o que foi executado 

//exemplo de uso de instanceof
//function Car(make, model, year) {
    //this.make = make;
    //this.model = model;
    //this.year = year;
  //}
  //const auto = new Car('Honda', 'Accord', 1998);
  
  //console.log(auto instanceof Car);
  // expected output: true
  
  //console.log(auto instanceof Object);
  // expected output: true