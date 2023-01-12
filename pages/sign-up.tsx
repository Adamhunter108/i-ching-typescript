import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Create your I Ching account</title>
        <meta name="description" content="Sign in to your I Ching account" />
      </Head>

      <Nav />
    
            {/* 🪲 the z index is wrong on the svg and idk why 🤔 */}
            <div className="z-10">
                <svg
                className="hidden lg:block absolute top-0 left-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
                >
                <defs>
                    <pattern
                    id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-900/90 z-10" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                </svg>
                <svg
                className="hidden lg:block absolute bottom-0 right-0 -mb-20 -ml-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
                >
                <defs>
                    <pattern
                    id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-900/90" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                </svg>
            </div>

      <div className="flex min-h-full items-center justify-center pt-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>

                {/* YIN YANG SVG */}
            <div className="flex justify-center">
                <svg className="animate-spin-slow w-16 h-16 z-30" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 128C238.3 128 224 142.4 224 160S238.3 192 256 192s31.97-14.38 31.97-32S273.7 128 256 128zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 384c-17.68 0-31.97-14.38-31.97-32S238.3 320 256 320s31.97 14.38 31.97 32S273.7 384 256 384zM256 256c-53.04 0-96.03 43-96.03 96S202.1 448 256 448c-106.1 0-192.1-86-192.1-192S149.9 64 256 64c53.04 0 96.03 43 96.03 96S309 256 256 256z"/>
                </svg>
            </div>
            <div className="z-30">
                <h1 className="text-center mt-10 font-carter text-5xl text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 to-teal-200">I Ching</h1>
                <h2 className="-mt-2 text-center font-thin text-4xl">The Book of Changes</h2>
                <h2 className="mt-14 text-center text-3xl font-bold tracking-tight text-gray-300 z-30">
                Create your account
                </h2>
                <p className="mt-2 text-center text-l tracking-tight text-gray-400 z-30">
                Create a free account to save your Hexagrams.
                </p>
            </div>

            <div>
                  <div>
  
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div>
                        <Link href="/">
                            <a
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:text-white hover:bg-gradient-to-t from-indigo-500 via-indigo-300 to-cyan-300"
                            >
                            <span className="sr-only">Sign in with Facebook</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </Link>
                      </div>
  
                      <div>
                        <Link href="/">
                            <a
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:text-white hover:bg-gradient-to-t from-indigo-500 via-indigo-300 to-cyan-300"
                            >
                            <span className="sr-only">Sign in with Google</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                            </svg>
                            </a>
                        </Link>
                      </div>
  
                      <div>
                        <Link href="/">
                            <a
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:text-white hover:bg-gradient-to-t from-indigo-500 via-indigo-300 to-cyan-300"
                            >
                            <span className="sr-only">Sign in with Apple</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                            </svg>
                            </a>
                        </Link>
                      </div>
                    </div>
                  </div>
  
                  <div className="mt-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black text-gray-400">or continue with</span>
                    </div>
                  </div>
                </div>


          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm">
                <Link href="/sign-in">
                    <a className="font-medium text-indigo-500 hover:text-gray-300">
                        Already have an account?
                    </a>
                </Link>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-700 py-2 px-4 text-sm font-medium text-white hover:text-white hover:bg-gradient-to-t from-indigo-500 via-indigo-300 to-cyan-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
