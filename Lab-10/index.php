<?php
// Student: Ali Saleh Alghamdi | ID: [YOUR_STUDENT_ID]

require_once 'config.php';
require_once 'models/ProductModel.php';
require_once 'controllers/ProductController.php';
require_once 'views/layout.php';

$controller = new ProductController();
$action     = $_REQUEST['action'] ?? 'list';

if ($action === 'add' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller->add();          // redirects after
} elseif ($action === 'delete') {
    $controller->delete();       // redirects after
} else {
    $products = $controller->listAll();
    pageHeader('Products');
    include 'views/home.php';
    pageFooter();
}
