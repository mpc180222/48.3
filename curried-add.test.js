const { curriedAdd } = require("./curried-add");

describe("curriedAdd", function() {
  it("returns 0 when called with no arguments", function() {
    let a = curriedAdd();
    expect(a()).toBe(0);
  });

  it("returns a function when called with an argument", function() {
    let b = curriedAdd();
    expect(b(3)).toBeInstanceOf(Function);
  });

  it("accumulates a total with repeated function calls", function() {
    let c = curriedAdd();
    let d = curriedAdd();
    let e = curriedAdd();
    let f = curriedAdd();
    let g = curriedAdd();
    expect(c(1)()).toBe(1);
    expect(d(1)(2)()).toBe(3);
    expect(e(1)(2)(3)()).toBe(6);
    expect(f(1)(2)(3)(4)()).toBe(10);
    expect(g(1)(2)(3)(4)(-10)()).toBe(0);
  });
});
