import java.util.ArrayList;
import java.util.List;

public class LibrarySearch {
    // List of all books in the library
    private List<LibraryBook> books;
    
    // List to store search results that match the search criteria
    private List<LibraryBook> results;

    // Constructor initializes LibrarySearch with a list of books to search through
    public LibrarySearch(List<LibraryBook> books) {
        this.books = books;
        this.results = new ArrayList<>(); // Initialize the results list as empty
    }

    // Clears any previous search results to ensure results list is empty before each search
    public void clearResults() {
        results.clear();
    }

    // General search method that looks for matches across multiple attributes (title, author, genre, description)
    public boolean search(String input) {
        clearResults(); // Clear previous search results
        boolean BookFound = false; // Flag to track if any matching books are found
        
        // Loop through each book in the library
        for (LibraryBook book : books) {
            // Check if the input matches any book attribute
            if (book.getTitle().toLowerCase().contains(input.toLowerCase())) {
                results.add(book); // Add matching book to results
                BookFound = true;
            } else if (book.getAuthor().toLowerCase().contains(input.toLowerCase())) {
                results.add(book);
                BookFound = true;
            } else if (book.getGenre().toLowerCase().equals(input.toLowerCase())) {
                results.add(book);
                BookFound = true;
            } else if (book.getDescription().toLowerCase().contains(input.toLowerCase())) {
                results.add(book);
                BookFound = true;
            }
        }
        
        // Return true if any books were found, otherwise print a message and return false
        if (BookFound) {
            return true;
        } else {
            System.out.println("No books found with the given search input.");
            return false;
        }
    }

    // Search method to find books by title
    public boolean searchByTitle(String title) {
        clearResults(); // Clear previous search results
        boolean BookFound = false; // Track if any books match
        
        for (LibraryBook book : books) {
            // Add books with titles containing the search input to results
            if (book.getTitle().toLowerCase().contains(title.toLowerCase())) {
                results.add(book);
                BookFound = true;
            }
        }

        // Return true if matches found, else notify and return false
        if (BookFound) {
            return true;
        } else {
            System.out.println("No books found with the given title.");
            return false;
        }
    }

    // Search method to find books by author
    public boolean searchByAuthor(String author) {
        clearResults(); // Clear previous search results
        boolean BookFound = false;

        for (LibraryBook book : books) {
            // Add books with authors containing the search input to results
            if (book.getAuthor().toLowerCase().contains(author.toLowerCase())) {
                results.add(book);
                BookFound = true;
            }
        }

        if (BookFound) {
            return true;
        } else {
            System.out.println("No books found with the given author.");
            return false;
        }
    }

    // Search method to find books by genre
    public boolean searchByGenre(String genre) {
        clearResults(); // Clear previous search results
        boolean BookFound = false;

        for (LibraryBook book : books) {
            // Add books with genres exactly matching the search input to results
            if (book.getGenre().toLowerCase().equals(genre.toLowerCase())) {
                results.add(book);
                BookFound = true;
            }
        }

        if (BookFound) {
            return true;
        } else {
            System.out.println("No books found with the given genre.");
            return false;
        }
    }

    // Search method to find books by publication year
    public boolean searchByYear(int year) {
        clearResults(); // Clear previous search results
        boolean BookFound = false;

        for (LibraryBook book : books) {
            // Add books published in the given year to results
            if (book.getYear() == year) {
                results.add(book);
                BookFound = true;
            }
        }

        if (BookFound) {
            return true;
        } else {
            System.out.println("No books found published in the given year.");
            return false;
        }
    }

    // Search method to find a book by unique ID
    public boolean searchByID(int id) {
        clearResults(); // Clear previous search results
        boolean BookFound = false;

        for (LibraryBook book : books) {
            // Add book if its ID matches the given ID
            if (book.getID().equals(String.valueOf(id))) { // Convert int id to String for comparison
                results.add(book);
                BookFound = true;
            }
        }

        if (BookFound) {
            return true;
        } else {
            System.out.println("No book found with the given ID.");
            return false;
        }
    }

    // Displays the details of all books in the results list
    public void displayResults() {
        if (!results.isEmpty()) {
            for (LibraryBook book : results) {
                // Print details of each book and its availability status
                System.out.println(book.toString());
                System.out.println("Availability: " + (book.isAvailable() ? "Available" : "Checked out"));
                System.out.println("----------------------------------------------------------------");
            }
        } else {
            // Print message if no results were found
            System.out.println("No books match your search criteria.");
        }
    }
}
