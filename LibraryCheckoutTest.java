package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


class LibraryCheckoutTest {
    LibraryBook sample = new LibraryBook("Lord of the Rings","Tolkien","Fantasy",1950,"This is a sample description");
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void TC1_checkoutBook(){
        assertEquals(LibraryCheckout.checkoutBook(sample),true);
        assertEquals(LibraryCheckout.checkoutBook(sample),false);
    }
    //boolean test = LibraryCheckout.checkoutBook(sample);

    @Test
    void TC2_returnBook(){
        assertEquals(LibraryCheckout.returnBook(sample),false);
    }

    @Test
    void TC3_returnBook(){
        assertEquals(LibraryCheckout.checkoutBook(sample),true);
        assertEquals(LibraryCheckout.returnBook(sample),true);
    }

}