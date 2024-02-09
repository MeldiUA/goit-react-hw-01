
import './App.css'
import  userData  from './components/task_1/userData.json'
import { Profile } from './components/task_1/Profile'
import friends from './components/task_2/friends.json'
import { FriendList } from './components/task_2/FriendList'
import transactions from './components/task_3/transactions.json'
import { TransactionHistory } from './components/task_3/TransactionHistory'

function App() {

  return (
    <>
    <Profile userData={userData}/>
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions}/>
    </>
  )
}

export default App
