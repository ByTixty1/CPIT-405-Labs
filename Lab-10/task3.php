<?php
// Student: Ali Saleh Alghamdi | ID: [YOUR_STUDENT_ID]

require_once 'config.php';
require_once 'views/layout.php';

pageHeader('Task 3 — Database Connection');

$databases = [];
$error     = null;

$conn = @new mysqli(DB_HOST, DB_USER, DB_PASS);

if ($conn->connect_error) {
    $error = "Connection failed: " . $conn->connect_error;
} else {
    $result = $conn->query("SHOW DATABASES;");
    while ($row = $result->fetch_array()) {
        $databases[] = $row[0];
    }
    $conn->close();
}
?>

<div class="card">
    <h1>Task 3 — Database Connection</h1>
    <p class="desc">Connects to MariaDB and executes <code>SHOW DATABASES;</code>.</p>

    <?php if ($error): ?>
        <div class="alert alert-error">
            <?= htmlspecialchars($error) ?>
            <p style="margin-top:8px;font-size:0.88rem;">Make sure Apache and MariaDB are running (XAMPP/MAMP).</p>
        </div>
    <?php else: ?>
        <div class="alert alert-success">Connected to MariaDB on <strong><?= DB_HOST ?></strong></div>

        <table class="data-table">
            <thead>
                <tr><th>#</th><th>Database Name</th></tr>
            </thead>
            <tbody>
                <?php foreach ($databases as $i => $db): ?>
                <tr>
                    <td><?= $i + 1 ?></td>
                    <td><?= htmlspecialchars($db) ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>

    <details class="code-block">
        <summary>View source code</summary>
        <pre><code>$conn = new mysqli('localhost', 'root', '', '');

if ($conn-&gt;connect_error) {
    die("Connection failed: " . $conn-&gt;connect_error);
}

$result = $conn-&gt;query("SHOW DATABASES;");

while ($row = $result-&gt;fetch_array()) {
    echo $row[0] . "&lt;br&gt;";
}

$conn-&gt;close();</code></pre>
    </details>
</div>

<?php pageFooter(); ?>
