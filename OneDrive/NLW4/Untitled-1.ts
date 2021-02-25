


function enviarEmail(para: string, id: string, assunto:string,texto){

    console.log(para, id, assunto, texto);

}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail("arturcamposba@gmail.com", 9899, "Olá!", "Tudo bem?");
        
    }
}