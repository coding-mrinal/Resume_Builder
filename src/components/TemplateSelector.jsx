function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    { id: 'modern', name: 'Modern', preview: '🎨' },
    { id: 'professional', name: 'Professional', preview: '💼' },
    { id: 'creative', name: 'Creative', preview: '✨' },
    { id: 'minimal', name: 'Minimal', preview: '⚪' }
  ]

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Choose Template</h3>
      <div className="grid grid-cols-2 gap-3">
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedTemplate === template.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500'
            }`}
          >
            <div className="text-2xl mb-2">{template.preview}</div>
            <div className="text-sm font-medium">{template.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector