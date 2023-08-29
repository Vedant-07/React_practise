alert("hello");
/*const fetchData =  () => {

    const data = fetch("https://jsonplaceholder.typicode.com/comments").then((dat)=>{
        dat.json()
    }).then((djson)=>{
        console.log(djson.text())
    }).catch((e)=>{
        console.error("wtf")
        console.log("error herr happende")
    })
    
    
    console.log()

}*/ const fetchData = async ()=>{
    /* fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log(data); // Log the parsed JSON data
        const dat=data;
      })
      .catch((error) => {
        console.error("Error:", error.message);
      }); */ const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    data.map((m, index)=>{
        if (index < 10) console.log(index + " " + m.name + "  " + m.email);
    });
};
fetchData(); // Call the fetchData function
//lets display the data
const displaydata = ()=>{} //fetchData();
;

//# sourceMappingURL=index.d41dc19b.js.map
