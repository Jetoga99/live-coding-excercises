package livecoding3;

import java.util.Scanner;

public class mannara {
	 public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Ingrese número de mangos y de naranjas respectivamente:");
		int a = scan.nextInt();
		int b = scan.nextInt();
		scan.close();
		MangNaran mana = new MangNaran(a,b);
		mana.imprimir();
	}
}