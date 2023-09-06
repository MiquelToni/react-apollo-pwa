import { useQuery } from "@apollo/client"
import { gql } from "@gql/gql"

const GET_LOCATIONS = gql(`
  query ExampleQuery {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`)

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div className="flex flex-col gap-1">
      <label>SpaceX CEO</label>
      <h3>· {data?.company?.ceo ?? "ceo not found :("}</h3>
    </div>
  )
}

function App() {
  return (
    <div className="flex grow justify-center items-center bg-slate-600 h-screen">
      <div className="bg-white rounded-lg p-4">
        <h2>My first Apollo app 🚀</h2>
        <br />
        <DisplayLocations />
      </div>
    </div>
  )
}

export default App
