import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote, vote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  const voteHandler = (id) => dispatch(vote(id))

  const anecdoteHandler = (e) => {
    e.preventDefault()
    const content = e.target.elements.newAnecdote.value
    e.target.elements.newAnecdote.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteHandler(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      <h2>create new</h2>
      <form onSubmit={anecdoteHandler}>
        <div>
          <input name='newAnecdote' type='text' required />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
