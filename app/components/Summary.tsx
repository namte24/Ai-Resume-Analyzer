
import ScoreBadge from './ScoreBadge'
import ScoreGage from './ScoreGage'



const Category = ({title, score}: {title:string, score:number}) => {
  const textColor = score > 70 ? "text-green-600" : score > 49 ? "text-yellow-600" : "text-red-600"
    return(
      <div className='resume-summary bg-gray-900'>
        <div className='category bg-gray-800'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <p className='text-2xl text-white'>
              {title}
            </p>
            <ScoreBadge score={score}/>
          </div>
          <p className='text-2xl'>
            <span className={textColor}>{score}</span>
          </p>
        </div>
      </div> 
    )
}

function Summary({feedback}: {feedback: Feedback}) {
  return (
    <div className='bg-gray-900 rounded-2xl shadow-md w-full'>
      <div className='flex flex-row items-center p-4 gap-8 '>
        <ScoreGage score={feedback.overallScore}/>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>Your Resume Score</h2>
          <p className='text-sm text-gray-500'>
            This score is calculated based on the job description and requirements. 
          </p>
        </div>
      </div>
      <Category title='Tone & Style' score={feedback.toneAndStyle.score}/>
      <Category title='Content' score={feedback.content.score}/>
      <Category title='Structure' score={feedback.structure.score}/>
      <Category title='Skills' score={feedback.skills.score}/>
    </div>
  )
}

export default Summary 