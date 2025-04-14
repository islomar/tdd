import { expect, test, describe } from "bun:test";
import { evaluateGuess, evaluateGuessV2 } from "./wordle";

/**
example JavaScript test:
------------------------

test("description of the test", () => {
  const result = callFunction("with", "some", "arguments");
  expect(result).toBe(42);
});
*/
describe("evaluateGuess", () => {
  test("returns an empty string when both guess and answer are empty", () => {
    const result = evaluateGuess("", "");

    expect(result).toBe("");
  });

  test("returns '-' for letters not in the answer", () => {
    const result = evaluateGuess("abcde", "fghij");

    expect(result).toBe("-----");
  });

  test("returns 'g's for letters in the right place", () => {
    const result = evaluateGuess("abcde", "abcfg");

    expect(result).toBe("ggg--");
  });

  test("returns 'o's for letters in the wrong place", () => {
    const result = evaluateGuess("abcde", "cfgab");

    expect(result).toBe("ooo--");
  });

  test("returns 'g's and 'o's for mixed cases", () => {
    const result = evaluateGuess("abcde", "abfcd");

    expect(result).toBe("ggoo-");
  });

  test.each([
    { guess: "xbxxb", answer: "abcde", expected: "-g--o" },
    { guess: "xaxxa", answer: "abcde", expected: "-o--o" },
  ])("a guess letter matching several ones is shown in all of the positions: returns $expected for guess '$guess' and answer '$answer'", ({ guess, answer, expected }) => {
    const result = evaluateGuess(guess, answer);

    expect(result).toBe(expected);
  });

  test.each([
    { guess: "xbxxb", answer: "abcde", expected: "-g---" },
    { guess: "xaxxa", answer: "abcde", expected: "-o---" },
  ])("a guess letter matching several ones is only shown in the first matching position: returns $expected for guess '$guess' and answer '$answer'", ({ guess, answer, expected }) => {
    const result = evaluateGuessV2(guess, answer);

    expect(result).toBe(expected);
  });
});

