// const getRes = async(url) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`status: ${res.status}`);
//     }

//     return await res.json();
// }

// getRes('https://github.com/skskyess/web/blob/main/index.js')
// .then(data => {
//     console.log(data);
//     // for (let key in data) {
//     //     console.log(key);
//     //}
// })
const container = document.querySelector('#container') 
    const GetRes = async(url) => { 
        const res  = await fetch(url); 
        if(!res.ok){ 
            throw new Error(`status: ${res.status}`); 
        } 
        return await res.json() 
    } 
     
    GetRes('my_project.json') 
        .then(data=> { 
            console.log(data); 
            for(let key in data) { 
                const hw = document.createElement("div"); 
                const name = data[key].name; 
                const description = data[key].description; 
                const link = data[key].link;
                const screen = data[key].screen;  
     
                hw.innerHTML = `<div class="hw"> 
                    <h2 class="h2">Название: ${name}</h2> 
                    <li>Немножко о данной замечательной работе: ${description}</li> 
                    <li>Эту прекрасную работу можете увидеть здесь: ${link}</li>
                    <li>Фотоотчет: </li> 
                    
                    <br><input type="text">
                    <input type="submit" onclick="click()" value="Прокомментировать">
                </div>` 
                container.append(hw) 
             
            } 
        })

    function button() {
        window.location.href = '/about/index.html'
    }

    function works() {
        window.location.href = 'works.html'
    }

    function exit() {
        window.location.href = 'index.html'
    }
    function click() {
        console.log()
    }