function Head(props){



  const obj= {
     border: "4px solid green",
     padding: "8px",
    fontSize: "40px",
    fontWeight: "20px",
    color: "red"
  }

  return (
    <div > 
    {/* we can simple add the style inside the object insted of creating and object first */}

      <h1 style={obj}> hi my first name is {props.firstname}</h1>
      <h2>my last name is {props.lastname}</h2>
    </div>
   
  )
    // return <h1> Hi{props.firstname}, this is sajit maharjan</h1>;
  }

  export default Heading;
