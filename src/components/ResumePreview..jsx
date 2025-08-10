function ResumePreview({ resumeData, template = "modern", colorTheme = "blue" }) {
  if (!resumeData) return <div>Loading...</div>

  const themeColors = {
    blue: { primary: "blue", gradient: "from-blue-600 to-blue-800", light: "blue-50", border: "blue-500", text: "blue-600" },
    emerald: { primary: "emerald", gradient: "from-emerald-600 to-emerald-800", light: "emerald-50", border: "emerald-500", text: "emerald-600" },
    purple: { primary: "purple", gradient: "from-purple-600 to-purple-800", light: "purple-50", border: "purple-500", text: "purple-600" },
    rose: { primary: "rose", gradient: "from-rose-600 to-rose-800", light: "rose-50", border: "rose-500", text: "rose-600" },
    amber: { primary: "amber", gradient: "from-amber-600 to-amber-800", light: "amber-50", border: "amber-500", text: "amber-600" },
    slate: { primary: "slate", gradient: "from-slate-600 to-slate-800", light: "slate-50", border: "slate-500", text: "slate-600" }
  };

  const colors = themeColors[colorTheme] || themeColors.blue;

  const templateStyles = {
    modern: {
      headerClasses: `bg-gradient-to-r ${colors.gradient} text-white p-8`,
      sectionTitleClasses: `text-2xl font-bold text-gray-800 border-b-2 border-${colors.border} pb-2 mb-4`,
      experienceItemClasses: `border-l-4 border-${colors.primary}-400 pl-6 py-2`,
      educationItemClasses: `flex justify-between items-start bg-${colors.light} p-4 rounded-lg border-l-4 border-${colors.primary}-400`,
      skillItemClasses: `bg-${colors.light} text-${colors.text} px-4 py-2 rounded-full font-medium border border-${colors.primary}-200`
    },
    professional: {
      headerClasses: `bg-${colors.primary}-700 text-white p-8`,
      sectionTitleClasses: `text-2xl font-bold text-${colors.primary}-800 pb-2 mb-4 border-b border-gray-300`,
      experienceItemClasses: `border-b border-gray-200 pb-6 mb-6 last:border-0 last:mb-0`,
      educationItemClasses: `bg-white p-4 rounded-lg shadow border border-gray-200`,
      skillItemClasses: `bg-white text-${colors.text} px-4 py-2 rounded font-medium border border-gray-200 shadow-sm`
    },
    creative: {
      headerClasses: `bg-white border-b-8 border-${colors.primary}-500 text-${colors.text} p-8`,
      sectionTitleClasses: `text-2xl font-bold text-${colors.primary}-600 pb-2 mb-4 inline-block relative after:absolute after:h-1 after:w-full after:bg-${colors.primary}-400 after:bottom-0 after:left-0`,
      experienceItemClasses: `rounded-lg bg-white p-5 shadow-md mb-6`,
      educationItemClasses: `bg-white p-4 rounded-lg shadow-md border-t-4 border-${colors.primary}-500`,
      skillItemClasses: `bg-gradient-to-r ${colors.gradient} text-white px-4 py-2 rounded-md font-medium`
    },
    minimal: {
      headerClasses: `bg-white text-gray-800 p-8 border-b-2 border-${colors.primary}-400`,
      sectionTitleClasses: `text-2xl font-bold text-${colors.primary}-600 pb-2 mb-4`,
      experienceItemClasses: `pb-6 mb-6 border-b border-gray-200 last:border-0 last:mb-0`,
      educationItemClasses: `border-l-2 border-${colors.primary}-300 pl-4 py-2 mb-4`,
      skillItemClasses: `border border-${colors.primary}-300 text-${colors.text} px-4 py-1 rounded font-medium`
    }
  };

  const currentTemplateStyle = templateStyles[template] || templateStyles.modern;

  return (
    <div id="resume-preview" className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl mx-auto" style={{ minHeight: '11in' }}>
      <div className={currentTemplateStyle.headerClasses}>
        <h1 className="text-4xl font-bold mb-4">
          {resumeData.personal?.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-6 text-lg">
          {resumeData.personal?.email && (
            <span className="flex items-center gap-2">📧 {resumeData.personal.email}</span>
          )}
          {resumeData.personal?.phone && (
            <span className="flex items-center gap-2">📱 {resumeData.personal.phone}</span>
          )}
          {resumeData.personal?.location && (
            <span className="flex items-center gap-2">📍 {resumeData.personal.location}</span>
          )}
        </div>
      </div>

      <div className="p-8">
        {resumeData.personal?.summary && (
          <div className="mb-8">
            <h2 className={currentTemplateStyle.sectionTitleClasses}>
              Professional Summary
            </h2>
            <p className={`text-gray-700 leading-relaxed bg-${colors.light} p-4 rounded-lg`}>
              {resumeData.personal.summary}
            </p>
          </div>
        )}

        {resumeData.experience?.length > 0 && resumeData.experience.some(exp => exp.company || exp.position) && (
          <div className="mb-8">
            <h2 className={currentTemplateStyle.sectionTitleClasses}>
              Experience
            </h2>
            <div className="space-y-6">
              {resumeData.experience
                .filter(exp => exp.company || exp.position)
                .map((exp, index) => (
                <div key={index} className={currentTemplateStyle.experienceItemClasses}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.position || 'Position'}
                      </h3>
                      <p className={`text-${colors.text} font-semibold text-lg`}>
                        {exp.company || 'Company'}
                      </p>
                    </div>
                    {exp.duration && (
                      <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {resumeData.education?.length > 0 && resumeData.education.some(edu => edu.institution || edu.degree) && (
          <div className="mb-8">
            <h2 className={currentTemplateStyle.sectionTitleClasses}>
              Education
            </h2>
            <div className="space-y-4">
              {resumeData.education
                .filter(edu => edu.institution || edu.degree)
                .map((edu, index) => (
                <div key={index} className={currentTemplateStyle.educationItemClasses}>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {edu.degree || 'Degree'}
                    </h3>
                    <p className={`text-${colors.text} font-semibold`}>
                      {edu.institution || 'Institution'}
                    </p>
                  </div>
                  <div className="text-right">
                    {edu.year && (
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm mb-1">
                        {edu.year}
                      </div>
                    )}
                    {edu.gpa && (
                      <div className={`text-${colors.text} font-semibold text-sm`}>
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {resumeData.skills?.length > 0 && resumeData.skills.some(skill => skill && skill.trim()) && (
          <div className="mb-8">
            <h2 className={currentTemplateStyle.sectionTitleClasses}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills
                .filter(skill => skill && skill.trim())
                .map((skill, index) => (
                <span
                  key={index}
                  className={currentTemplateStyle.skillItemClasses}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumePreview