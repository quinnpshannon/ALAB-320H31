import { useState } from 'react'
import { learners } from './data/learners'
import './App.css'
import Learner from './components/Learner';

function App() {
  const [learnersState, setLearners] = useState(learners);
  return (
    <>
      <Learner learners={learnersState}/>
    </>
  )
}

export default App