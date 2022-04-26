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

    <app-container>
        <div class="ctx-order">
            <app-order></app-order>
        </div>
    </app-container>
    <app-container>
        <app-index data-index="A">
            <app-grid data-col="3">

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>
            </app-grid>
        </app-index>
        <app-index data-index="B">
            <app-grid data-col="3">

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>
            </app-grid>
        </app-index>
        <app-index data-index="C">
            <app-grid data-col="3">

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>

                <app-card data-id="1">
                    <header> Rodrigo Rocha</header>
                    <content>
                        <p>(11) 96260-9993</p>
                        <p>rodrigo@email.com</p>
                    </content>
                </app-card>
            </app-grid>
        </app-index>
    </app-container>
`
