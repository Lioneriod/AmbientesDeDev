import java.util.Scanner;
public class TotalSum{
  Scanner prompt = new Scanner(System.in);
    int n, num, sum = 0, i = 0;
      public void TotalSum(){
        System.out.println("\n*Soma de um conjunto de números*: ");
        System.out.println("\nQuantos números a serem somados: ");
        int n = prompt.nextInt();
          while(i < n){
            i++;
            System.out.println("Entre com o " + i + "º número: ");
            num = prompt.nextInt();
            sum += num;
          }
        System.out.println("\nA soma resultante é: " + sum);
      }
}