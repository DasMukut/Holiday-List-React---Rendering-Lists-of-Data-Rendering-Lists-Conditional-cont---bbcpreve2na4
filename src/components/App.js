
// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.cityList = [{ name: 'Goa', country: 'India' },
//     { name: 'Amsterdam', country: 'Netherlands' },
//     { name: 'New York', country: 'USA' },
//     { name: 'Darjeeling', country: 'India' },
//     { name: 'Tokyo', country: 'Japan' },
//     { name: 'Lonavala', country: 'India' },
// //     { name: 'Brandenburg Gate', country: 'Germany' },
// //     { name: 'Reichstag Building', country: 'Germany' },
// //     { name: 'Museum Island', country: 'Germany' },
// //     { name: 'Munnar', country: 'India' },
// //     { name: 'Leh Ladakh', country: 'India' },
   
// //     { name: 'Agra', country: 'India' },
// //     { name: 'Dalhousie', country: 'India' },
// //     { name: 'Coorg', country: 'India' },
// //     { name: 'Rome', country: 'Italy' },
// //     { name: 'Milan', country: 'Italy' },
// //     { name: 'Venice', country: 'Italy' },
// //     { name: 'Varanasai', country: 'India' },
// //     { name: 'Jaipur', country: 'India' },
// //     { name: 'The Hofburg', country: 'Austria' },
// //     { name: 'Belvedere Palace', country: 'Austria' },
// //     { name: 'St. Stephen Cathedral', country: 'Austria' },
// //     { name: 'Kahna National Park', country: 'India' },
// //     { name: 'Amritsar', country: 'India' },
// //     { name: 'Mussoorie', country: 'India' },
// //     { name: 'Mount Abu', country: 'India' },
// //     { name: 'Tirupati', country: 'India' },
//     ]
//   }
  
// render(){
//    return (
//        <div id="main">
//         {/* Do not remove the main div */}
//        
//       </div>
//     )
//   }
// }




// //   render() {
// //     return (
// //       <div id="main">
// //         {/* Do not remove the main div */}
// //          <li key={this.cityList.name}>{result}</li>
// //       </div>
// //     )
// //   }
// // }


// export default App;



 import React, { Component, useState } from "react";
   import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
//     { name: 'Brandenburg Gate', country: 'Germany' },
//     { name: 'Reichstag Building', country: 'Germany' },
//     { name: 'Museum Island', country: 'Germany' },
//     { name: 'Munnar', country: 'India' },
//     { name: 'Leh Ladakh', country: 'India' },
   
//     { name: 'Agra', country: 'India' },
//     { name: 'Dalhousie', country: 'India' },
//     { name: 'Coorg', country: 'India' },
//     { name: 'Rome', country: 'Italy' },
//     { name: 'Milan', country: 'Italy' },
//     { name: 'Venice', country: 'Italy' },
//     { name: 'Varanasai', country: 'India' },
//     { name: 'Jaipur', country: 'India' },
//     { name: 'The Hofburg', country: 'Austria' },
//     { name: 'Belvedere Palace', country: 'Austria' },
//     { name: 'St. Stephen Cathedral', country: 'Austria' },
//     { name: 'Kahna National Park', country: 'India' },
//     { name: 'Amritsar', country: 'India' },
//     { name: 'Mussoorie', country: 'India' },
//     { name: 'Mount Abu', country: 'India' },
//     { name: 'Tirupati', country: 'India' },
    ]
  }
  
render(){
    let i=1;
  let result= this.cityList.map((data)=>
  { if(data.country==="India"){
    const key="location"+i;
    i=i+1;
    return (<li key={key}> {data.name} </li>) 
    
  }
  })

     return (
       <div id="main">
        {/* Do not remove the main div */}
         <ol>{result}</ol>
      </div>
    )
  }
}



export default App;
