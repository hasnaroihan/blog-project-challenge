import api from "../services/api"
import UserItem from "./userItem"

export default async function Users() {
	// const userList = await api.getUsers()

	const dummyUserList = {
		status: 200,
		data: [
			{
				user_id: 10,
				name: "Koki Masak",
				gender: "female",
				email: "kokimasak@example.com",
				status: "active"
			},
			{
				user_id: 45,
				name: "Tikus Rumah",
				gender: "female",
				email: "tikusrumah@example.com",
				status: "active"
			  },
			  {
				user_id: 2,
				name: "Monyet Kulkas",
				gender: "male",
				email: "monyetkulkas@example.com",
				status: "inactive"
			  }
		]
	}

    return (
      <main>
        <div className="w-screen">
          {
			dummyUserList.status == 200 ? dummyUserList.data.map((item) => {
				return <UserItem data={item} key={item.user_id}/>
			}) : dummyUserList.status
		  }
        </div>
      </main>
    )
  }