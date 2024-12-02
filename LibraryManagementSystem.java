package org.example;

import java.util.HashMap;
import java.util.Scanner;

public class LibraryManagementSystem {
    private final HashMap<String, String> userDatabase; // Stores usernames and passwords
    private final Scanner scanner;

    public LibraryManagementSystem() {
        userDatabase = new HashMap<>();
        scanner = new Scanner(System.in);

        // Sample users for demonstration
        userDatabase.put("john_doe", "password123");
        userDatabase.put("jane_smith", "passw0rd");
    }

    public void login() {
        System.out.println("Welcome to the Library Management System!");

        while (true) {
            System.out.print("Enter your username: ");
            String username = scanner.nextLine();

            // Check if username exists
            if (!checkUsername(username)) {
                System.out.println("Username not found. Please try again or register.");
                continue;
            }

            System.out.print("Enter your password: ");
            String password = scanner.nextLine();

            // Validate password
            if (checkPassword(username,password)) {
                System.out.println("Login successful! Welcome, " + username + ".");
                break;
            } else {
                System.out.println("Incorrect password.");
                System.out.print("Forgot password? (yes/no): ");
                String response = scanner.nextLine().trim().toLowerCase();

                if (response.equals("yes")) {
                    changePassword(username);
                }
            }
        }
    }

    public boolean checkUsername(String a){
        if (!userDatabase.containsKey(a)) {
            return false;
        }else{
            return true;
        }

    }

    public boolean checkPassword(String name, String pswd){
        if (userDatabase.get(name).equals(pswd)) {
            return true;
        } else {
            return false;
        }
    }

    private void changePassword(String username) {
        System.out.println("Resetting password for: " + username);

        while (true) {
            System.out.print("Enter your new password: ");
            String newPassword = scanner.nextLine();

            System.out.print("Confirm your new password: ");
            String confirmPassword = scanner.nextLine();

            if (newPassword.equals(confirmPassword)) {
                userDatabase.put(username, newPassword);
                System.out.println("Password successfully changed. You can now log in.");
                break;
            } else {
                System.out.println("Passwords do not match. Try again.");
            }
        }
    }

    public static void main(String[] args) {
        LibraryManagementSystem system = new LibraryManagementSystem();
        system.login();
    }
}