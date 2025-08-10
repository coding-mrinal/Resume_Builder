import { useState } from 'react'

function ResumeForm({ resumeData, updateResumeData }) {
  const [activeSection, setActiveSection] = useState('personal')

  const updatePersonal = (field, value) => {
    updateResumeData('personal', { ...resumeData.personal, [field]: value })
  }

  const updateArray = (section, index, field, value) => {
    const updated = resumeData[section].map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    )
    updateResumeData(section, updated)
  }

  const addItem = (section, template) => {
    updateResumeData(section, [...resumeData[section], template])
  }

  const removeItem = (section, index) => {
    updateResumeData(section, resumeData[section].filter((_, i) => i !== index))
  }

  const sections = [
    { key: 'personal', label: '👤 Personal' },
    { key: 'experience', label: '💼 Experience' },
    { key: 'education', label: '🎓 Education' },
    { key: 'skills', label: '⚡ Skills' }
  ]

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl border p-6">
      <div className="flex border-b mb-6">
        {sections.map(section => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`py-3 px-6 font-medium transition-all ${
              activeSection === section.key 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {activeSection === 'personal' && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={resumeData.personal.name || ''}
            onChange={(e) => updatePersonal('name', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={resumeData.personal.email || ''}
            onChange={(e) => updatePersonal('email', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={resumeData.personal.phone || ''}
            onChange={(e) => updatePersonal('phone', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={resumeData.personal.location || ''}
            onChange={(e) => updatePersonal('location', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Professional Summary"
            value={resumeData.personal.summary || ''}
            onChange={(e) => updatePersonal('summary', e.target.value)}
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {activeSection === 'experience' && (
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <h3 className="font-medium">Experience {index + 1}</h3>
                {resumeData.experience.length > 1 && (
                  <button
                    onClick={() => removeItem('experience', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company || ''}
                  onChange={(e) => updateArray('experience', index, 'company', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position || ''}
                  onChange={(e) => updateArray('experience', index, 'position', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Duration"
                value={exp.duration || ''}
                onChange={(e) => updateArray('experience', index, 'duration', e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description"
                value={exp.description || ''}
                onChange={(e) => updateArray('experience', index, 'description', e.target.value)}
                rows="3"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            onClick={() => addItem('experience', { company: '', position: '', duration: '', description: '' })}
            className="w-full py-3 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50"
          >
            + Add Experience
          </button>
        </div>
      )}

      {activeSection === 'education' && (
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <h3 className="font-medium">Education {index + 1}</h3>
                {resumeData.education.length > 1 && (
                  <button
                    onClick={() => removeItem('education', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution || ''}
                  onChange={(e) => updateArray('education', index, 'institution', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree || ''}
                  onChange={(e) => updateArray('education', index, 'degree', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year || ''}
                  onChange={(e) => updateArray('education', index, 'year', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="GPA"
                  value={edu.gpa || ''}
                  onChange={(e) => updateArray('education', index, 'gpa', e.target.value)}
                  className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
          <button
            onClick={() => addItem('education', { institution: '', degree: '', year: '', gpa: '' })}
            className="w-full py-3 border-2 border-dashed border-green-300 rounded-lg text-green-600 hover:bg-green-50"
          >
            + Add Education
          </button>
        </div>
      )}

      {activeSection === 'skills' && (
        <div className="space-y-3">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder={`Skill ${index + 1}`}
                value={skill || ''}
                onChange={(e) => {
                  const updated = resumeData.skills.map((s, i) => i === index ? e.target.value : s)
                  updateResumeData('skills', updated)
                }}
                className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              {resumeData.skills.length > 1 && (
                <button
                  onClick={() => removeItem('skills', index)}
                  className="px-3 text-red-500 hover:text-red-700 rounded hover:bg-red-50"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => addItem('skills', '')}
            className="w-full py-3 border-2 border-dashed border-purple-300 rounded-lg text-purple-600 hover:bg-purple-50"
          >
            + Add Skill
          </button>
        </div>
      )}
    </div>
  )
}

export default ResumeForm