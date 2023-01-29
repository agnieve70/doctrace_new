import {useAtom} from "jotai";
import {user} from "@/atoms/user";

export default function Layout(props) {

    const {children} = props;
    const [useUser, setUseUser] = useAtom(user);
    return (
        <div className="h-screen w-full">
            {Object.keys(useUser).length > 0 ? 'Logged in' : 'Not Logged in'}
            {children}
        </div>
    );
}