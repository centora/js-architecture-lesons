import { useState } from 'react'
import './App.css'
import { useActionState } from "react";

async function increment(previousState, formData) {
  const amount = Number(formData.get("amount"));

  await new Promise(resolve => setTimeout(resolve, 2000));

  return previousState + amount;
}

function Counter() {
  const [count, incrementAction, isPending] = useActionState(
    increment,
    10
  );

  return (
    <form action={incrementAction}>
      <input
        type="number"
        name="amount"
        defaultValue="5"
      />

      <button type="submit" disabled={isPending}>
        {isPending ? 'Adding' : 'Add'}</button>

      <p>Count: {count}</p>
    </form>
  );
}
function App() {
  const [count, setCount] = useState(0)


  const list = ['1', '2', '3']

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <ul>
          {
            list.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <Counter />
      </section>
    </>
  )
}

export default App
