import React, { useEffect, useState } from "react";
import {
  collection, addDoc, getDocs,
  updateDoc, deleteDoc, doc
} from "firebase/firestore";
import { auth, db } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const usersCollection = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const addUser = async () => {
    if (!name || !email) return;

    await addDoc(usersCollection, { name, email });
    setName("");
    setEmail("");
    getUsers();
  };

  const updateUser = async (id) => {
    const newEmail = prompt("Enter new email:");
    await updateDoc(doc(db, "users", id), { email: newEmail });
    getUsers();
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    getUsers();
  };

  // ✅ Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
      if (user) getUsers();
    });
    return () => unsubscribe();
  }, []);

  if (!loggedInUser) {
    return <h3>Please Login First</h3>; // ✅ Hide CRUD before login
  }

  return (
    <div>
      <h2>CRUD with Firebase</h2>
      <button onClick={() => signOut(auth)}>Logout</button>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addUser}>Add</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UsersCRUD;



