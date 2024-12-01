package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    User profile = new User("mike123", "abc123", 8.23, true);

    @BeforeEach
    void setUp() {

    }

    @AfterEach
    void tearDown() {

    }

    @Test
    void test_getUsername() {
        assertEquals("mike123", profile.getUsername());
    }

    @Test
    void test_setUsername() {
        profile.setUsername("mike");
        assertEquals("mike", profile.getUsername());
    }

    @Test
    void test_getPassword() {
        assertEquals("abc123", profile.getPassword());
    }

    @Test
    void test_setPassword() {
        profile.setPassword("abc");
        assertEquals("abc", profile.getPassword());
    }

    @Test
    void test_getBalance() {
        assertEquals(8.23, profile.getBalance(), 0);
    }

    @Test
    void test_addBalance() {
        profile.addBalance(0.77);
        assertEquals(9.00, profile.getBalance(), 0);
    }

    @Test
    void test2_addBalance() {
        profile.addBalance(-0.23);
        assertNotEquals(8.00, profile.getBalance(), 0);
    }

    @Test
    void test_isAdmin() {
        assertTrue(profile.isAdmin());
    }

    @Test
    void test_setAdmin() {
        profile.setAdmin(false);
        assertFalse(profile.isAdmin());
    }

    @Test
    void test_changeUsername() {
    profile.changeUsername("mikey");
    assertEquals("mikey", profile.getUsername());
    }

    @Test
    void test2_changeUsername() {
        assertFalse(profile.changeUsername(""));
    }

    @Test
    void test_changePassword() {
        profile.changePassword("abc214");
        assertEquals("abc214", profile.getPassword());
        assertFalse(profile.changePassword("a"));
        assertFalse(profile.changePassword(null));
    }

    @Test
    void test_checkoutBook() {
        assertTrue(profile.checkoutBook(7.99));
        assertFalse(profile.checkoutBook(8.99));

    }
}