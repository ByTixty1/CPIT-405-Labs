-- CPIT-405 Lab 10 — Database Installation Script
-- Student: Ali Saleh Alghamdi | ID: 2138215
-- Run this script once in phpMyAdmin or MySQL CLI before starting the app.

CREATE DATABASE IF NOT EXISTS cpit405_lab10
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE cpit405_lab10;

CREATE TABLE IF NOT EXISTS products (
    id          INT          AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    description TEXT,
    price       DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO products (name, description, price) VALUES
    ('Wireless Mouse',   'Ergonomic 2.4GHz wireless mouse',          49.99),
    ('Mechanical Keyboard', 'RGB backlit mechanical keyboard',       129.99),
    ('USB-C Hub',        '7-in-1 USB-C hub with HDMI and card reader', 89.99);
