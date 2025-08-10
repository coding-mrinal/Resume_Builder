import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview..jsx'
import TemplateSelector from './components/TemplateSelector'
import ColorThemeSelector from './components/ColorThemeSelector'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [resumeData, setResumeData] = useLocalStorage('resumeData', {
    personal: { name: '', email: '', phone: '', location: '', summary: '' },
    experience: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ institution: '', degree: '', year: '', gpa: '' }],
    skills: ['']
  })

  const [selectedTemplate, setSelectedTemplate] = useLocalStorage('selectedTemplate', 'modern')
  const [colorTheme, setColorTheme] = useLocalStorage('colorTheme', 'blue')
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({ ...prev, [section]: data }))
  }

  const handlePrint = () => window.print()

  const moveArrayItem = (array, fromIndex, toIndex) => {
    const item = array[fromIndex]
    const newArray = [...array]
    newArray.splice(fromIndex, 1)
    newArray.splice(toIndex, 0, item)
    return newArray
  }

  const moveExperienceItem = (fromIndex, toIndex) => {
    const newExperience = moveArrayItem(resumeData.experience, fromIndex, toIndex)
    updateResumeData('experience', newExperience)
  }

  const moveEducationItem = (fromIndex, toIndex) => {
    const newEducation = moveArrayItem(resumeData.education, fromIndex, toIndex)
    updateResumeData('education', newEducation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm border-b border-slate-200 dark:border-slate-700 no-print">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <div className="flex items-center gap-4">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <button 
                onClick={handlePrint}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 no-print">
          <div className="grid md:grid-cols-2 gap-6">
            <TemplateSelector 
              selectedTemplate={selectedTemplate} 
              setSelectedTemplate={setSelectedTemplate} 
            />
            <ColorThemeSelector 
              colorTheme={colorTheme} 
              setColorTheme={setColorTheme} 
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="no-print">
            <ResumeForm 
              resumeData={resumeData} 
              updateResumeData={updateResumeData}
              moveExperienceItem={moveExperienceItem}
              moveEducationItem={moveEducationItem}
            />
          </div>
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <ResumePreview 
              resumeData={resumeData} 
              template={selectedTemplate}
              colorTheme={colorTheme}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App