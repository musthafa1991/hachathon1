// let firstapi="https://pokeapi.co/api/v2/pokemon?limit=5";
// var id;
// async function pokemon(api){
//     try {
//         let getpokemondata=await fetch(api);
//         let pokemondatas= await getpokemondata.json();

//         var nextapi=pokemondatas.next;

//         console.log(nextapi);

//         console.log(pokemondatas)

//         console.log(pokemondatas.results)
        
        
//         for(let pokemondata of pokemondatas.results){
//             var id;
//              async function pokemonurl(pokemondata){
//                  try {
//                     var pokemon= await fetch(pokemondata.url);
//                     var pokemondetails= await pokemon.json();
//                     console.log(pokemondetails);
//                     id=pokemondetails.id;
       
               
       
//                     let div1=document.createElement("div");
//                     div1.className="pokemonheading";
       
//                     let heading=document.createElement("h2");
//                     heading.innerText="POKEMON "+pokemondetails.id;
//                     console.log(pokemondetails.id);
//                     div1.appendChild(heading);
       
//                     let img=document.createElement("img");
//                     img.src=pokemondetails.sprites.front_default;
//                     div1.appendChild(img);
       
//                     let section=document.createElement("section");
//                     section.className="pokemoncard";
//                     section.appendChild(div1);
                   
       
//                     let div2=document.createElement("div");
//                     div2.className="pokemoncontent";
       
//                     let name=document.createElement("p");
//                     name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
//                     div2.appendChild(name);
       
//                     let ability=document.createElement("p");
//                     ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
//                     div2.appendChild(ability);
       
       
       
//                     let moves=document.createElement("p");
//                     moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
//                     div2.appendChild(moves);
       
       
//                     let weight=document.createElement("p");
//                     weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
//                     div2.appendChild(weight)
       
       
//                     document.body.appendChild(section);
                   
//                     section.appendChild(div2);
       
                     
//                  } catch (error) {
//                      console.log(error)
                     
//                  }
             
            

//             }
//              pokemonurl(pokemondata);

//             }
//             if(id<=50){
//                 pokemon(nextapi)
//             }
           
//     }catch (error) {
//             console.log(error);
//     }
  
// }
// pokemon(firstapi);




// in recursion function the if condition is not getting executed,
// that might be ,because of id value is undefined..upto inside the loop id is increasing,
// but that id value is not getting assign in global or in closure when exit the loop.
// i couldnt found the error on this...





















async function pokemoninitial(){
    try {
        let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
        let pokedata= await getpokedata.json();
        console.log(pokedata)

        console.log(pokedata.results)

        for(poke of pokedata.results){
             async function pokemonurl(){
                 let pokemon= await fetch(poke.url)
                 let pokemondetails= await pokemon.json()
                 console.log(pokemondetails);

        

            let div1=document.createElement("div");
            div1.className="pokemonheading";

            let heading=document.createElement("h2");
            heading.innerText="POKEMON "+pokemondetails.id;
            div1.appendChild(heading);

            let img=document.createElement("img");
            img.src=pokemondetails.sprites.front_default;
            div1.appendChild(img);

            let section=document.createElement("section");
            section.className="pokemoncard"
            section.appendChild(div1);
            // document.body.appendChild(section);

            let div2=document.createElement("div");
            div2.className="pokemoncontent";

            let name=document.createElement("p");
            name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
            div2.appendChild(name);

            let ability=document.createElement("p");
            ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
            div2.appendChild(ability);



            let moves=document.createElement("p");
            moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
            div2.appendChild(moves);


            let weight=document.createElement("p");
            weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
            div2.appendChild(weight)


            document.body.appendChild(section);
            
            section.appendChild(div2);

             }
             pokemonurl()

             



        }
     } catch (error) {
            console.log(error);
        }
    }
    pokemoninitial()


    async function pokemonnext10(){
        try {
            let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=5&limit=5");
            let pokedata= await getpokedata.json();
            console.log(pokedata)
    
            console.log(pokedata.results)
    
            for(poke of pokedata.results){
                 async function pokemonurl(){
                     let pokemon= await fetch(poke.url)
                     let pokemondetails= await pokemon.json()
                    //  console.log(pokemondetails);
    
            
    
                let div1=document.createElement("div");
                div1.className="pokemonheading";
    
                let heading=document.createElement("h2");
                heading.innerText="POKEMON "+pokemondetails.id;
                div1.appendChild(heading);

                   let img=document.createElement("img");
                   img.src=pokemondetails.sprites.front_default;
                   div1.appendChild(img);

                 let section=document.createElement("section");
                 section.className="pokemoncard"
                 section.appendChild(div1);
                
    
                let div2=document.createElement("div");
                div2.className="pokemoncontent";
    
                let name=document.createElement("p");
                name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                div2.appendChild(name);
    
                let ability=document.createElement("p");
                ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                div2.appendChild(ability);
    
    
    
                let moves=document.createElement("p");
                moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                div2.appendChild(moves);
    
    
                let weight=document.createElement("p");
                weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                div2.appendChild(weight);
    
    
                document.body.appendChild(section);
               
                section.appendChild(div2);
                  
    
                 }
                 pokemonurl()
    
                 
    
    
    
                //  for(let i=0;i<50;i+5){
    
                //  }
            }
         } catch (error) {
                console.log(error);
            }
        }
        pokemonnext10();



        async function pokemonnext15(){
            try {
                let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=5");
                let pokedata= await getpokedata.json();
                console.log(pokedata)
        
                console.log(pokedata.results)
        
                for(poke of pokedata.results){
                     async function pokemonurl(){
                         let pokemon= await fetch(poke.url)
                         let pokemondetails= await pokemon.json()
                        //  console.log(pokemondetails);
        
                
        
                    let div1=document.createElement("div");
                    div1.className="pokemonheading";
        
                    let heading=document.createElement("h2");
                    heading.innerText="POKEMON "+pokemondetails.id;
        
                    div1.appendChild(heading);

                       let img=document.createElement("img");
                       img.src=pokemondetails.sprites.front_default;
                       div1.appendChild(img);                   

                       let section=document.createElement("section");
                       section.className="pokemoncard"
                       section.appendChild(div1);
   
        
                    let div2=document.createElement("div");
                    div2.className="pokemoncontent";
        
                    let name=document.createElement("p");
                    name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                    div2.appendChild(name);
        
                    let ability=document.createElement("p");
                    ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                    div2.appendChild(ability);
        
        
        
                    let moves=document.createElement("p");
                    moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                    div2.appendChild(moves);
        
        
                    let weight=document.createElement("p");
                    weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                    div2.appendChild(weight)
        
        
        
                 
                    section.appendChild(div2);
                    
                    document.body.appendChild(section);
                     
        
                     }
                     pokemonurl()
        
                     
        
        
        
                }
             } catch (error) {
                    console.log(error);
                }
            }
            pokemonnext15()



            async function pokemonnext20(){
                try {
                    let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=15&limit=5");
                    let pokedata= await getpokedata.json();
                    console.log(pokedata)
            
                    console.log(pokedata.results)
            
                    for(poke of pokedata.results){
                         async function pokemonurl(){
                             let pokemon= await fetch(poke.url)
                             let pokemondetails= await pokemon.json()
                            //  console.log(pokemondetails);
            
                    
            
                        let div1=document.createElement("div");
                        div1.className="pokemonheading";
            
                        let heading=document.createElement("h2");
                        heading.innerText="POKEMON "+pokemondetails.id;
                        div1.appendChild(heading);

                           let img=document.createElement("img");
                           img.src=pokemondetails.sprites.front_default;
                           div1.appendChild(img);                       

            
                      
                           let section=document.createElement("section");
                           section.className="pokemoncard"
                           section.appendChild(div1);
                        
            
                        let div2=document.createElement("div");
                        div2.className="pokemoncontent";
            
                        let name=document.createElement("p");
                        name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                        div2.appendChild(name);
            
                        let ability=document.createElement("p");
                        ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                        div2.appendChild(ability);
            
            
            
                        let moves=document.createElement("p");
                        moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                        div2.appendChild(moves);
            
            
                        let weight=document.createElement("p");
                        weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                        div2.appendChild(weight)
            
            
            
                        
                       
                        section.appendChild(div2);
                        document.body.appendChild(section);
            
                         }
                         pokemonurl()
            
                         
            
            
            
                        
                    }
                 } catch (error) {
                        console.log(error);
                    }
                }
                pokemonnext20();
            
        
        



                async function pokemonnext25(){
                    try {
                        let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=5");
                        let pokedata= await getpokedata.json();
                        console.log(pokedata)
                
                        console.log(pokedata.results)
                
                        for(poke of pokedata.results){
                             async function pokemonurl(){
                                 let pokemon= await fetch(poke.url)
                                 let pokemondetails= await pokemon.json()
                                //  console.log(pokemondetails);
                
                        
                
                            let div1=document.createElement("div");
                            div1.className="pokemonheading";
                
                            let heading=document.createElement("h2");
                            heading.innerText="POKEMON "+pokemondetails.id;
                
                            div1.appendChild(heading);

                                let img=document.createElement("img");
                              img.src=pokemondetails.sprites.front_default;
                              div1.appendChild(img);

                              let section=document.createElement("section");
                              section.className="pokemoncard"
                              section.appendChild(div1);
                        
                
                            let div2=document.createElement("div");
                            div2.className="pokemoncontent";
                
                            let name=document.createElement("p");
                            name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                            div2.appendChild(name);
                
                            let ability=document.createElement("p");
                            ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                            div2.appendChild(ability);
                
                
                
                            let moves=document.createElement("p");
                            moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                            div2.appendChild(moves);
                
                
                            let weight=document.createElement("p");
                            weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                            div2.appendChild(weight)
                
                
                
                        
                            section.appendChild(div2);
                            document.body.appendChild(section);
                
                             }
                             pokemonurl()
                
                             
                
                
                
                        }
                     } catch (error) {
                            console.log(error);
                        }
                    }
                    pokemonnext25()




                    async function pokemonnext30(){
                        try {
                            let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=25&limit=5");
                            let pokedata= await getpokedata.json();
                            console.log(pokedata)
                    
                            console.log(pokedata.results)
                    
                            for(poke of pokedata.results){
                                 async function pokemonurl(){
                                     let pokemon= await fetch(poke.url)
                                     let pokemondetails= await pokemon.json()
                                    //  console.log(pokemondetails);
                    
                            
                    
                                let div1=document.createElement("div");
                                div1.className="pokemonheading";
                    
                                let heading=document.createElement("h2");
                                heading.innerText="POKEMON "+pokemondetails.id;
                    
                                div1.appendChild(heading);

                                   let img=document.createElement("img");
                                   img.src=pokemondetails.sprites.front_default;
                                   div1.appendChild(img);

                                   let section=document.createElement("section");
                                   section.className="pokemoncard"
                                   section.appendChild(div1);


                                
                    
                                let div2=document.createElement("div");
                                div2.className="pokemoncontent";
                    
                                let name=document.createElement("p");
                                name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                                div2.appendChild(name);
                    
                                let ability=document.createElement("p");
                                ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                                div2.appendChild(ability);
                    
                    
                    
                                let moves=document.createElement("p");
                                moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                                div2.appendChild(moves);
                    
                    
                                let weight=document.createElement("p");
                                weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                                div2.appendChild(weight)
                    
                    
                    
                                
                              
                                section.appendChild(div2);
                                document.body.appendChild(section);
                    
                                 }
                                 pokemonurl()
                    
                                 
                    
                    
                    
                                
                            }
                         } catch (error) {
                                console.log(error);
                            }
                        }
                        pokemonnext30();


                        async function pokemonnext35(){
                            try {
                                let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=30&limit=5");
                                let pokedata= await getpokedata.json();
                                console.log(pokedata)
                        
                                console.log(pokedata.results)
                        
                                for(poke of pokedata.results){
                                     async function pokemonurl(){
                                         let pokemon= await fetch(poke.url)
                                         let pokemondetails= await pokemon.json()
                                        //  console.log(pokemondetails);
                        
                                
                        
                                    let div1=document.createElement("div");
                                    div1.className="pokemonheading";
                        
                                    let heading=document.createElement("h2");
                                    heading.innerText="POKEMON "+pokemondetails.id;
                        
                                    div1.appendChild(heading);

                                       let img=document.createElement("img");
                                       img.src=pokemondetails.sprites.front_default;
                                       div1.appendChild(img);



                                       let section=document.createElement("section");
                                       section.className="pokemoncard"
                                       section.appendChild(div1);

                                    
                        
                                    let div2=document.createElement("div");
                                    div2.className="pokemoncontent";
                        
                                    let name=document.createElement("p");
                                    name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                                    div2.appendChild(name);
                        
                                    let ability=document.createElement("p");
                                    ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                                    div2.appendChild(ability);
                        
                        
                        
                                    let moves=document.createElement("p");
                                    moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                                    div2.appendChild(moves);
                        
                        
                                    let weight=document.createElement("p");
                                    weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                                    div2.appendChild(weight)
                        
                        
                        
                                    
                                    section.appendChild(div2);
                                    document.body.appendChild(section);
                        
                                     }
                                     pokemonurl()
                        
                                     
                        
                        
                        
                                }
                             } catch (error) {
                                    console.log(error);
                                }
                            }
                            pokemonnext35();




                            async function pokemonnext40(){
                                try {
                                    let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=35&limit=5");
                                    let pokedata= await getpokedata.json();
                                    console.log(pokedata)
                            
                                    console.log(pokedata.results)
                            
                                    for(poke of pokedata.results){
                                         async function pokemonurl(){
                                             let pokemon= await fetch(poke.url)
                                             let pokemondetails= await pokemon.json()
                                            //  console.log(pokemondetails);
                            
                                    
                            
                                        let div1=document.createElement("div");
                                        div1.className="pokemonheading";
                            
                                        let heading=document.createElement("h2");
                                        heading.innerText="POKEMON "+pokemondetails.id;
                            
                                        div1.appendChild(heading);

                                         let img=document.createElement("img");
                                         img.src=pokemondetails.sprites.front_default;
                                         div1.appendChild(img);

                                         let section=document.createElement("section");
                                         section.className="pokemoncard"
                                         section.appendChild(div1);

                                        
                            
                                        let div2=document.createElement("div");
                                        div2.className="pokemoncontent";
                            
                                        let name=document.createElement("p");
                                        name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                                        div2.appendChild(name);
                            
                                        let ability=document.createElement("p");
                                        ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                                        div2.appendChild(ability);
                            
                            
                            
                                        let moves=document.createElement("p");
                                        moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                                        div2.appendChild(moves);
                            
                            
                                        let weight=document.createElement("p");
                                        weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                                        div2.appendChild(weight)
                            
                            
                            
                                        
                                        
                                        section.appendChild(div2);
                                        document.body.appendChild(section);
                            
                                         }
                                         pokemonurl()
                            
                                         
                            
                            
                            
                                        
                                    }
                                 } catch (error) {
                                        console.log(error);
                                    }
                                }
                                pokemonnext40();




                                async function pokemonnext45(){
                                    try {
                                        let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=40&limit=5");
                                        let pokedata= await getpokedata.json();
                                        console.log(pokedata)
                                
                                        console.log(pokedata.results)
                                
                                        for(poke of pokedata.results){
                                             async function pokemonurl(){
                                                 let pokemon= await fetch(poke.url)
                                                 let pokemondetails= await pokemon.json()
                                                //  console.log(pokemondetails);
                                
                                        
                                
                                            let div1=document.createElement("div");
                                            div1.className="pokemonheading";
                                
                                            let heading=document.createElement("h2");
                                            heading.innerText="POKEMON "+pokemondetails.id;
                                
                                            div1.appendChild(heading);

                                            let img=document.createElement("img");
                                            img.src=pokemondetails.sprites.front_default;
                                           div1.appendChild(img);

                                           let section=document.createElement("section");
                                           section.className="pokemoncard"
                                           section.appendChild(div1);


                                           
                                
                                            let div2=document.createElement("div");
                                            div2.className="pokemoncontent";
                                
                                            let name=document.createElement("p");
                                            name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                                            div2.appendChild(name);
                                
                                            let ability=document.createElement("p");
                                            ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                                            div2.appendChild(ability);
                                
                                
                                
                                            let moves=document.createElement("p");
                                            moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                                            div2.appendChild(moves);
                                
                                
                                            let weight=document.createElement("p");
                                            weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                                            div2.appendChild(weight)
                                
                                
                                
                                            
                                            section.appendChild(div2);
                                            document.body.appendChild(section);
                                
                                             }
                                             pokemonurl()
                                
                                             
                                
                                
                                
                                           
                                        }
                                     } catch (error) {
                                            console.log(error);
                                        }
                                    }
                                    pokemonnext45();



                                    async function pokemonnext50(){
                                        try {
                                            let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=45&limit=5");
                                            let pokedata= await getpokedata.json();
                                            console.log(pokedata)
                                    
                                            console.log(pokedata.results)
                                    
                                            for(poke of pokedata.results){
                                                 async function pokemonurl(){
                                                     let pokemon= await fetch(poke.url)
                                                     let pokemondetails= await pokemon.json()
                                                    //  console.log(pokemondetails);
                                    
                                            
                                    
                                                let div1=document.createElement("div");
                                                div1.className="pokemonheading";
                                    
                                                let heading=document.createElement("h2");
                                                heading.innerText="POKEMON "+pokemondetails.id;
                                    
                                                div1.appendChild(heading);

                                                let img=document.createElement("img");
                                                img.src=pokemondetails.sprites.front_default;
                                                div1.appendChild(img);

                                                let section=document.createElement("section");
                                                section.className="pokemoncard"
                                                section.appendChild(div1);


                                                
                                    
                                                let div2=document.createElement("div");
                                                div2.className="pokemoncontent";
                                    
                                                let name=document.createElement("p");
                                                name.innerHTML=`<span>Name : </span>`+pokemondetails.name;
                                                div2.appendChild(name);
                                    
                                                let ability=document.createElement("p");
                                                ability.innerHTML=`<span>Ability : </span> `+pokemondetails.abilities[0].ability.name;//+","+pokemondetails.abilities[1].ability.name;
                                                div2.appendChild(ability);
                                    
                                    
                                    
                                                let moves=document.createElement("p");
                                                moves.innerHTML=`<span>Moves : </span> `+pokemondetails.moves[0].move.name;
                                                div2.appendChild(moves);
                                    
                                    
                                                let weight=document.createElement("p");
                                                weight.innerHTML=`<span>Weight : </span> `+pokemondetails.weight;
                                                div2.appendChild(weight)
                                    
                                    
                                    
                                                
                                                
                                                section.appendChild(div2);
                                                document.body.appendChild(section);
                                    
                                                 }
                                                 pokemonurl()
                                    
                                                 
                                    
                                    
                                    
                                            }
                                         } catch (error) {
                                                console.log(error);
                                            }
                                        }
                                        pokemonnext50()
                                    
                                
                            
                        
                    
                
    







   

    

// async function pokemon1(){
//     try {
//         let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon?offset=5&limit=5");
//         let pokedata= await getpokedata.json(); 
//         console.log(pokedata);
       
//         }
     
//      catch (error) {
//         console.log(error);
//     }
// }

// pokemon1()















// async function pokemon1ability(){
//     try {
//         let getpokedata=await fetch("https://pokeapi.co/api/v2/pokemon/14/");
//         let pokedata= await getpokedata.json(); 
//         console.log(pokedata);
//     } catch (error) {
//         console.log(error);
//     }
// }
// pokemon1ability()



