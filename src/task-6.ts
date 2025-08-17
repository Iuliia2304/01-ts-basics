function getFirstElement<T>(arr: T[]): T {
     return arr[0];
     
}

const num = getFirstElement<number>([1, 2, 3]);
console.log("Number:", num);

const str = getFirstElement<string>(["a", "b", "c"]);
console.log("String:", str); 

const bool = getFirstElement<boolean>([true, false, true]); 
console.log("Boolean:", bool);