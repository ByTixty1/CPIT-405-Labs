<?php
// Student: Ali Saleh Alghamdi | ID: [YOUR_STUDENT_ID]

function pageHeader(string $title): void {
    echo <<<HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{$title} — Lab 10</title>
        <link rel="stylesheet" href="css/styles.css"/>
    </head>
    <body>
        <nav class="navbar">
            <a href="../index.html">← All Labs</a>
            <span class="sep">|</span>
            <a href="index.php">Products App</a>
            <a href="task1.php">Task 1</a>
            <a href="task2.php">Task 2</a>
            <a href="task3.php">Task 3</a>
        </nav>
        <main class="main">
    HTML;
}

function pageFooter(): void {
    echo <<<HTML
        </main>
        <footer class="footer">CPIT-405 | Lab 10 — PHP &amp; MariaDB | Ali Saleh Alghamdi</footer>
        <script src="js/main.js"></script>
    </body>
    </html>
    HTML;
}
