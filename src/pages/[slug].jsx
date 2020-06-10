import React from 'react'

import Blocks from '~/blocks'

const Page = ({ data }) => (
  <div className="container mx-auto p-5">
    {data.blocks.map((block, index) => {
      const Block = Blocks[block.template]
      return <Block key={index} {...block} />
    })}
  </div>
)

export async function getStaticPaths() {
  const path = require('path')
  const fs = require('fs')
  const dataPath = path.resolve(process.cwd(), 'src/data/pages')
  const files = fs
    .readdirSync(dataPath)
    .filter((d) => !d.match(/^[\._]/))
    .map((d) => d.replace('.md', ''))
  return {
    paths: files.map((d) => ({ params: { slug: d } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const path = require('path')
  const fs = require('fs')
  const matter = require('gray-matter')

  const slug = context.params.slug
  const dataPath = path.resolve(process.cwd(), `src/data/pages/${slug}.md`)
  const data = fs.existsSync(dataPath)
    ? matter(fs.readFileSync(dataPath)).data
    : { blocks: [] }

  return { props: { slug, data } }
}

export default Page
