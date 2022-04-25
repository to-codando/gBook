export default ({ state, props }) => /*html*/ `
    <app-header>
        <i slot-id="title">
            <app-title>Contatos</app-title>
        </i>

        <i slot-id="action">
            <app-button data-theme="glassy">
                <app-icon data-size="2rem"> add </app-icon>
            </app-button>
        </i>

        <i slot-id="other">
            <app-filter></app-filter>
        </i>
    </app-header>
`
