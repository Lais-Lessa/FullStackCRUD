import { AddContactForm } from "../../components/HomePage/TodoList/AddContactForm"
import { useContext, useEffect, useState } from "react"
import { api } from "../../services/Api";
import { toast } from "react-toastify";
import { ContactContext } from "../../providers/UserContext/ContactContext.tsx/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";


export const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const { setContactList } = useContext(ContactContext);
  const { setUser, globalLoading } = useContext(UserContext)
  const userJSON = localStorage.getItem("user");
  const token = localStorage.getItem("@TOKEN")
  const user = userJSON ? JSON.parse(userJSON) : null;


  useEffect(()=>{
    setUser(user)
  },[])

  useEffect(() => {
    const fetchContacts = async () => {

      try {
        setLoading(true);

        if(user) {
          const { data } = await api.get('/contact', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setContactList(data); 
        }
      } catch (error) {
        toast.error('Oops! Algo deu errado ao carregar o seu contato, tente novamente mais tarde');
      } finally {
        setLoading(false) 
      }
    };
  
    fetchContacts();
  }, [globalLoading]);

  return (
    <main>
      { user && (
        <AddContactForm/>
        )}
    </main>
  )
}

