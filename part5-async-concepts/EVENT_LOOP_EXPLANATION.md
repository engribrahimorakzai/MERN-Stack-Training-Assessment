# Event Loop Explanation

## Understanding the JavaScript Event Loop

### Execution Order Analysis

When we run the event loop demonstration code, the output appears in this specific order:

```
1: Start
4: Synchronous
7: End
3: Promise 1
6: Promise 2
2: Timeout 0ms
5: Timeout 10ms
```

### Why This Order Occurs

The JavaScript Event Loop operates on a priority-based system with three main phases:

**1. Call Stack (Synchronous Execution)**
First, all synchronous code executes immediately in the order it appears. The call stack processes `console.log('1: Start')`, `console.log('4: Synchronous')`, and `console.log('7: End')` before anything else. The `setTimeout` and `Promise` callbacks are registered but not executed yet—they're queued for later processing.

**2. Microtask Queue (Promises)**
Once the call stack is empty, the event loop checks the microtask queue. Promises use this queue, which has higher priority than the macrotask queue. Both `Promise.resolve().then()` callbacks execute in the order they were registered, outputting "3: Promise 1" and "6: Promise 2". Importantly, all microtasks must complete before any macrotasks can run.

**3. Macrotask Queue (setTimeout/setInterval)**
Finally, the event loop processes macrotasks. The `setTimeout` callbacks, even with 0ms delay, are macrotasks and execute after all microtasks complete. They run in order of their specified delays: the 0ms timeout executes first, followed by the 10ms timeout.

### Key Takeaway

The critical concept is that **microtasks always have priority over macrotasks**. Even though `setTimeout(..., 0)` appears to have no delay, it still executes after all Promise callbacks because Promises are microtasks. This priority system ensures predictable asynchronous behavior in JavaScript applications.
