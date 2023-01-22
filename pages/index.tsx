import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
      <>
    <Header/>
    <div className='bg-slate-200'>
    <div className='flex flex-col justify-center items-center h-screen'>
      <Link href="list" className="block items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md
       hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 px-9 text-2xl text-center font-bold tracking-tight text-gray-900 
      dark:text-white">Bee Survey Service🐝</h5>
      <p className="font-normal text-center px-9 text-gray-700 
      dark:text-gray-400">Click to find the surveys we are actively conducting🎉</p>
      </Link>
    </div>
    </div>
    </>
  )
}

export default Home
