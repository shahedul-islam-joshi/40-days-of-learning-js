# JavaScript Mini Games – Learning Journal

A collection of small JavaScript games built to practice core programming concepts, progressively refactored to explore different control flow approaches.

---

## Projects

### 1. Rock, Paper, Scissors

A classic terminal-style game where the user competes against the computer.

**What it covers:**
- Taking user input via `prompt()`
- Generating a random computer choice using `Math.random()`
- Comparing choices and determining win/loss/tie logic
- Recursion for replay (`rockPaperScissorsGame()` calls itself)

**Refactoring journey:**  
The original code used `if-else` chains for both the computer choice generation and result comparison. It was then refactored to use `switch` statements. An interesting challenge arose in Step 3 — attempting to use `switch` for comparing two variables (user vs computer) showed a common pitfall: `switch` matches a single expression, not compound boolean conditions. Using `switch (true)` with boolean case expressions is one workaround, but `if-else` remains more natural and readable for relational comparisons.

---

### 2. Number Guessing Game

The user tries to guess a secret number between 1 and 10, with hints after each attempt.

**What it covers:**
- Constants (`MIN_NUMBER`, `MAX_NUMBER`) for clean, maintainable bounds
- `while` loop to keep the game running until the correct guess
- Input validation using `isNaN()` and range checks
- Tracking attempt count
- `switch (true)` pattern for range-based comparisons

**Refactoring journey:**  
Two versions were written side by side — one using `switch (true)` and one using `if-else if`. This comparison highlights that `switch (true)` works well when cases are clean boolean expressions (like `guess < secretNumber`), while `if-else` is sometimes clearer for readers unfamiliar with the pattern. Both are valid; the choice depends on context and team preference.

---

## Key Concepts Practiced

| Concept | Description |
|---|---|
| `switch` statement | Replacing `if-else` chains for discrete value matching |
| `switch (true)` pattern | Using `switch` for boolean/range-based conditions |
| `Math.random()` | Generating random numbers within a range |
| Input validation | Checking for invalid or out-of-range user input |
| Recursion | Restarting a game function by calling itself |
| `while` loop | Repeating logic until a condition is met |
| Template literals | Embedding variables in console output strings |

---

## Takeaways

- `switch` is best for matching a single value against multiple discrete options.
- For comparisons between two variables or range checks, `if-else` is often more readable.
- `switch (true)` is a valid but less common pattern — use it intentionally.
- Refactoring the same logic in multiple ways is a great way to understand the tradeoffs of each approach.