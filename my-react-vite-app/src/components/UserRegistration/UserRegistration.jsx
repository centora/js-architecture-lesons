import { useActionState } from "react";

const registerUser = async(username, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    if(email === "admin@example.com") {
        throw new Error("Email is already registered");
    }

    return {
        success: true,
        message: `Welcome ${username}!`
    };

};

const registrationAction = async(prevState, formData) => {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try{
        return await registerUser(username, email, password);
    } catch(error) {
        console.error('Error: ', error);
        return {
                success: false,
                message: error
            };
    }

    
    
}


const UserRegistration = () => {
    const [state, formAction, isPending] = useActionState(
        registrationAction,
        {
            username: '',
            email: '',
            password: '',
            success: null,
            message: ''
        }
    )
    return (
        <form action={formAction}>
            <h2>User Registration</h2>
            <input 
                type="text" 
                name="username" 
                required 
            />
            <input 
                type="email" 
                name="email"
                required
            />
            <input 
                type="password" 
                name="password"
                minLength="6"
                required
            />
            <button disabled={isPending}>
                { isPending ? 'Registering ...' : 'Register'}
            </button>

            {
                state.success !== null && 
                (<p style={{color: state.success ? 'green' : 'red'}}>
                    { state.message }
                </p>)
            }   
        </form>
    )
}

export default UserRegistration;