```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Adding count to the dependency array ensures that the effect only runs
    // once after the initial render, and not on every render.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
export default MyComponent;
```