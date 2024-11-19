package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class LibrarySystemTest {
    LibrarySystem sample = new LibrarySystem();

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void TC1_addBook(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
    }

    @Test
    void TC2_addBook(){
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
    }

    @Test
    void TC3_addBooks(){
       assertEquals(sample.addBooks(sample.testList),"Books added successfully.");
    }

    @Test
    void TC4_search(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Title","Percy Jackson"),"Search complete");
    }

    @Test
    void TC5_search(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Author","Tolkien"),"Search complete");
    }

    @Test
    void TC6_search(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Genre","fantasy"),"Search complete");
    }

    @Test
    void TC7_search(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Year","2012"),"Search complete");
    }

    @Test
    void TC8_search_invalidYear(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again",0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Year","abc"),"Invalid input. Please enter a valid year.");
    }

    @Test
    void TC7_search_invalidType(){
        assertEquals(sample.addBook("Percy Jackson","Rick","fantasy",2012,"sample text", 0.00),"Book added successfully: Percy Jackson");
        assertEquals(sample.addBook("Lord of the Rings","Tolkien","fantasy",1940,"sample text again", 0.00),"Book added successfully: Lord of the Rings");
        assertEquals(sample.searchBooks("Y","2012"),"Invalid search type.");
    }

}