import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

//IMPORTANT: I changed results in LibrarySearch from private to public
//IMPORTANT: I changed id from an Integer to a String in the case statement and searchByID

class LibrarySearchTest2 {

    LibraryBook book;
    List<LibraryBook> books;
    LibrarySearch librarySearch;

    @BeforeEach
    void setUp() {
        book = new LibraryBook("The Great Gatsby", "F. Scott Fitzgerald", "Novel", 1925,
                "A novel about the American dream and the disillusionment of the Jazz Age.", 0.00);//assigning information for book
        books = new ArrayList<>();//creating list for storing books
        librarySearch = new LibrarySearch(books);//initializing the search with the list of books
        books.add(book);//adding the book to the list
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void clearResultsIsCleared(){
        librarySearch.searchByTitle("The Great Gatsby");//populate result list with search
        assertFalse(librarySearch.results.isEmpty());//check if result is not already empty
        System.out.println("Search results contains book(s)");
        librarySearch.clearResults();//call method to clear the result list
        assertTrue(librarySearch.results.isEmpty());//check if list is now empty
        System.out.println("Search results no longer contains book(s)");
    }

    @Test
    void searchByTitle(){
        librarySearch.clearResults();//clear results to be used by new search
        assertTrue(librarySearch.searchByTitle("The Great Gatsby"));//return true with correct search
        assertFalse(librarySearch.searchByTitle("The Greater Gatsby"));//return false if search doesn't match
    }

    @Test
    void searchByAuthor(){
        librarySearch.clearResults();//clear results to be used by new search
        assertTrue(librarySearch.searchByAuthor("F. Scott Fitzgerald"));//return true with matching search
        assertFalse(librarySearch.searchByAuthor("F. Scott K"));//return false if search doesn't match
    }

    @Test
    void searchByGenre(){
        librarySearch.clearResults();
        assertTrue(librarySearch.searchByGenre("Novel"));//return true if matching
        assertFalse(librarySearch.searchByGenre("Novem"));//return false with wrong input
    }

    @Test
    void searchByYear(){
        librarySearch.clearResults();
        assertTrue(librarySearch.searchByYear(1925));//return true with correct input
        assertFalse(librarySearch.searchByYear(1926));//return false with wrong input
    }

    @Test
    void searchByID(){
        librarySearch.clearResults();
        String ID = book.getID();//getting ID to input into test
        assertTrue(librarySearch.searchByID(ID));//return true with same ID input
        assertFalse(librarySearch.searchByID(ID+"1a2b3c"));//return false with extra added to ID
    }

    @Test
    void displayResults(){
        librarySearch.searchByTitle("The Great Gatsby");//search to get a result
        librarySearch.displayResults();//output the results
        assertFalse(librarySearch.results.isEmpty());//test to confirm results is not empty and will be displayed
        assertTrue(book.isAvailable());//confirms that book is available and should be displayed as such
        librarySearch.clearResults();//clear results
        assertTrue(librarySearch.results.isEmpty());//if results are clear then no books match
    }
}