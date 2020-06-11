import React from 'react'

import Blocks from '~/blocks'

const Page = ({ data }) => {
  // ! this is a hack to get to fast refresh in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const matter = require('gray-matter')
    const raw = require('~/data/pages/_index.md')
    data = matter(raw.default).data
  }
  return (
    <div className="container mx-auto p-5">
      {data.blocks.map((block, index) => {
        const Block = Blocks[block.template]
        return <Block key={index} {...block} />
      })}
    </div>
  )
}

export async function getStaticProps() {
  const path = require('path')
  const fs = require('fs')
  const matter = require('gray-matter')

  const dataPath = path.resolve(process.cwd(), 'src/data/pages/_index.md')
  const data = fs.existsSync(dataPath)
    ? matter(fs.readFileSync(dataPath)).data
    : { blocks: [] }

  return { props: { data } }
}

export default Page
