<?php
// Student: Ali Saleh Alghamdi | ID: 2138215

require_once 'views/layout.php';

// ── Iterative power ──
function powerIterative(float $base, int $exp): float {
    $result = 1;
    for ($i = 0; $i < abs($exp); $i++) {
        $result *= $base;
    }
    return $exp < 0 ? 1 / $result : $result;
}

// ── Recursive power ──
function powerRecursive(float $base, int $exp): float {
    if ($exp === 0) return 1;
    if ($exp < 0)  return 1 / powerRecursive($base, -$exp);
    return $base * powerRecursive($base, $exp - 1);
}

$base   = isset($_POST['base'])     ? (float)$_POST['base']     : null;
$exp    = isset($_POST['exponent']) ? (int)$_POST['exponent']   : null;
$result = null;

if ($base !== null && $exp !== null) {
    $result = [
        'iterative' => powerIterative($base, $exp),
        'recursive' => powerRecursive($base, $exp),
    ];
}

pageHeader('Task 1 — Power Function');
?>

<div class="card">
    <h1>Task 1 — Power Function</h1>
    <p class="desc">Returns <code>base ^ exponent</code> using both iterative and recursive approaches.</p>

    <form method="POST" class="task-form">
        <label>Base:
            <input type="number" name="base" step="any"
                   value="<?= htmlspecialchars($_POST['base'] ?? '2') ?>" required/>
        </label>
        <label>Exponent:
            <input type="number" name="exponent"
                   value="<?= htmlspecialchars($_POST['exponent'] ?? '8') ?>" required/>
        </label>
        <button type="submit" class="btn">Calculate</button>
    </form>

    <?php if ($result !== null): ?>
    <div class="result-box">
        <p><strong><?= $base ?> <sup><?= $exp ?></sup> = <?= $result['iterative'] ?></strong></p>
        <table class="result-table">
            <tr><th>Method</th><th>Result</th></tr>
            <tr><td>Iterative</td><td><?= $result['iterative'] ?></td></tr>
            <tr><td>Recursive</td><td><?= $result['recursive'] ?></td></tr>
        </table>
    </div>
    <?php endif; ?>

    <details class="code-block">
        <summary>View source code</summary>
        <pre><code>// Iterative
function powerIterative(float $base, int $exp): float {
    $result = 1;
    for ($i = 0; $i &lt; abs($exp); $i++) $result *= $base;
    return $exp &lt; 0 ? 1 / $result : $result;
}

// Recursive
function powerRecursive(float $base, int $exp): float {
    if ($exp === 0) return 1;
    if ($exp &lt; 0)  return 1 / powerRecursive($base, -$exp);
    return $base * powerRecursive($base, $exp - 1);
}</code></pre>
    </details>
</div>

<?php pageFooter(); ?>
