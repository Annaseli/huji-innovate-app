import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import styles from './Home.module.css'

export default function Home() {
  const { user } = useAuthContext()

return (
    <div className="home">
      
    </div>
  )
}