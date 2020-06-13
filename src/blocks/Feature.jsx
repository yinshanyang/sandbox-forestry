const FeatureItem = ({ title, items }) => (
  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
      {title}
    </h2>
    <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
      {items.map((item, index) => (
        <a key={index} className="mb-2">
          <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {item}
        </a>
      ))}
    </div>
  </div>
)

const Feature = ({ title, description, items }) => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {items.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
)

export default Feature
