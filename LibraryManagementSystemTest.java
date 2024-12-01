package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LibraryManagementSystemTest{

    LibraryManagementSystem LM1;

    @BeforeEach
    void setUp() {
        LM1 = new LibraryManagementSystem();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void checkU_TC1(){
        assertEquals(LM1.checkUsername("john_doe"),true);
    }

    @Test
    void checkU_TC2(){
        assertEquals(LM1.checkUsername("john"),false);
    }

    @Test
    void checkP_TC1(){
        assertEquals(LM1.checkPassword("john_doe","password123"),true);
    }

    @Test
    void checkP_TC2(){
        assertEquals(LM1.checkPassword("john_doe","pwd"),false);
    }

}