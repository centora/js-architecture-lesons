import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const formatValue = (value: string | number | null) => {
    if(typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value.toFixed(2);
    } else {
        return "No value"
    }
  }
//   const calculateTotal = (price: number, quantity: number = 1): number => {
//     return price * quantity;
//   };
//   const printProductInfo = (name: string, price: number, description?: string): void => {
//     console.log(`${name} costs ${price}`);
//     console.log(description ?? "No description")
//   }
//   const printUserInfo = (name: string, age: number): void => {
//     console.log(`User ${name} is ${age} years old`)
//   }
//   const calculateDiscount = (price: number, discount: number): number => {
//     const finalPrice = price - (price * discount / 100)
//     return finalPrice;
//   }

  useEffect(() => {
    //console.log('PRICE WITH DISCOUNT--->>: ', calculateDiscount(1000, 20));
    // printUserInfo("Anna", 25);
    // printProductInfo("Keyboard", 1200, "Mechanical keyboard");
    // printProductInfo("Mouse", 500);
    // console.log(calculateTotal(500));
    // console.log(calculateTotal(500, 3));
    console.log(">>>>>>>>>>>>>>>>>>>>");
 console.log(formatValue("hello")); // HELLO
console.log(formatValue(25));      // 25.00
console.log(formatValue(null));     // "No value"


    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: User[] = await response.json();

        if (!controller.signal.aborted) {
          setUsers(data);
        }
      } catch (error: unknown) {
        if (!controller.signal.aborted) {
          setError(
            error instanceof Error
              ? error.message
              : "Unknown error"
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadUsers();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;