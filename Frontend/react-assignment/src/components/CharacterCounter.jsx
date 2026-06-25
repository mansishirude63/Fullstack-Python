
import React , {useState} from 'react'

const CharacterCounter = () => {

    const [sentence, setSentence] = useState('')
    const lengthOfSen = sentence.length
    const wordCount = sentence.split(' ').length


    return (
    <>
  
        <h1 className="text-center mt-3">Live Character Counter</h1>
        <div className="container text-center mt-3">
                <input type="text" placeholder="Enter Sentence Here..."
                onChange={(e)=>setSentence(e.target.value)}/>

           <br/>

            <p> Text : {sentence} </p>
            <p> Characters : {lengthOfSen} </p>
            <p> Words : {wordCount} </p>
        </div>
    </>
    )
}

export default CharacterCounter
