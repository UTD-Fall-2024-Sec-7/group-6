import java.util.UUID;

public class LibraryBook {
    // Unique identifier for each book, automatically generated
    private String id;
    
    // Book details: title, author, genre, publication year, and description
    private String title;
    private String author;
    private String genre;
    private int year;
    private String description;
    
    // Availability status of the book (true if available, false if checked out)
    private boolean isAvailable;

    // Constructor to initialize a LibraryBook object with specified details
    public LibraryBook(String title, String author, String genre, int year, String description) {
        // Generate a unique ID for the book
        this.id = UUID.randomUUID().toString();
        
        // Set the book's title, author, genre, publication year, and description
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.description = description;
        
        // By default, the book is available when created
        this.isAvailable = true;
    }

    // Getters to access book information

    // Returns the unique ID of the book
    public String getID() { 
        return id; 
    }
    
    // Returns the title of the book
    public String getTitle() { 
        return title; 
    }
    
    // Returns the author of the book
    public String getAuthor() { 
        return author; 
    }
    
    // Returns the genre of the book
    public String getGenre() { 
        return genre; 
    }
    
    // Returns the publication year of the book
    public int getYear() { 
        return year; 
    }
    
    // Returns the description of the book
    public String getDescription() { 
        return description; 
    }
    
    // Returns the availability status of the book (true if available, false if checked out)
    public boolean isAvailable() { 
        return isAvailable; 
    }

    // Methods to modify the book's availability status

    // Marks the book as checked out by setting isAvailable to false
    public void checkOut() { 
        this.isAvailable = false; 
    }
    
    // Marks the book as returned by setting isAvailable to true
    public void returnBook() { 
        this.isAvailable = true; 
    }

    // Overrides the default toString method to provide a readable representation of the book's details
    public String toString() {
        return "Title: " + title + ", Author: " + author + ", Genre: " + genre + 
        ", Year: " + year + "\nDescription: " + description;
    }
}
