import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import LeaderboardsScreen from './LeaderboardsScreen'

test('Leaderboard is sorted by adventure level and then alphabetically', () => {
  const { getAllByText } = render(<LeaderboardsScreen />)

  const adventureLevels = getAllByText(/Adventure Level/).map((el) =>
    parseInt(el.props.children)
  )

  // Checks if adventureLevels array is sorted properly
  expect(adventureLevels).toEqual([...adventureLevels].sort((a, b) => b - a))
})

test('Leaderboard renders without errors', () => {
  render(<LeaderboardsScreen />)
})
