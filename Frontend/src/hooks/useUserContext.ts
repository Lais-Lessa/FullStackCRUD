import { useContext } from 'react'
import { UserContext } from '../providers/UserContext/UserContext'

export const useUserContext = () => useContext(UserContext)