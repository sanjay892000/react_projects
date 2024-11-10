import { useParams } from "react-router-dom"

function GitUser() {
 
    const {userId} = useParams()

  return (
    <div className="py-28 text-center">
      <p className="text-2xl font-semibold capitalize">user Id is: <span className="text-emerald-900 text-3xl">{userId}</span></p>
    </div>
  )
}

export default GitUser
