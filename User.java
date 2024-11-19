import java.util.Objects;

public class User {
    private String username;
    private String password;
    private double balance;
    private boolean isAdmin;

    // Constructor
    public User(String username, String password, double balance, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.balance = balance;
        this.isAdmin = isAdmin;
    }

 
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getBalance() {
        return balance;
    }

    public void addBalance(double amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            System.out.println("Amount must be positive.");
        }
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    // Method to change the username
    public boolean changeUsername(String newUsername) {
        if (newUsername != null && !newUsername.isEmpty()) {
            this.username = newUsername;
            return true;
        }
        return false;
    }

    // Method to change the password
    public boolean changePassword(String newPassword) {
        if (newPassword != null && newPassword.length() >= 6) {  // Password length should be at least 6
            this.password = newPassword;
            return true;
        }
        return false;
    }

    // Method to deduct balance when a book is checked out
    public boolean checkoutBook(double bookCost) {
        if (this.balance >= bookCost) {
            this.balance -= bookCost;
            return true;
        } else {
            System.out.println("Insufficient balance to checkout the book.");
            return false;
        }
    }


}
