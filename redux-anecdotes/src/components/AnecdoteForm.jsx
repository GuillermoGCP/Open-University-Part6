import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const anecdoteHandler = (e) => {
    e.preventDefault()
    const content = e.target.elements.newAnecdote.value
    e.target.elements.newAnecdote.value = ''
    dispatch(addAnecdote(content))
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={anecdoteHandler}>
        <div>
          <input name='newAnecdote' type='text' required />
        </div>
        <button>create</button>
      </form>
    </>
  )
}
export default AnecdoteForm
