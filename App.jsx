import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {

  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch(" https://reqres.in/api/users?page=1");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);

  return (
    <div className="App">
      <h1>Users View</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {         

            return (
              <Link to="/userinfo">
              <div className="card" > 
                <div key={user.id}>
                  <img alt="avatar" key={user.avatar} src={user.avatar} /> 
                
                <p><strong>{user.first_name}</strong></p>
                <p>{user.email}</p>
               </div>
              </div>
              </Link>
                
            );
          })}
      </div>
    </div>
  );
}

