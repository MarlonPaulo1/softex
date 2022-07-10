// Crie uma situação em que ocorra uma exceção dentro de um código. 
//Utilize try/catch para realizar a captura e tratamento dessa exceção. 

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link 
//desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.



public class TesteString {
    private static void aumentarLetras() throws NullPointerException {
      String frase = null;
      String novaFrase = null;
      novaFrase = frase.toUpperCase();
      System.out.println("Frase antiga: "+frase);
      System.out.println("Frase nova: "+novaFrase);
    }
  
    public static void main(String args[]) {
      try {
        aumentarLetras();
      }
      catch(NullPointerException e) {
        System.out.println("Ocorreu um NullPointerException ao executar o método aumentarLetras() "+e);
      }
    }
}