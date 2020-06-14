import React from 'react'

import Link from 'next/link'

const Hero = ({ title, description, image = '', cta = [] }) => (
  <section className="text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        {title && (
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
        )}
        {description && <p className="mb-8 leading-relaxed">{description}</p>}
        {cta.length > 0 && (
          <div className="flex justify-center">
            {cta.map(({ label, path }, index) => (
              <Link key={index} href={path}>
                <button
                  className={[
                    'mr-4 inline-flex py-2 px-6 focus:outline-none rounded text-lg',
                    index === 0
                      ? 'text-white bg-indigo-500 hover:bg-indigo-600'
                      : 'text-gray-700 bg-gray-200 hover:bg-gray-300',
                  ].join(' ')}
                >
                  {label}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      )}
    </div>
  </section>
)

export default Hero
