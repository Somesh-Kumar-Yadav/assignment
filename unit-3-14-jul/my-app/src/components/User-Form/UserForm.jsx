import React from "react";
import { UserFormInput } from "./UserFormInput";
import { UserFromDisplay } from "./UserFormDisplay";
export function UserForm() {
    const [toggle, setToggle] = React.useState(false);
    return <>
        <UserFormInput toggle={toggle} setToggle={setToggle} />
        <UserFromDisplay toggle={toggle} setToggle={setToggle}/>
    </>
}