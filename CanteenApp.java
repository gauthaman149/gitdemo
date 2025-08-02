import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CanteenApp {
    public static void main(String[] args) {
        scanner sc = new scanner(System.in);
        List<Order> orders = new ArrayList<>();

        while (true) {
            System.out.println("1. Place Order");
            System.out.println("2. View All Orders");
            System.out.println("3. Mark as Delivered");
            System.out.println("4. Exit");

            int choice = sc.nextInt();
            sc.nextLine();// Clear newLine

            switch (choice) {
                case 1:
                System.out.print("Enter student name: ");
                String name = sc.nextLine();
                System.out.print("Enter item name: ");
                String item = sc.nextLine();
                orders.add(new Order(name, item));
                System.out.println("✅ Order placed!\n");
                    break;
            
                case 2:
                System.out.println("📋 Orders:");
                for (int i = 0; i < orders.size(); i++) {
                    System.out.println("Order #" + (i + 1));
                    orders.get(i).displayOrder();
                }
                break;

                case 3:
                System.out.print("Enter order number to mark as delivered: ")
                int OrderNo = sc.nextInt();
                if (orderNo > 0 && OrderNo <= orders.size()) {
                    orders.get(orderNo - 1).markAsDelivered();
                    System.out.println("✅ Marked as Delivered.\n");
                } else {
                    System.out.println("❌ Invalid order number.\n");
                }
                    break;
                case 4:
                System.out.println("👋 Exiting...");
                System.exit(0);
            }
        }
    } 
}
