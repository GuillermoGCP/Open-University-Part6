import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

let initialStateTest
let state

describe('unicafe reducer', () => {
  beforeEach(() => {
    initialStateTest = {
      good: 0,
      ok: 0,
      bad: 0,
    }
    state = {
      good: 5,
      ok: 4,
      bad: 2,
    }
  })

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO NOTHING',
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialStateTest)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 6,
      ok: 4,
      bad: 2,
    })
  })
  test('good is decremented', () => {
    const action = {
      type: 'GOOD_DECREMENT',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 4,
      ok: 4,
      bad: 2,
    })
  })
  test('ok is incremented', () => {
    const action = {
      type: 'OK',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 5,
      ok: 5,
      bad: 2,
    })
  })
  test('ok is decremented', () => {
    const action = {
      type: 'OK_DECREMENT',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 5,
      ok: 3,
      bad: 2,
    })
  })
  test('bad is incremented', () => {
    const action = {
      type: 'BAD',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 5,
      ok: 4,
      bad: 3,
    })
  })
  test('bad is decremented', () => {
    const action = {
      type: 'BAD_DECREMENT',
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 5,
      ok: 4,
      bad: 1,
    })
  })

  test('all stats are reset', () => {
    const action = {
      type: 'ZERO',
    }
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialStateTest)
  })
})
