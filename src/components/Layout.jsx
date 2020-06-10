import React from 'react'

import Header from './Header'

const Layout = ({ children }) => (
  <div className="box-border min-h-screen pb-24 flex flex-col">
    <Header />
    <main className="flex-auto">{children}</main>
  </div>
)

export default Layout
