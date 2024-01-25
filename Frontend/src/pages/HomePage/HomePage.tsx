import { AddContactForm } from "../../components/HomePage/TodoList/AddContactForm"
import { useContext, useEffect } from "react"
import { ContactContext } from "../../providers/UserContext/ContactContext.tsx/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";


export const HomePage = () => {
  const { fetchContacts } = useContext(ContactContext);
  const { setUser } = useContext(UserContext)
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;


  useEffect(()=>{
    setUser(user)
  },[])

  useEffect(() => {
    (async () => {
      if(user) {
        await fetchContacts();
      } 
    })()
  }, []);

  return (
    <main>
      { user && (
        <AddContactForm/>
        )}
    </main>
  )
}

