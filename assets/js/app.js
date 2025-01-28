document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
      edge: "right"
    });
    setTimeout(function(){
      console.log("start...");
      
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>{
    console.log("end...");
    console.log(json);
  });

      },5000)
  });

