const quizData = [
    {
    id:1,
    question : 'What is react ?' ,
    options:['JS Library' , 'Javascript','java library','python library',],
    answers:'JS Library'},

    {
    id:2,    
    question : 'What is Django ?' ,
    options:['JS Library' , 'Javascript','java library','python library',],
    answers:'python library'},
    {
    id:3,    
    question : 'What is useState ?' ,
    options:['JS Library' , 'Javascript','java library','python library',],
    answers:'JS Library'},
]
const {useState} = React

const Quiz=()=>{
    const [answers,setAnswers] = useState(Array(quizData.length).fill(null));
    const [selectOption,setSelectOption] = useState('')

    const [score,setScore] = useState(0);
    const[submitted,setSubmitted] = useState(false)

    console.log(answers)

    const handleChange =(option,index)=>{
        const newAnswer = [...answers];
        newAnswer[index] = option;
        setAnswers(newAnswer)
    }

    const handleSubmitQuiz = () =>{
        let newScore = 0;
        answers.forEach((el,index)=>{
            if(el === quizData[index].answers){
                newScore+=1
            }
        })
        setScore(newScore)
        setSubmitted(true)
    }
    console.log(score)

    const handleRestart=()=>{
        setAnswers(Array(quizData.length).fill(null))
        setScore(0)
        setSubmitted(false)

    }

    return (
    <div>

    {!submitted?
    <div>

        {  quizData.map((questiondata, index) =>{ 
                return <div key={questiondata.id}>
                 <h4>{questiondata.question}</h4>                
                {questiondata.options.map((option,ind)=>{
                    return <div key={option + ind}> 
                     
                     <label>
                        <input type='radio' name={`question -${index}`} 
                        value={option} 
                        checked={answers[index]== option} 
                        onChange={()=>handleChange(option,index)} 
                        />
                        {option}
                    </label>
                    </div>
                })}
                </div>
            })
        }

        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
    :
    <div>
    <h1> Your score :{score}</h1>    
    <button onClick={handleRestart}>Restart the quiz again</button>
    </div>}
    </div>
    )
}



const App=()=>{
    return (
        <div>
            <h1>Quiz Application</h1>
            <Quiz/>
        </div>


    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)