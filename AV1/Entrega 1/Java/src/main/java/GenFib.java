import java.util.Scanner;

public class GenFib {
  Scanner prompt = new Scanner(System.in);
  int fib1 = 0, fib2 = 1, i = 3, fibtemp;
  int[] fib = new int[0];

  public void GenFib() {
    System.out.println("\n*Gerador de sequências fibonacci:*");
    System.out.println("\nQual será a quantidade de números na sequência?\n ");
    int n = prompt.nextInt();
    
    while (i <= n) {
      int fibTemp = fib1 + fib2;

      int fib1 = fib2;
      int fib2 = fibTemp;
      i++;
    }
    prompt.close();
  }

}  