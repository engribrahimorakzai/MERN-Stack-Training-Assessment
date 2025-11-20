// eventLoopDemo.js - Event Loop Demonstration

console.log('\n=== EVENT LOOP DEMONSTRATION ===\n');

/*
 * PREDICTED OUTPUT ORDER (before running):
 * 
 * 1: Start
 * 4: Synchronous
 * 7: End
 * 3: Promise 1
 * 6: Promise 2
 * 2: Timeout 0ms
 * 5: Timeout 10ms
 * 
 * EXPLANATION:
 * - Synchronous code executes first (1, 4, 7)
 * - Microtasks (Promises) execute next (3, 6)
 * - Macrotasks (setTimeout) execute last, in order of delay (2, 5)
 */

console.log('1: Start');

setTimeout(() => {
    console.log('2: Timeout 0ms');
}, 0);

Promise.resolve().then(() => {
    console.log('3: Promise 1');
});

console.log('4: Synchronous');

setTimeout(() => {
    console.log('5: Timeout 10ms');
}, 10);

Promise.resolve().then(() => {
    console.log('6: Promise 2');
});

console.log('7: End');

console.log('\n=== END OF DEMONSTRATION ===\n');

/*
 * ACTUAL OUTPUT ORDER (after running):
 * 
 * The output should match the prediction above.
 * 
 * WHY THIS ORDER?
 * 
 * The JavaScript Event Loop processes tasks in this order:
 * 
 * 1. CALL STACK (Synchronous Code):
 *    - All synchronous console.log statements execute immediately
 *    - Output: 1, 4, 7
 * 
 * 2. MICROTASK QUEUE (Promises):
 *    - After call stack is empty, microtasks are processed
 *    - Promises are microtasks and have higher priority than setTimeout
 *    - Both Promise.resolve().then() callbacks execute
 *    - Output: 3, 6
 * 
 * 3. MACROTASK QUEUE (setTimeout):
 *    - After microtasks are done, macrotasks are processed
 *    - setTimeout callbacks are macrotasks
 *    - Even with 0ms delay, they still go to the macrotask queue
 *    - They execute in order of their delay times
 *    - Output: 2 (0ms), then 5 (10ms)
 * 
 * Key Concept: Microtasks always have priority over macrotasks!
 */
