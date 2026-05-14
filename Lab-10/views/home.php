<?php
// Student: Ali Saleh Alghamdi | ID: [YOUR_STUDENT_ID]
// Products listing view — $products is injected by index.php
?>

<div class="card">
    <div class="page-header">
        <h1>Products</h1>
        <button class="btn" onclick="document.getElementById('add-form').classList.toggle('hidden')">
            + Add Product
        </button>
    </div>

    <div id="add-form" class="hidden">
        <form method="POST" action="index.php?action=add" class="task-form inline-form">
            <label>Name:
                <input type="text" name="name" required placeholder="Product name"/>
            </label>
            <label>Description:
                <input type="text" name="description" placeholder="Optional description"/>
            </label>
            <label>Price (SAR):
                <input type="number" name="price" step="0.01" min="0.01" required placeholder="0.00"/>
            </label>
            <button type="submit" class="btn">Save</button>
            <button type="button" class="btn btn-secondary"
                    onclick="document.getElementById('add-form').classList.add('hidden')">Cancel</button>
        </form>
    </div>

    <?php if (empty($products)): ?>
        <p class="empty-msg">No products yet. Add one above.</p>
    <?php else: ?>
        <table class="data-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price (SAR)</th>
                    <th>Added</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($products as $i => $p): ?>
                <tr>
                    <td><?= $i + 1 ?></td>
                    <td><?= htmlspecialchars($p['name']) ?></td>
                    <td><?= htmlspecialchars($p['description']) ?></td>
                    <td><?= number_format((float)$p['price'], 2) ?></td>
                    <td><?= date('Y-m-d', strtotime($p['created_at'])) ?></td>
                    <td>
                        <a href="index.php?action=delete&id=<?= (int)$p['id'] ?>"
                           class="btn btn-danger btn-sm"
                           data-confirm="Delete <?= htmlspecialchars($p['name']) ?>?">
                            Delete
                        </a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
