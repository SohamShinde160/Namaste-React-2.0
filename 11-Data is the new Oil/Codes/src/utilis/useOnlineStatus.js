import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // CHECK IF ONLINE , RETURN ONLINE STATUS
    // ONLINE STATUS IS A BOOLEAN => TRUE or FALSE

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    },[])

    return onlineStatus;
}

export default useOnlineStatus;