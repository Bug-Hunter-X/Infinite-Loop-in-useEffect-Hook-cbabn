# React Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by improper use of the `useEffect` hook. The `MyComponent` initially renders with `count` as 0. The `useEffect` hook then immediately increments `count`, causing a re-render, which triggers the effect again, and so on, leading to an infinite loop. This example highlights the importance of managing dependencies correctly when using useEffect and useCallback to prevent unexpected behavior.

## Solution

The solution lies in adding the count variable as a dependency. This way useEffect will only run when there's an actual change in the state.