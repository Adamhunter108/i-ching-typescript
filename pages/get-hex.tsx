import React, { useState } from 'react'
import HexInterpretations from '../data/HexInterpretations'
import ParticleBackGround from '../components/ParticleBackGround'

export default function GetHex() {

    // i ching has 64 possible outcomes
    const randomValue: number = Math.floor(Math.random() * 64) + 1

    const [value, setValue] = useState()
    
    const handleDivinateClick = () => {
        setValue(randomValue)
    }

    // this is for the share button
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
            setIsCopied(true);
            setTimeout(() => {
            setIsCopied(false);
            }, 2500);
        }

  return (
    <div>
        <ParticleBackGround />

        {/* output all interpretations */}
        {/* {HexInterpretations.map((data) => (
            <p key={data.id}>{data.id}: {data.title}, {data.description}</p>
        ))} */}

        {/* {value ? null : <p>kill the noise</p>} */}

        {/* gets the trigrams */}
        {HexInterpretations.map((data) => (
            value === data.id ? <p>{data.upper} over {data.lower}</p> : null
                ))}

        {/* gets the image */}
        {HexInterpretations.map((data) => (
            value === data.id ? <img src={data.image} alt='Hexagram'/> : null
        ))}

        {/* gets hexagram number */}
        {HexInterpretations.map((data) => (
            value === data.id ? <p>Hexagram # {value}</p> : null
                ))}


        {/* gets the title */}
        {HexInterpretations.map((data) => (
            <h2 key={data.id}>{
                value === data.id ? data.title : null
            }</h2>
        ))}

        {value ? null :
        <div className="flex justify-center pt-96">
            <button
                type="button"
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-600 bg-white hover:text-gray-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleDivinateClick}
            >
                🌘 Divinate 🌒
            </button>
        {/* {console.log(randomValue)} */}
        </div>
        }


    </div>
  )
}
