import {useAtom} from "jotai";
import {user} from "@/atoms/user";

export default function LoginPage() {

    const [useUser, setUseUser] = useAtom(user);
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={()=> {
                setUseUser({_id: 1, name:'AG'})
            }}>Click to Login</button>
        </div>)
}