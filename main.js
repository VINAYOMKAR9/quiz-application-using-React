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
    const [selectOption,setSelectOtion] = useState('')
    const handleChange =()=>{

    }

    return <div>
        {
            quizData.map((questiondata, index) =>{ 
                return <div key={questiondata.id}>
                 <h4>{questiondata.question}</h4>                
                {questiondata.options.map((option,index)=>{
                    return <div key={option + index}> 
                     
                     <label>
                        <input type='radio' name={`question -${index}`} value={option} onChange={()=>handleChange(option,index)} />
                        {option}
                    </label>
                    </div>
                })}
                </div>
            })
        }
    </div>
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