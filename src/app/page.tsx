import React from 'react'
import Link from 'next/link'

const Home = async ({
  params,
}: {
  params: Promise<{ documentId: string }>
}) => {

  const id = (await params).documentId
  return (
    <div className='flex justify-center items-center min-h-screen '>
        Go to <Link className='text-blue-600 underline px-1' href={`/documents/${id}`}>DocumentId</Link> page
    </div>
  )
}

export default Home