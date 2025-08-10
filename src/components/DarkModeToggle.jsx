function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      aria-label="Toggle dark mode"
    >
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white dark:bg-gray-300 rounded-full transition-transform duration-300 shadow-lg`}
      />
      <span className={`absolute left-1 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
        ☀️
      </span>
      <span className={`absolute right-1 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
        🌙
      </span>
    </button>
  )
}

export default DarkModeToggle