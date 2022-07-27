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

        <div className="flex justify-center">
            {value ? null : <p className="font-semibold pt-5">kill the noise</p>}
        </div>

        <ul className=''>
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
