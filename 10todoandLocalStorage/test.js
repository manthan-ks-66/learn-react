// // let arr1 = ["Manthan", "rohan", "Shubham"];
// let arr2 = ["Surya", "kirti", "sanjana"];

// const arr3 = arr2.map((arr) => (arr === "Surya" ? "Manthan" : arr));

// // console.log(arr3);

let obj1 = {
  username: "manthan",
  isLoggedIn: true,
  password: "abc",
};

let obj2 = {
  user: "rohan",
  loggedIn: false,
  pass: "rhn",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
// this will create combined object and output will be:
// {
//     username: 'manthan',
//     isLoggedIn: true,
//     password: 'abc',
//     user: 'rohan',
//     loggedIn: false,
//     pass: 'rhn'
//   }

// to override / change the key value in object:
console.log({ ...obj1, isLoggedIn: false });

// { username: 'manthan', isLoggedIn: false, password: 'abc' }
