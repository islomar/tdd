export const testUsers = [
  // pretend there's a large array of test user data here
];

// 1. What code from the tests might you factor out into reusable functions?
const mockDao = aMockDaoReturningUsers(testUsers)

// Abstract HTTP Response: maybe too much? (KISS)
isResponseStatus(httpStatus.OK)
isContentType(APPLICATION_JSON)
assertHttpResponseContainsJSonAndOkStatus()

// Payload structure
assertResponsePayload(payload, expectedData, expectedNextPage)


// 2. What have you made easier or nicer by doing this? What problems might you have created?
/**
- Nicer
    - Less code to understand at a higher level
    - Lower cognitive load when you need it somewhere else (you start typing…): higher level of abstraction, you abstract the “lower level details”, e.g. xx
    - You focus on what it matters for the test
        - E.g. ignore the “previousPage”

- Not so nice
    - One more level of indirection
    - Increased abstraction: more difficult to reason, to understand
    - Changes or an error in those extracted functions could potentially affect multiple tests.
        - If the test cases grow, we might try to continuously adapt those helper functions, becoming complex because we want to generalize its use.

- Do not hide the SUT!!!
- Do not hide things that matter for the assertion (data, values)

- It’s trade-offs: DRY/reusing (avoiding duplication) vs coupling/dependencies
- Less code is not always better if it affects the maintainability, the readability
    - “Four rules of simple design” (Kent Beck)
 **/
