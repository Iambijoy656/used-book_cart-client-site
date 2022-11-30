import { useEffect, useState } from "react";

const useRole = (email) => {
    const [userRole, setUserRole] = useState("");
    const [userRoleLoading, setUserRoleLoading] = useState(true)

    useEffect(() => {
        if (email) {
            setUserRoleLoading(true)
            fetch(`https://books-cart-server.vercel.app/userRole?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.role)
                    setUserRole(data.role);
                    setUserRoleLoading(false)

                });
        }

    }, [email]);

    return [userRole, userRoleLoading];
};

export default useRole;
