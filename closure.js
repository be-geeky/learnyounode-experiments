// The following code will output

// My value: 3
// My value: 3
// My value: 3

var funcs = [];
for (var i = 0; i < 3; i++) {      // let's create 3 functions
  funcs[i] = function() {          // and store them in funcs
    console.log("My value: " + i); // each should log its value.
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();                      // and now let's run each one to see
}

console.log("===================================================================");
// The following code will output

// My value: 0
// My value: 1
// My value: 2

var funcs = [];

function createfunc(i) {
    return function() { console.log("My value: " + i); };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}
