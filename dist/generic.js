"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState("foo"); // é uma string
console.log(newState.getState());
//newState.setState(123); // tem que dar erro
//console.log(newState.getState());
newState.setState("bla");
console.log(newState.getState());
