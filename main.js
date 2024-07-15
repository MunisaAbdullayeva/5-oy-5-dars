// let body = document.querySelector('body')

// body.classList.add('bg-slate-900', 'text-white', 'flex', 'h-screen', 'justify-center', 'items-center', 'text-8xl', )

// let text = document.createElement("p")

// let ism = prompt("ism yoz")

// text.innerHTML = ism

// body.append(text)



let accounts = [ 
    { 
        id: 0, 
        name: 'Alice', 
        balance: 1000, 
        email: "alice@gmail.com", 
        age: "18", 
    }, 
    { 
        id: 1, 
        name: 'Bob', 
        balance: 1200, 
        email: "bob@gmail.com", 
        age: "25", 
    }, 
    { 
        id: 2, 
        name: 'Charlie', 
        balance: 950, 
        email: "charlie@gmail.com", 
        age: "22", 
    }, 
    { 
        id: 3, 
        name: 'David', 
        balance: 800, 
        email: "david@gmail.com", 
        age: "30", 
    }, 
    { 
        id: 4, 
        name: 'Eve', 
        balance: 1100, 
        email: "eve@gmail.com", 
        age: "28", 
    }, 
    { 
        id: 5, 
        name: 'Frank', 
        balance: 1300, 
        email: "frank@gmail.com", 
        age: "35", 
    }, 
    { 
        id: 6, 
        name: 'Grace', 
        balance: 1400, 
        email: "grace@gmail.com", 
        age: "40", 
    }, 
    { 
        id: 7, 
        name: 'Hank', 
        balance: 1150, 
        email: "hank@gmail.com", 
        age: "32", 
    }, 
    { 
        id: 8, 
        name: 'Ivy', 
        balance: 1250, 
        email: "ivy@gmail.com", 
        age: "27", 
    }, 
    { 
        id: 9, 
        name: 'Jack', 
        balance: 1050, 
        email: "jack@gmail.com", 
        age: "24", 
    } 
]; 
 
let body = document.querySelector('body') 
body.classList.add('flex', 'flex-wrap', 'gap-x-[3%]', 'gap-y-10')
 
 
function iteration(data) { 
    data.map(item => { 
        let div = document.createElement('div'); 
        let id = document.createElement('p') 
        let name = document.createElement('p') 
        let balance = document.createElement('p') 
        let email = document.createElement('p') 
        let age = document.createElement('p') 
 
        id.innerHTML = item.id  
        name.innerHTML = item.name  
        balance.innerHTML = item.balance  
        email.innerHTML = item.email  
        age.innerHTML = item.age  
         
 
        div.append(id, name, balance, email, age) 
        body.append(div) 

        div.classList.add ('bg-slate-900', 'text-white', 'shadow-md', 'shadow-sky-400', 'rounded-lg', 'p-5', 'flex-1', 'min-w-[330px]', 'text-center')
    }) 
} 
 
iteration(accounts)