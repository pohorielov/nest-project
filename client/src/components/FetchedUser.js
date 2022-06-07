import React from "react";
import {useSelector} from "react-redux";
// import {fetchedUser} from "../redux/actions";
import User from "./User";

export default () => {
    const user = useSelector(state => state.user.fetchedUser)

    // const dispatch = useDispatch()
    //
    // React.useEffect(() => {
    //     if (!user.length) {
    //         // fetchedUser(dispatch)
    //     }
    // }, [])

    return (
        <>
            {user.map(user => <User user={user} key={user.id} />)}
        </>
    )
}
