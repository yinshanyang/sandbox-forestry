import React from 'react'

const Content = ({ title, content }) => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
        {title}
      </h2>
      <div className="md:w-3/5 md:pl-6">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-base mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </section>
)

export default Content
