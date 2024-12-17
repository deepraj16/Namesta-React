


// <div id="parent">

//     <div id="child">
    
//         <h1>I am h1 tag</h1>
    
//     </div>
// </div>


console.log("hellow")

var parent =React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [ React.createElement("h1",{
            id:"ram",
            style:{color:'white',backgroundColor:'blue',width:"300px",height:"60px",padding:"20px", marginLeft:"300px"}
        },"I am in h1 tage"),

        React.createElement("h1",{
            id:"ram",
            style:{color:'white',backgroundColor:'blue',width:"300px",height:"60px",padding:"20px", marginLeft:"300px"}
        },"I am in h1 tage")

    ]
    )
)

//jsx why jsx make life easy



var root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)



// render is use to convert heading Object ===>to html code