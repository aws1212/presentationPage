//DOM Elements
const userContent = document.querySelector('.divUser-data');
const pointsContent = document.querySelector('.divTime-data');

//Code html
let htmlCodeUser = "";
let htmlCodePoints = "";

window.addEventListener('load',()=>{
        try{                        
            fetch("http://localhost:5500/selectAllUser")
                .then(res => res.json())
                .then(res => {
                        for (data in res){
                            if(data <= 9){
                                if(res[data].userWineer != null){
                                    let user = res[data].userWineer;
                                    let point = res[data].pointsWinner;
                                    htmlCodeUser += `
                                        <span class="div_content">${user}</span>
                                        `;
                                    htmlCodePoints += `
                                        <span class="div_content">${point}</span>
                                        `;
                                }
                            }  
                        }                              
                    
                    userContent.innerHTML = htmlCodeUser;
                    pointsContent.innerHTML = htmlCodePoints;
                });
        }
        catch(err){
            console.log(err);
        }
})
