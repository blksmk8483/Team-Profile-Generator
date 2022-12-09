const Engineer = require("../lib/Engineer")

const genTeamCards = team =>{
    const genManager = manager=>{
        return`
        <div class="card m-2 mx-auto shadow-lg" style="width: 18rem;">
  
  <div class="card-header h3 bg-primary text-light ">
    ${manager.getName()}
    <h4>${manager.getRole()}</h4>
    
  </div>
  <ul class="p-4 list-group ">
    <li class="list-group-item">ID:${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
  </ul>
   </div>`
    };
    const genEngineer = engineer =>{
        return`
        <div class="card m-2 mx-auto shadow-lg" style="width: 18rem;">
  
        <div class="card-header h3 bg-primary text-light ">
          ${engineer.getName()}
          <h4>${engineer.getRole()}</h4>
          
        </div>
        <ul class="p-4 list-group ">
          <li class="list-group-item">ID:${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
         </div>`
    };
    const genIntern = intern =>{
        return`    
         <div class="card m-2 mx-auto shadow-lg" style="width: 18rem;">
  
        <div class="card-header h3 bg-primary text-light ">
          ${intern.getName()}
          <h4>${intern.getRole()}</h4>
          
        </div>
        <ul class="p-4 list-group ">
          <li class="list-group-item">ID:${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
         </div>`
    };

    const cards =[];

    cards.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager=> genManager(manager))
        );
        cards.push(team
            .filter(employee => employee.getRole()=== 'Engineer')
            .map(engineer=> genEngineer(engineer))
            );
        cards.push(team
            .filter(employee => employee.getRole()=== 'Intern')
            .map(intern => genIntern(intern))
            ); 
            
            return cards.join("");

}


module.exports = team =>{

    return`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    
    <body>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12 heading mb-3 bg-danger">
                <h1 class="text-center m-5">Team</h1>
            </div>
        </div>
    </div>
    <div class="row">
      
    ${genTeamCards(team)}
    
    </div>
    
    
    </body>
    
    </html>
    `
}