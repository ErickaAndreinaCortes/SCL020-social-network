export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="login">
           
            <h1>Gluten Free Food</h1>
            <input type="text" id="email" placeholder="E-mail">
            <input type="text" id="contraseña" placeholder="Contraseña">
            <button class = "btn"><a href='#/wall'>Continuar</a></button>
            <button ><a href='#/register'>Registrar</a></button>
            <p>¿Has olvidado tu contraseña?</p>
            <div>
                <img></img>
                <button><a href='#/wall'>Iniciar Sesion con Google</a></button>
            </div>
        </div>`
    divLogin.innerHTML = viewLogin;

    const btn = divLogin.querySelector(".btn")
    btn.addEventListener("click", () => {
        const email = divLogin.querySelector("#email").value;
        console.log(email);
        const psw = divLogin.querySelector("#contraseña").value;
        // const masking = psw.replace(g, '.') ;


        userLogin(email, psw);

    })


    return divLogin;
};