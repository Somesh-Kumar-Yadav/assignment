import { useState } from "react";

export default function useMergeState(payload) {
    const [user, setUser] = useState(payload);
    function setState(payload) {
        const newUser = {
            ...user,
            username: user.username + payload.username,
            email:user.email+payload.email,
            password:user.password+payload.password,
        }
        setUser(newUser);
    }
     
    return [user,setState];
}