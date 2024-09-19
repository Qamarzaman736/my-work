import React from 'react'
import image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex blue-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/h.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        My home is about 7marla and consist of 2 story.There are 6 rooms and 2 kichan in it.tThere is a Gov.t college in the front of my house.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Home
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          City, RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page