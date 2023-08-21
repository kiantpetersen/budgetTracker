// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"
import './App.css'
import { getCode, getDay } from './Helpers/helpers'
import Balance from './Components/Balance'
import SpendingView from './Components/SpendingView'
import Edit from './Components/Edit'
import { useState } from 'react'
import { data, monthlyIncome } from './Components/data'
import Expenses from './Components/Expenses'
import './queries.css'
function App() {
  const [statement, setStatement] = useState(data)
  const [expense, setExpenses] = useState([])
  const [day, setDay] = useState('')
  function addData(day, newItem) {
    const newId = Number(createId(day))
    setStatement(statement.map((item, key) =>
      item.x === day
        ? { ...item, y: item.y + Number(newItem.amount), expenses: [...item.expenses, { name: newItem.name, amount: Number(newItem.amount), id: newId }] }
        : item)
    )
    setExpenses(prev => [...prev, { name: newItem.name, amount: Number(newItem.amount), id: newId }])
  }
  function getBalance() {
    let spent = getSpent()

    let balance = monthlyIncome - spent
    return balance
  }
  function getSpent() {
    let spent = 0
    statement.map(day => {
      return day.expenses.map(item => {
        return spent += item.amount
      })
    })
    return spent
  }
  // getBalance()
  function getExpenses(arr, day) {
    setExpenses(arr)
    setDay(day)
  }
  function createId(day) {
    let num
    statement.map(item => {
      let res
      if (item.x === day) {
        res = num = item.expenses.length + 1
      }
      return res
    })
    const code = getCode(day)
    return code + num
  }


  function handleEdit(value, id) {
    const day = getDay(id)
    if (value === 'delete') {
      setStatement(statement.map(item => {
        if (item.x === day) {
          const expenses = item.expenses
          const res = expenses.filter((exp) => { return exp.id !== Number(id) })
          setExpenses(res)
          return { ...item, expenses: res }
        } else {
          return item
        }
      }))
    }
  }



  return (
    <ScrollAnimation animateOnce={false} animateIn="animate__fadeIn">
      <div className='budget-section'>
        {/* <ScrollAnimation animateIn="animate__backInLeft"> */}
        <h1 className='primary-heading'>Weekly Budget Tracker</h1>
        {/* </ScrollAnimation> */}
        <div className='budget-container'>

          <Balance balance={getBalance} />
          <div className='display-grid'>
            <SpendingView spent={getSpent} statement={statement} expenses={getExpenses} />
            <Expenses edit={handleEdit} data={expense} day={day} />
          </div>
          <Edit editData={addData} />
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default App
