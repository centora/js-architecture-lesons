import { useState } from 'react'
import './App.css'
import GreetingForm from "./components/GreetingForm/GreetingForm";
import LoginForm from "./components/LoginForm/LoginForm";
import UserRegistration from './components/UserRegistration/UserRegistration';
import { useActionState } from "react";
import PostsListFetch from './components/PostsListFetch/PostsListFetch';
import PostsListAxios from './components/PostsListAxios/PostsListAxios';
import PostsListSWR from './components/PostsListSWR/PostsListSWR';
import ProductDiscountCalculator from './components/ProductDiscountCalculator/ProductDiscountCalculator';
import FetchPostById from './components/FetchPostById/FetchPostById';
import Timer from './components/Timer/Timer';


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
        <Timer />
        <br />
        <br />

        <PostsListFetch />
        {/* <FetchPostById/> */}
        <br />
        <br />
        <ProductDiscountCalculator />
        {/* <PostsListSWR/> */}
        {/* <PostsListAxios/> */}

        <br />
        <br />
        <UserRegistration />
        <br />
        <br />
        <LoginForm/>
        <br />
        <br />
        <GreetingForm />
        <br />
        <br />
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
