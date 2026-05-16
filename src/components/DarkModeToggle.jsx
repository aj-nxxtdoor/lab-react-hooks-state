import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
