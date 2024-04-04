//! Modos de usar o Fetch API
//fetch('https://reqres.in/api/users').then(res => console.log(res))

/*fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(res => console.log(data))*/

/*fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(res => console.log(data.data[0].first_name)*/

//! Para Erros
/*fetch('https://reqres.in/api/users/100')
.then((res) => res.json())
.then((res) => console.log(data))
.catch((err) => console.log(err))*/

/*fetch('https://reqres.in/api/users/100')
.then((res) => {
	console.log(res)
	if(res.ok){ //Se o Ok for True
		console.log('Sucess')
	}else{
		console.log('Erro')
	}
})
.then((res) => console.log(data))
.catch((err) => console.log(err))
*/
/*fetch('https://reqres.in/api/users/1')
.then((res) => {
	console.log(res)
	if(res.ok){ //Se o Ok for True
		console.log('Sucess')
	}else{
		console.log('Erro')
	}
})
.then((res) => console.log(data))
.catch((err) => console.log(err))*/

//! Method Post
//ERRADO
/*fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: {
        name: 'Jorge',
    },
})
.then((res) => res.json())
.then((data) => console.log(data))*/

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Jorge',
    }),
})
.then((res) => res.json())
.then((data) => console.log(data))