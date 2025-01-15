"use client"

import { useQuery } from 'convex/react'

import { Navbar } from './components/navbar'
import { TemplatesGallery } from './components/templates-gallery'

import { api } from '../../../convex/_generated/api'

const Home = () => {
  const documents = useQuery(api.documents.get)
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <TemplatesGallery />
        {documents?.map((document) => (
          <span>{document.title}</span>
        ))}
      </div>
    </div>
  )
}

export default Home