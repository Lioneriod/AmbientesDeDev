import java.util.Scanner;

public class Counter {
  Scanner prompt = new Scanner(System.in);
    int n, grade, count = 0, i = 0;
      public void Counter(){
        System.out.println("\n*Contador de notas aprovadas:* ");
        System.out.println("\nQuantidade de Alunos: ");
        int n = prompt.nextInt();
          while(i<n){
            i++;
            System.out.println("Nota do Aluno " + i);
            grade = prompt.nextInt();
              if(grade > 50){
                count++;
              }
          }
        System.out.println("\nSão " + n + " alunos.");	
        System.out.println("São " + count + " aprovados.");
      }
}