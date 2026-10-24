// @strict: true
// @noEmit: true

const assertIsString = (value: unknown): asserts value is string => {};
const isString = (value: unknown): value is string => typeof value === "string";
declare function log(): void;

function f1(x: unknown) {
    assertIsString(x), x.length;
}

function f2(x: unknown) {
    log(), assertIsString(x);
    x;
}

function f3(x: unknown) {
    if (log(), isString(x)) {
        x.length;
    }
}

function f4(x: unknown) {
    return log(), isString(x) && x.length;
}
