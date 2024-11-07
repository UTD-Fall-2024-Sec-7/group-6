import java.util.HashMap;
import java.util.Map;

public class LibraryCheckout {
    // Map to store checked out books, using the book ID as the key
    private Map<String, LibraryBook> checkedOutBooks = new HashMap<>();

    // Method to check out a book from the library
    public boolean checkoutBook(LibraryBook book) {
        // Check if the book is available for checkout
        if (book.isAvailable()) {
            // Mark the book as checked out
            book.checkOut();
            // Add the book to the checkedOutBooks map using its ID as the key
            checkedOutBooks.put(book.getID(), book);
            System.out.println("Checkout successful.");
            return true; // Indicate that the checkout was successful
        }
        // If the book is not available, inform the user
        System.out.println("Book is already checked out.");
        return false; // Indicate that the checkout failed
    }

    // Method to return a previously checked out book to the library
    public boolean returnBook(LibraryBook book) {
        // Check if the book is currently checked out
        if (checkedOutBooks.containsKey(book.getID())) {
            // Mark the book as available again
            book.returnBook();
            // Remove the book from the checkedOutBooks map
            checkedOutBooks.remove(book.getID());
            System.out.println("Return successful.");
            return true; // Indicate that the return was successful
        }
        // If the book was not checked out, inform the user
        System.out.println("Book has not been checked out.");
        return false; // Indicate that the return failed
    }

    // Method to check if a specific book is currently checked out
    public boolean isBookCheckedOut(LibraryBook book) {
        // Return true if the book's ID exists in the checkedOutBooks map, indicating it is checked out
        return checkedOutBooks.containsKey(book.getID());
    }
}
