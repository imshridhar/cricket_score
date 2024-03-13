
let score=0;
let wicket=0;
let arr=[];
let ball=0;
let over=0;


// function addOne(){
    //   // alert("One clicked")
    //   score+=1;
    //   console.log(score);
    //   rootElement.render(<App/>)
    // }



function addOne(num){
    // alert("One clicked")
      // score+=num;
      // // console.log(score);
      // rootElement.render(<App/>)
    if(wicket<10)
    {
     score+=num;
     arr.push(num);
     rootElement.render(<App/>)
     console.log(arr);
    }
}

function addWicket(){
    if(wicket<10){
        wicket+=1;
        arr.push('W')     
        rootElement.render(<App/>)
        console.log(arr);
    }
}

 let Ball = () => {
    if(score >=0 && wicket<10){
        ball +=1;
    }
}
 let Ball1=()=>{ if(ball%6==0){
  ball=0;
    }
}

let Over1 = () => {
    if(ball%6==0){
        over+=1;
    }
}



function App()
{
    return(
        <>
        <h1>Score Keeper</h1>
        <h1>Score : {score}/{wicket}</h1>
        <h1>ball <Ball/><Ball1/> : {ball}</h1>
        <h1>over <Over1/> : {over}</h1>
        <button onClick={()=>addOne(0)}>0</button>
        <button onClick={()=>addOne(1)}>1</button>
        <button onClick={()=>addOne(2)}>2</button>
        <button onClick={()=>addOne(3)}>3</button>
        <button onClick={()=>addOne(4)}>4</button>
        <button onClick={()=>addOne(5)}>5</button>
        <button onClick={()=>addOne(6)}>6</button>
        <button onClick={()=>addWicket()}>W</button>
        <hr/>
        {arr.map((score,i)=>(
            <>
              {i%6==0 ?<br/>:null }  
              <button key={i}>{score}</button>
            </>
      ))} 
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App/>);