import java.util.ArrayList;
import java.util.List;

public class LibrarySystem {
    // List to store all the books in the library
    private List<LibraryBook> books;
    
    // LibrarySearch object to perform searches on the book list
    private LibrarySearch librarySearch;
    
    // LibraryCheckout object to handle checking out books
    private LibraryCheckout libraryCheckout;

    // Constructor to initialize the library system
    public LibrarySystem() {
        this.books = new ArrayList<>(); // Initialize the book list
        this.librarySearch = new LibrarySearch(books); // Initialize search utility with the book list
        this.libraryCheckout = new LibraryCheckout(); // Initialize checkout system
        addSampleBooks(); // Add sample books to the library for demonstration purposes
    }

    // Method to add a single book to the library
    public void addBook(String title, String author, String genre, int year, String description) {
        // Create a new LibraryBook object with provided details
        LibraryBook newBook = new LibraryBook(title, author, genre, year, description);
        
        // Add the new book to the library's book list
        books.add(newBook);
        
        // Print confirmation of successful addition
        System.out.println("Book added successfully: " + newBook);
    }

    // Method to add multiple books to the library at once
    public void addBooks(List<LibraryBook> newBooks) {
        // Add all books from the provided list to the library's book list
        books.addAll(newBooks);
        
        // Print confirmation of successful addition of multiple books
        System.out.println("Books added successfully.");
    }

    // Method to search for books in the library based on various criteria
    public void searchBooks(String searchType, String input) {
        // Determine the type of search based on the searchType parameter
        switch (searchType.toLowerCase()) {
            case "default":
                // Default search method (e.g., for general keywords)
                librarySearch.search(input);
                break;
            case "title":
                // Search books by title
                librarySearch.searchByTitle(input);
                break;
            case "author":
                // Search books by author
                librarySearch.searchByAuthor(input);
                break;
            case "genre":
                // Search books by genre
                librarySearch.searchByGenre(input);
                break;
            case "year":
                // Search books by publication year
                try {
                    int year = Integer.parseInt(input); // Convert input to integer
                    librarySearch.searchByYear(year); // Search for books matching this year
                } catch (NumberFormatException e) {
                    // Handle invalid year input (non-integer)
                    System.out.println("Invalid input. Please enter a valid year.");
                    return;
                }
                break;
            case "id":
                // Search books by unique ID
                try {
                    int id = Integer.parseInt(input); // Convert input to integer
                    librarySearch.searchByID(id); // Search for a book matching this ID
                } catch (NumberFormatException e) {
                    // Handle invalid ID input (non-integer)
                    System.out.println("Invalid input. Please enter a valid ID.");
                    return;
                }
                break;
            default:
                // Handle unrecognized search type
                System.out.println("Invalid search type.");
                return;
        }
        // Display the search results to the user
        librarySearch.displayResults();
    }

    // Method to check out a specified book
    public void checkoutBook(LibraryBook book) {
        // Attempt to check out the book using the LibraryCheckout object
        libraryCheckout.checkoutBook(book);
    }

    // Private method to add sample books to the library (for testing/demo purposes)
    private void addSampleBooks() {
        // Add example books to the library's book list with specific details
        books.add(new LibraryBook("The Great Gatsby", "F. Scott Fitzgerald", "Novel", 1925,
                "A novel about the American dream and the disillusionment of the Jazz Age."));
        books.add(new LibraryBook("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960,
                "A powerful story of racial injustice and the loss of innocence in the Deep South."));
        books.add(new LibraryBook("1984", "George Orwell", "Dystopian", 1949,
                "A chilling vision of a totalitarian future under constant surveillance."));
    }
}
