function ColorThemeSelector({ colorTheme, setColorTheme }) {
  const themes = [
    { id: 'blue', name: 'Ocean Blue', colors: ['bg-blue-500', 'bg-blue-600'] },
    { id: 'emerald', name: 'Emerald Green', colors: ['bg-emerald-500', 'bg-emerald-600'] },
    { id: 'purple', name: 'Royal Purple', colors: ['bg-purple-500', 'bg-purple-600'] },
    { id: 'rose', name: 'Rose Pink', colors: ['bg-rose-500', 'bg-rose-600'] },
    { id: 'amber', name: 'Golden Amber', colors: ['bg-amber-500', 'bg-amber-600'] },
    { id: 'slate', name: 'Professional Gray', colors: ['bg-slate-500', 'bg-slate-600'] }
  ]

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Color Theme</h3>
      <div className="grid grid-cols-3 gap-3">
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => setColorTheme(theme.id)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 ${
              colorTheme === theme.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30'
                : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500'
            }`}
          >
            <div className="flex gap-1 mb-2 justify-center">
              {theme.colors.map((color, index) => (
                <div key={index} className={`w-4 h-4 rounded-full ${color}`} />
              ))}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">{theme.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ColorThemeSelector