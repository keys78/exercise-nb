/* eslint-disable no-undef */
// pages/index.test.tsx
import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Home page', () => {
  it('renders without crashing', () => {
    render(<Home />)
  })
})
