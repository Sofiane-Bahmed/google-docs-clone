import React from 'react'
import Link from 'next/link'

import { Navbar } from './components/navbar'
import { TemplatesGallery } from './components/templates-gallery'

const Home = async ({
  params,
}: {
  params: Promise<{ documentId: string }>
}) => {

  const id = (await params).documentId
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <TemplatesGallery />
      </div>
    </div>
  )
}

export default Home