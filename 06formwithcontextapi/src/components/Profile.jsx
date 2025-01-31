import { useContext } from "react"
import CreateContextApi from '../context/CreateContextApi.js';

function Profile() {
    const { user } = useContext(CreateContextApi)
    if (!user) {
        return (
            <div className="text-center pt-5 text-xl font-semibold text-orange-900 capitalize">User Not Exist</div>
        )
    } else {
        return (
            <div className="text-center pt-5 text-xl font-semibold text-orange-800 capitalize">
                Welcome {user.userName}
            </div>
        )

    }
}

export default Profile;
