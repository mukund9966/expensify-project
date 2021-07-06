const add = (a, b) => a + b;
const greet = (name = "Anonymous") => `Hello ${name}`;
test("should add two numbers", () => {
  const result = add(3, 4);
  //   if (result != 7) {
  //     throw new Error(`you added 3 and 4. Result was ${result}, expected 7`);
  //   }
  expect(result).toBe(7);
});

test("generate greeting", () => {
  const result = greet("Tom");
  expect(result).toBe("Hello Tom");
});

//for Object|Array comparision, inplace of toBe() use toEqual()
