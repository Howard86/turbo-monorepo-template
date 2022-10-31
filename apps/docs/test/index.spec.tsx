import { render, screen } from '@testing-library/react'
import Docs from '@/pages/index'

describe('docs', () => {
  it('should render', () => {
    expect.hasAssertions()
    render(<Docs />)

    expect(screen.getByText(/@org Documentation/i)).toBeInTheDocument()
  })
})
