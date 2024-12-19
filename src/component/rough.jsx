// import Example  from "./component/Example" ;

// function App() {
//   return (
//     <div>
//       <Heading firstname="Bob" />
//       {/* use as the parameter for the props in the heading.jsx */}
      
//     </div>
//   );
//   // return <h1>this is  a webpage</h1>
  
// }

//for the bob  in bad tag - didn't worked
// function App() {t
//   return (
//     <div>
//       <Bag children="Bob" />
//       {/* use as the parameter for the props in the heading.jsx */}
      
//     </div>
//   );


// function App(){
//   return (
//     <>
//     <Head firstname="sajit" lastname="Maharjan" /> 
//     </>
//   )

// }

// function Example(props) {
//   return (
//       <div>
//           <h2>
//               The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
//           </h2>
//           <p>The value of the math prop is: <em>{props.math}</em></p>
//           <p>The value of the str prop is: <em>{props.str}</em></p>
//       </div>
//   );
// };


//use of math and str for arithmetic operation and str for the concatination of the string 
// const bool = false;
// const str1 = "just";

//  function App() {
//   return (
//       <div className="App">
//           <Example
//               toggleBoolean={!bool}
//               math={(10 + 20) / 3}
//               str={str1 + ' another ' + 'string'}
//           />
//       </div>
//   );
// };


//importing for the image
// import p1 from "./p1.jpg"
// function Img(props){

// const image=<img src={p1}/> 
// //for the image file

// return image;
// }


// function App()
// {
//   return (

//   <>
//   <h1>embedding the image from the src file </h1>
//   <Img />
//   </>
//   )

// }


//use of the embedded component 
// function App(){

//   return (
//     <div className='App'>
//       <h1> task </h1>
//       <Card  h2="first card's h2" h3="first card's h3" />
//       <Card   h2="second card's h3"  h3="second card's h3" />
//       <Card   h2="third card's h3"  h3=" card's h3" />

    
//     </div>


//   )
// }

//handling the event 
// function App(){
//   const  handlerclick= () =>{
//     let randomn = Math.floor(Math.random() * 3) +1 ;
    
//     while(true){
//     let user=prompt("enter your number");
//     if(randomn == user)
//     {
//       console.log("number are same")
//       return ;
//     }
//     else{
//      console.log('number didnot matched')
     
//     }
//   }
    

//   }

//   return (
//     <button onClick={handlerclick}>hello let go</button>
//   )
// }


//for hooks
// import { useState } from 'react';

// export default function InputComp(){
//   const[inputState, setState]= useState('ramlal')


//   function Change(k){
//     setState(k.target.value)
//   }




// return (
//   <>
//   <h1>change the default value</h1>
//   <input value={inputState} onChange={Change} />
//   <p> here is {inputState}</p>
//   <button onClick={ () => setState('harilal')}>reset</button>
  
//   </>



// )
// }

//long hooks


export default function RegisterForm() { 
    const [form, setForm] = useState({ 
      firstName: 'Luke', 
      lastName: 'Jones', 
      email: 'lukeJones@sculpture.com', 
    }); 
  
    return ( 
      <> 
        <label> 
          First name: 
          <input 
            value={form.firstName}  // page ma display garaucha luke lai as a default 
            onChange={ e=> { 
              setForm({ 
                ...form,  //yo haptyo bhani euta value lekhda aaru value as it is basirakcha
               //js spreads operator
                firstName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <label> 
          Last name: 
          <input 
            value={form.lastName} 
            onChange={e => { 
              setForm({ 
                ...form, 
                lastName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <label> 
          Email: 
          <input 
            value={form.email} 
            onChange={e => { 
              setForm({ 
                ...form, 
                email: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <p> 
          {form.firstName}{' '} 
          {form.lastName}{' '} 
          ({form.email})
        </p> 
      </> 
    ); 
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //ternay operation
  // function Example() {
  //   return (
  //       <div className="heading">
  //           <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
  //       </div>
  //   );
  // };
    // return <h1>this is  a webpage</h1>
    
  
  
  // function appli(){
  //   return <App />;
  // }
  // function Heading(){
  
  //   return <h1> this is sajit maharajan using reactjs for the first time</h1>;
  // }


  // import Card from './component/card'
//  function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <br />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }


// export default TextInputWithFocusButton
  