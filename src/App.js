import './style.scss';

const App=()=>{

  return(
    <>
    <div className='wrapper'>

   <div className='question_count'>
    <span>Question 1/10</span>
   </div>

   <div className='question'>
    <span>In "A Certain Scientific Railgun", how many "sisters" did Accelerator have to kill to achieve the rumored level 6?</span>
   </div>

<ul className='answer'>
  <li>
    <strong>A</strong>
    <span>5000</span>
  </li>
  <li>
    <strong>B</strong>
    <span>5000</span>
  </li>
  <li>
    <strong>C</strong>
    <span>5000</span>
  </li>
  <li>
    <strong>D</strong>
    <span>5000</span>
  </li>
</ul>

<button className='btn'>Next Question</button>


   </div>

    </>
  )
}

export default App;