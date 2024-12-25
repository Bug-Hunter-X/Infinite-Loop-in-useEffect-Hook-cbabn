```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the count changes every render,
    // triggering a re-render, which changes the count again, and so on.
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```