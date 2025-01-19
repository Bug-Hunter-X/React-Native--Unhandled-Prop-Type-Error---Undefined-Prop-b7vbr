# React Native: Unhandled Prop Type Error - Undefined Prop

This repository demonstrates a common React Native error: encountering an undefined prop within a component. This frequently occurs when dealing with asynchronous data fetching; the component renders before the data is fully loaded, leading to an undefined prop and a runtime error. 

The `bug.js` file showcases the problematic code, while `bugSolution.js` presents a solution using conditional rendering and the optional chaining operator to safely handle the potentially undefined prop.