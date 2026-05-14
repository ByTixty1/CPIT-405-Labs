<?php
// Student: Ali Saleh Alghamdi | ID: [YOUR_STUDENT_ID]

require_once 'views/layout.php';

// ── UML Diagram Translation ──
// Person ← Professor  (Professor extends Person)

class Person {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function speak(): void {
        echo "Hi, I am " . htmlspecialchars($this->name) . ".";
    }

    public function getName(): string {
        return $this->name;
    }
}

class Professor extends Person {
    public float $salary;

    public function __construct(string $name, float $salary) {
        parent::__construct($name);
        $this->salary = $salary;
    }

    public function Teach(): void {
        echo htmlspecialchars($this->name) . " is teaching a class.";
    }
}

// Demo instances
$person    = new Person("Ali");
$professor = new Professor("Dr. Hassan", 12500.00);

pageHeader('Task 2 — OOP Diagram');
?>

<div class="card">
    <h1>Task 2 — UML Diagram Translation</h1>
    <p class="desc">Translating the class diagram into PHP: <code>Professor</code> extends <code>Person</code>.</p>

    <div class="uml-grid">
        <div class="uml-box">
            <div class="uml-title">Person</div>
            <div class="uml-section">
                <div class="uml-attr">− name : String</div>
            </div>
            <div class="uml-section">
                <div class="uml-method">+ speak() : void</div>
                <div class="uml-method">+ getName() : String</div>
            </div>
        </div>
        <div class="uml-arrow">◄</div>
        <div class="uml-box">
            <div class="uml-title">Professor</div>
            <div class="uml-section">
                <div class="uml-attr">− salary : Float</div>
            </div>
            <div class="uml-section">
                <div class="uml-method">+ Teach() : void</div>
            </div>
        </div>
    </div>

    <h2>Demo Output</h2>
    <div class="result-box">
        <p><strong>Person instance:</strong></p>
        <p><?php $person->speak(); ?></p>
        <p>getName() → <strong><?= htmlspecialchars($person->getName()) ?></strong></p>

        <hr/>

        <p><strong>Professor instance (inherits Person):</strong></p>
        <p><?php $professor->Teach(); ?></p>
        <p>getName() → <strong><?= htmlspecialchars($professor->getName()) ?></strong></p>
        <p>salary → <strong><?= number_format($professor->salary, 2) ?> SAR</strong></p>
    </div>

    <details class="code-block">
        <summary>View source code</summary>
        <pre><code>class Person {
    public string $name;

    public function __construct(string $name) {
        $this-&gt;name = $name;
    }

    public function speak(): void {
        echo "Hi, I am " . $this-&gt;name . ".";
    }

    public function getName(): string {
        return $this-&gt;name;
    }
}

class Professor extends Person {
    public float $salary;

    public function __construct(string $name, float $salary) {
        parent::__construct($name);
        $this-&gt;salary = $salary;
    }

    public function Teach(): void {
        echo $this-&gt;name . " is teaching a class.";
    }
}</code></pre>
    </details>
</div>

<?php pageFooter(); ?>
