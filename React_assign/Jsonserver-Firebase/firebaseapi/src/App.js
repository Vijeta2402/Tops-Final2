import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./Firebase";
import Login from "./Login";
import UsersCRUD from "./UsersCRUD";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // ✅ After Firebase checks Authentication
    });

    return () => unsubscribe(); // ✅ Clean up listener
  }, []);

  if (loading) return <h3>Checking Authentication...</h3>; // ✅ Prevent auto redirect

  return (
    <>
      {user ? <UsersCRUD user={user} /> : <Login />}
    </>
  );
}

export default App;

