import {reducer, StateType} from "./reducer";


test("collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: "click"})

    //expect
    expect(newState.collapsed).toBe(true)
})


// test("should be error", () => {
//     //data
//     const state: StateType = {
//         collapsed: true
//     }
//
//     //expect
//     expect(() => {
//         reducer(state, {type: "error"})
//     }).toThrowError();
// })