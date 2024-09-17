import java.util.Scanner;

public class WizardBook {
    Scanner prompt = new Scanner(System.in);
    public void PrimeCheck() {
        String result = " eh primo";
        int num;
        System.out.println("*Checador se um número é primo*: ");
        System.out.println("Digite um número inteiro: ");
        num = prompt.nextInt();
        if (num <= 1) {
            result = " não eh primo";
        } else {
            for (int i = 2; i <= num / 2; i++) {
                if (num % i == 0) {
                    result = " não eh primo";
                    break;
                }
            }
        }
        System.out.println(num + result);
    }

    public void TotalSum() {
        int n, num, sum = 0, i = 0;
        System.out.println("\n*Soma de um conjunto de números*: ");
        System.out.println("Quantos números a serem somados: ");
        n = prompt.nextInt();
        while (i < n) {
            i++;
            System.out.println("Entre com o " + i + "º número: ");
            num = prompt.nextInt();
            sum += num;
        }
        System.out.println("\nA soma resultante é: " + sum);
    }

    public void MDC() {
        System.out.println("\n*Máximo Divisor Comum*: ");
        System.out.print("Digite o primeiro número: ");
        int num1 = prompt.nextInt();
        System.out.print("Digite o segundo número: ");
        int num2 = prompt.nextInt();
        int mdc = calcularMDC(num1, num2);
        System.out.println("O Máximo Divisor Comum (MDC) entre " + num1 + " e " + num2 + " é " + mdc);
    }
    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }


    public void Order() {
        int[] numeros = new int[10];
        int quantidade = 0;
        System.out.println("\n*Ordenagem de Números*: ");
        System.out.println("Digite números inteiros a serem ordenados: (Digite sair para parar)");
        while (true) {
            String input = prompt.nextLine();
            if (input.equalsIgnoreCase("sair")) {
                break;
            }

            try {
                int numero = Integer.parseInt(input);
                if (quantidade == numeros.length) {
                    int novoTamanho = numeros.length * 2;
                    int[] novoArray = new int[novoTamanho];
                    System.arraycopy(numeros, 0, novoArray, 0, numeros.length);
                    numeros = novoArray;
                }
                numeros[quantidade++] = numero;
            } catch (NumberFormatException e) {
                System.out.println("Por favor, digite um número inteiro ou 'sair' para encerrar.");
            }
        }
        insertionSort(numeros, quantidade);
        System.out.println("Números em ordem crescente:");
        for (int i = 0; i < quantidade; i++) {
            System.out.println(numeros[i]);
        }
    }
    public static void insertionSort(int[] array, int quantidade) {
        for (int i = 1; i < quantidade; i++) {
            int chave = array[i];
            int j = i - 1;

            // Move os elementos maiores que a chave para uma posição à frente
            while (j >= 0 && array[j] > chave) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = chave;
        }
    }
    public void GenFib() {
        
        int fib1 = 0, fib2 = 1, i = 3, fibTemp;
        System.out.println("\n*Gerador de sequências fibonacci:*");
        System.out.println("Diga qual será o número de termos da sequência");
        int n = prompt.nextInt();
        System.out.println(fib1);
        System.out.println(fib2);
        while (i <= n) {
            fibTemp = fib1 + fib2;
            System.out.println(fibTemp);
            fib1 = fib2;
            fib2 = fibTemp;
            i++;
        }
    }

    public void Counter() {

        int n, grade, count = 0, i = 0;
        System.out.println("*Contador de notas aprovadas:* ");
        System.out.println("Quantidade de Alunos: ");
        n = prompt.nextInt();
        while (i < n) {
            i++;
            System.out.println("Nota do Aluno " + i);
            grade = prompt.nextInt();
            if (grade > 50) {
                count++;
            }
        }
        System.out.println("\nSão " + n + " alunos.");
        System.out.println("São " + count + " aprovados.");
    }
}

