import React from 'react'

import Link from 'next/link'

const ListItem = ({ title, body, icon, path }) => (
  <div className="p-4 md:w-1/3">
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="flex items-center mb-3">
        {icon && (
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
        )}
        {title && (
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        )}
      </div>
      <div className="flex-grow">
        {body && <p className="leading-relaxed text-base">{body}</p>}
        {path && (
          <Link href={path}>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  </div>
)

const List = ({ title, subtitle, description, items = [] }) => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        {subtitle && (
          <h2 className="text-xs uppercase text-indigo-500 tracking-widest font-medium title-font mb-1">
            {subtitle}
          </h2>
        )}
        {title && (
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {title}
          </h1>
        )}
        {description && (
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-wrap -m-4">
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
)

export default List
