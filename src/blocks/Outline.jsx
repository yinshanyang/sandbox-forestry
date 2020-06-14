const FeatureItem = ({ title, items }) => (
  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
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

const Outline = ({ title, subtitle, description, items }) => (
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
      {items.map(({ title, items }, index) => (
        <div className="w-full mb-20">
          <h3 class="w-full text-center text-xl font-medium title-font mb-4 text-gray-900">
            {title}
          </h3>
          <div className="flex flex-wrap -m-4">
            {items.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Outline
