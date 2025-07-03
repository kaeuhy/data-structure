import {ArrayList} from "./ArrayList";

const list = new ArrayList <number>();
list.add(0, 1);
list.add(1, 2);
list.set(1, 5);
list.get(0);

console.log(list);