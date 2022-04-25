export default ({ state, props }) => /*html*/ `

    <app-search></app-search>    
    <app-input data-name="search" data-label="buscar"></app-input>

    <div class="ctx-options">
        <app-radio 
            data-name="type" 
            data-value="name" 
            data-label="Nome"
            data-theme="white"
        ></app-radio>
        <app-radio 
            data-name="type" 
            data-value="phone" 
            data-label="Telefone"
            data-theme="white"
        ></app-radio>
        <app-radio 
            data-name="type" 
            data-value="email" 
            data-label="E-mail"
            data-theme="white"
        ></app-radio>    
    </div>
`
