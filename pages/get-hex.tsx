import React from 'react'
import HexInterpretations from '../data/HexInterpretations'
import ParticleBackGround from '../components/ParticleBackGround'

export default function GetHex() {

    // i ching has 64 possible outcomes
    const randomValue: number = Math.floor(Math.random() * 64) + 1

    const [value, setValue] = React.useState<number>()
    
    const handleDivinateClick = () => {
        setValue(randomValue)
    }

    // this is for the share button
    const [isCopied, setIsCopied] = React.useState<boolean>(false)

    const handleCopyClick = () => {
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 2500);
    }

  return (
    <div>
        <ParticleBackGround />

            {/* YIN YANG SVG */}
        <div className="flex justify-center mt-3">
            <svg className="w-16 h-16" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 128C238.3 128 224 142.4 224 160S238.3 192 256 192s31.97-14.38 31.97-32S273.7 128 256 128zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 384c-17.68 0-31.97-14.38-31.97-32S238.3 320 256 320s31.97 14.38 31.97 32S273.7 384 256 384zM256 256c-53.04 0-96.03 43-96.03 96S202.1 448 256 448c-106.1 0-192.1-86-192.1-192S149.9 64 256 64c53.04 0 96.03 43 96.03 96S309 256 256 256z"/>
            </svg>
        </div>

        <div className="flex justify-center">
            {value ? null : <p className="font-semibold pt-5">kill the noise</p>}
        </div>

        <ul className='mt-16'>
            {HexInterpretations.map((data) => (
                <li key={data.id}>
                        {/* UPPER & LOWER TRIGRAMS */}
                    <p className="flex justify-center">{value === data.id ? `${data.upper} over ${data.lower}` : null}</p>
                        {/* IMAGE */}
                    <span className="flex justify-center">{value === data.id ? <img src={data.image} alt='Hexagram'/> : null}</span>
                        {/* HEXAGRAM NUMBER */}
                    <p className="flex justify-center">{value === data.id ? `Hexagram # ${value}` : null}</p>
                        {/* TITLE */}
                    <p className="flex justify-center">{value === data.id ? data.title : null}</p>
                        {/* DESCRIPTION */}
                    <div className="flex justify-center">
                        <p className="w-2/4 text-center">{value === data.id ? data.description : null}</p>
                    </div>
                </li>
            ))}
        </ul>


        {value ? null :
            <div className="flex justify-center pt-96">
                <button
                    type="button"
                    className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-600 bg-white hover:text-gray-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleDivinateClick}
                >
                    🌘 Divinate 🌒
                </button>
            </div>
        }


    </div>
  )
}
