<?php
// Student: Ali Saleh Alghamdi | ID: 2138215

require_once __DIR__ . '/../config.php';

class ProductModel {
    private mysqli $conn;

    public function __construct() {
        $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($this->conn->connect_error) {
            die("DB connection failed: " . $this->conn->connect_error);
        }
    }

    public function getAll(): array {
        $result = $this->conn->query(
            "SELECT * FROM products ORDER BY created_at DESC"
        );
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }

    public function getById(int $id): ?array {
        $stmt = $this->conn->prepare(
            "SELECT * FROM products WHERE id = ?"
        );
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $row = $stmt->get_result()->fetch_assoc();
        return $row ?: null;
    }

    public function add(string $name, string $description, float $price): bool {
        $stmt = $this->conn->prepare(
            "INSERT INTO products (name, description, price) VALUES (?, ?, ?)"
        );
        $stmt->bind_param("ssd", $name, $description, $price);
        return $stmt->execute();
    }

    public function update(int $id, string $name, string $description, float $price): bool {
        $stmt = $this->conn->prepare(
            "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?"
        );
        $stmt->bind_param("ssdi", $name, $description, $price, $id);
        return $stmt->execute();
    }

    public function delete(int $id): bool {
        $stmt = $this->conn->prepare("DELETE FROM products WHERE id = ?");
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public function __destruct() {
        $this->conn->close();
    }
}
