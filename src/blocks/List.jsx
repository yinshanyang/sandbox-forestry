import React from 'react'

const ListItem = ({ title, content }) => (
  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-base">{content}</p>
    </div>
  </div>
)

const List = ({ title, content, items = [] }) => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          {title}
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-base">{content}</p>
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

// export const form = {
//   label: 'List',
//   key: 'ListBlock',
//   fields: [
//     {
//       name: 'title',
//       label: 'Title',
//       component: 'text',
//     },
//     {
//       name: 'content',
//       label: 'Content',
//       component: 'textarea',
//     },
//     {
//       name: 'items',
//       label: 'Items',
//       component: 'group-list',
//       fields: [
//         {
//           name: 'title',
//           label: 'Title',
//           component: 'text',
//         },
//         {
//           name: 'content',
//           label: 'Content',
//           component: 'textarea',
//         },
//       ],
//       defaultItem: {
//         title: 'Shooting Stars',
//         content:
//           'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
//       },
//     },
//   ],
//   defaultItem: {
//     title: 'Pitchfork Kickstarter Taxidermy',
//     content:
//       'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.',
//     items: [
//       {
//         title: 'Shooting Stars',
//         content:
//           'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
//       },
//     ],
//   },
// }
