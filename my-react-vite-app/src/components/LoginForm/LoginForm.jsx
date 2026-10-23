import { useActionState } from "react";
const submitForm = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');


    const successFormSubmision = email === "admin@example.com" && 
    password === "123456";
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        successFormSubmision,
        failedAttempts: !successFormSubmision ? 0 : prevState.failedAttempts + 1
    }
}

const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(
        submitForm, {
            email: '',
            password: '',
            successFormSubmision: null,
            failedAttempts: 0
        }
    )
    return(
        <form action = {formAction}>
            <h2>Login Form</h2>
            <strong>Failed Attempts: {state.failedAttempts}</strong>  <br />
            <input 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                required />
            <input 
                type="password"
                name="password"
                placeholder="Enter Password"
                required
            /> 
            <button disabled={isPending}>
                {isPending ? 'Logging in....' :  'Login'}
            </button>

            
            {state.successFormSubmision !== null && (
                <p style={{color: state.successFormSubmision ? 'green' : 'red'}}>
                {state.successFormSubmision ? 
                "Login successful!" : 
                "Invalid email or password."}
                </p>)
            }
        </form>
    )
}

export default LoginForm;