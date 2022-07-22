import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center py-2 ">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

   
      <h1 className="text-gray-100 text-6xl font-bold">
        Welcome to template{' '} 
        <span className="text-blue-600">
           Next.js and tailwindcss!
        </span>
      </h1>

      <p className="mt-3 text-2xl text-gray-100">
        Get started by editing{' '}
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg text-gray-700">
          pages/index.js
        </code>
      </p>

      
  </div>
  )
}
