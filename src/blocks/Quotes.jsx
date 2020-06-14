import React from 'react'

const QuotesItem = ({ quote, person, position, image }) => (
  <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
    <div class="h-full text-center">
      {image && (
        <img
          alt="testimonial"
          class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src="https://dummyimage.com/302x302"
        />
      )}
      <p class="leading-relaxed">{quote}</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
        {person}
      </h2>
      <p class="text-gray-500">{position}</p>
    </div>
  </div>
)

const Quotes = ({ items = [] }) => (
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {items.map((item, index) => (
          <QuotesItem key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
)

export default Quotes
