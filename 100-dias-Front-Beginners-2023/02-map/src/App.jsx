import './App.css'
//Array
const users = [
  //Objects
  {
    id: 1,
    name: 'Carlos',
    addres: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Maria',
    addres: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    id: 3,
    name: 'Matheus',
    addres: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]
/*
function App() {
  return (
    <>
      <div>{users.map((user) => (
        <div key={user.id}>
          {user.name}, {user.age}
        </div>
      ))}</div>
    </>
  )
}
*/
function App() {
  return (
    <>
      <div>{users.map((user, index) => (
        <div key={index}>
          {user.name}, {user.age}, index = {index}
        </div>
      ))}</div>
    </>
  )
}

export default App
