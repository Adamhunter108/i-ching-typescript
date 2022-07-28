import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'

export default function about() {
  return (
    <div>
      <Head>
        <title>About the I Ching: the Book of Changes</title>
        <meta name="description" content="About the I Ching and how to consult the Book of Changes." />
      </Head>

      <Nav />

      <main>
        {/* YIN YANG SVG */}
        <div className="flex justify-center mt-4">
          <svg className="animate-spin-slow w-16 h-16" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 128C238.3 128 224 142.4 224 160S238.3 192 256 192s31.97-14.38 31.97-32S273.7 128 256 128zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 384c-17.68 0-31.97-14.38-31.97-32S238.3 320 256 320s31.97 14.38 31.97 32S273.7 384 256 384zM256 256c-53.04 0-96.03 43-96.03 96S202.1 448 256 448c-106.1 0-192.1-86-192.1-192S149.9 64 256 64c53.04 0 96.03 43 96.03 96S309 256 256 256z"/>
          </svg>
        </div>
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-gray-300 font-semibold tracking-wide uppercase">About the</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 to-teal-200 font-carter sm:text-4xl">
                I Ching
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
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
                  <rect x={0} y={0} width={4} height={4} className="text-indigo-900" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
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
                  <rect x={0} y={0} width={4} height={4} className="text-indigo-900" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div className="relative md:bg-gray-900/90 backdrop-blur-sm md:p-6 rounded-xl">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-300 lg:max-w-none">
                  <h1 className="text-xl">What is the I Ching?</h1>
                  <p className="pt-2">
                  The I Ching, usually translated to Book of Changes, dates back to 1,000 BC. This several thousand year old book is regarded as a foundational text of eastern wisdom and philosophy.  Originally a divination manual, the I Ching is meant to provide insight and guidance for moral decision making. 
                  </p>
                  <p className="pt-2">
                  An I Ching reading comes in the form of a Hexagram which consists of six lines which are either broken (yin) or unbroken (yang). 
                  </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-300 lg:mt-0">
                <h1 className="text-xl">How to use this app:</h1>
                  <p className="pt-2">
                  Back in the day, people would throw yarrow stalks to calculate and construct their Hexagrams. Tossing coins, usually three at a time, is a more modern and convenient method. Those analog methods require calculations and often involve interpreting changing lines.    
                  </p>
                  <p className="pt-2">
                  To use this app, all you need to do is press the Divinate button.  We recommend doing only one reading a day and sitting with the result.
                  </p>
                  <p className="pt-2">
                    Each Hexagram is unique and has a number. Feel free to google your Hexagram number to read more about it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>

    </div>
  )
}
