window.onload = () => {
    const form = document.querySelector('#form')
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const surname = document.querySelector('#surname')
    const country = document.querySelector('#country')
    const city = document.querySelector('#city')
    const login = document.querySelector('#login')


    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
        }
        else{
            email.classList.remove('is-valid')
            email.classList.add('is-invalid')
            errors.push('Debes ingresar un email valido')
        }
          
    }
    
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let errors = [];
        if(!name.value){
            name.classList.add('is-invalid')
            errors.push('Debes ingresar un nombre')     
        }else{
            name.classList.remove('is-invalid')
            name.classList.add('is-valid')
        }

        if(!surname.value){
            surname.classList.add('is-invalid')
            errors.push('Debes ingresar tu surname')     
        }else{
            surname.classList.remove('is-invalid')
            surname.classList.add('is-valid')
        }

        if(!country.value){
            country.classList.add('is-invalid')
            errors.push('Debes ingresar tu country')     
        }else{
            country.classList.remove('is-invalid')
            country.classList.add('is-valid')
        }
        
        if(!city.value){
            city.classList.add('is-invalid')
            errors.push('Debes ingresar tu city')     
        }else{
            city.classList.remove('is-invalid')
            city.classList.add('is-valid')
        }

        if(!email.value){
            email.classList.add('is-invalid')
            errors.push('Debes ingresar un email')
        }else{
            ValidateEmail(email.value)
        }

        if(!login.value){
            login.classList.add('is-invalid')
            errors.push('Debes ingresar tu login')     
        }else{
            login.classList.remove('is-invalid')
            login.classList.add('is-valid')
        }

        let passNumb = password.value.match(/(\d+)/g)

        if(!password.value){
            password.classList.add('is-invalid')
            errors.push('Debes ingresar una contraseña')
        }else{
            if(!passNumb == null){
                let nums = ''
                passNumb.map(e=>{
                    nums+=e
                })
                if(!nums.match(/^\d{1,4}$/)){
                    password.classList.add('is-invalid')
                    errors.push('De 1 a 4 numeros')
                }
            }else{
                if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$!*#])([A-Za-z\d$!*#]|[^ ]){8,11}$/)){
                    password.classList.add('is-invalid')
                    errors.push('La contraseña debe tener entre 8 y 11 caracteres, una mayuscula, entre 1 a 4 numeros y un caracter especial($!*#)')
                }else{
                    password.classList.remove('is-invalid')
                    password.classList.add('is-valid')
                }
            }
        }

        if(errors.length > 0){
            let ul = document.querySelector('.errors')
            for(let error of errors){
                ul.innerHTML += '<li class="is-invalid">' + error + '</li>'            
            }
        }else{
            form.submit()
        }
         
    })

}