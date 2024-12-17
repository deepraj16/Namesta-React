//var heading=React.createElement("h1",{},"hellow word from React")

// what is in {}==> this is attrbute contancer 
var heading=React.createElement("h1",{
    id:"ram",
    style:{color:'red',backgroundColor:'black',width:"350px",height:"60px",padding:"20px" }
},"Hellow world from React")

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

console.log(typeof(heading));


// render is use to convert heading Object ===>to html code