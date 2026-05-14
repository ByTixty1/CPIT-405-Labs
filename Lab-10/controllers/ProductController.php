<?php
// Student: Ali Saleh Alghamdi | ID: 2138215

require_once __DIR__ . '/../models/ProductModel.php';

class ProductController {
    private ProductModel $model;

    public function __construct() {
        $this->model = new ProductModel();
    }

    public function listAll(): array {
        return $this->model->getAll();
    }

    public function add(): void {
        $name        = trim($_POST['name']        ?? '');
        $description = trim($_POST['description'] ?? '');
        $price       = (float)($_POST['price']    ?? 0);

        if ($name !== '' && $price > 0) {
            $this->model->add($name, $description, $price);
        }

        header("Location: index.php");
        exit;
    }

    public function delete(): void {
        $id = (int)($_GET['id'] ?? 0);
        if ($id > 0) {
            $this->model->delete($id);
        }

        header("Location: index.php");
        exit;
    }
}
