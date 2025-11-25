import Card from "../components/Card";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function Home() {
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/getTasks")
      .then((response) => {
        console.log("DATA FROM API:", JSON.stringify(response.data.tasks, null, 2));
        setTask(response.data.tasks || []); // Store task in state
      })
      .catch((error) => {
        console.error("Error: ", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload(); // or use App-level setAuth(false) if passed as prop
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ml-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <Card key={task._id} task={task} />)
        ) : (
          <p>No tasks available</p>
        )}
      </div>

      <div className="mt-4 ml-4">
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default Home;
