import { authenticate } from './authenticator';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="login-container">
    <h3 id="login-title">Login</h3>
    <label class="login-label" for="email">Email</label>
    <input class="login-input" type="email" name="email" id="email-input">
    <label class="login-label" for="password">Password</label>
    <input class="login-input" type="password" name="password" id="password-input">
    <button id="login-btn">Enviar</button>
</div>
`

const container = document.querySelector<HTMLDivElement>('.login-container')
const emailInput = document.querySelector<HTMLInputElement>('#email-input')
const passwordInput = document.querySelector<HTMLInputElement>('#password-input')
const button = document.querySelector<HTMLButtonElement>('#login-btn')

authenticate(emailInput, passwordInput, container, button)


