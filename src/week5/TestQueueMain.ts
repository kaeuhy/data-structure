import ArrayQueue from "./ArrayQueue";

const testQueue = new ArrayQueue<E>(5);

testQueue.enqueue("왕우민");
testQueue.enqueue("오준택");
console.log(`${testQueue.size()}`);
console.log(`${testQueue.peek()}`);