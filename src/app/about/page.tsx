import React from 'react'
import image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex green-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/zaman.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        Hi, I'm Qamar zaman, a Class 12th student at  RYKIBA College.I work as a freelancer, taking on various projects and tasks to gain new skills and experiences.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Qamar Zaman
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          student, Ai
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page