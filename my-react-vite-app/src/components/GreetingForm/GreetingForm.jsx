
import { useActionState } from "react";

const submitForm = async(prevState, formData) => {
  const name = formData.get('name');

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {message: `Hello ${name}`}
}

const GreetingForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitForm, {message: ''}
  )

  return (
    <form action={formAction}>
        <h2>Greeting Form</h2>
      <input type="text" name="name" required/>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}</button>
      <p>{state.message}</p>
    </form>
  )
}

export default GreetingForm;