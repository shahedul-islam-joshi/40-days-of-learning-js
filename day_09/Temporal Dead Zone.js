{
  // TDZ: fruit, price, and isAvailable are all hoisted here,
  // but none of them can be used until their own declaration line runs

  console.log(fruit); // ❌ ReferenceError: Cannot access 'fruit' before initialization
  // (price and isAvailable would throw the same way if we tried to log them here too)

  let fruit = "Mango";
  const price = 120;
  let isAvailable = true;

  // TDZ is over now — all three are initialized and safe to use

  console.log(fruit, price, isAvailable); // ✅ Mango 120 true
}