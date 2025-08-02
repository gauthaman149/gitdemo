import java.util.*;

class Order {
    String studentName;
    String item;
    String status;
    Date orderTime;

    Order(String studentName, String item) {
        this.studentName = studentName;
        this.item = item;
        this.status = "Pending";
        this.orderTime = new Date();
    }
    
    void markAsDelivered() {
        this.status = "Delivered";
    }

    void.displayOrder() {
        System.out.println("Student: " + studentName);
        System.out.println("Item: " + item);
        System.out.println("Status: " + status );
        System.out.println("Ordered At: " + orderTime);
        System.out.println("-------------------------");
    }
}
