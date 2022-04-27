export default ({ state, props }) => /*html*/ `
    <app-container>
        <app-grid data-col="2">
            <div class="ctx-col ctx-text">
                <h2 class="ctx-title">Informações úteis</h2>
                <p>
                    Informe ao lado os dados do contato que deseja cadastrar e depois 
                    clique em salvar.            
                </p>
                <p>
                    Se quiser cancelar o cadastro e limpar o formulário, basta clicar 
                    em cancelar.               
                </p>
                <p>
                    Finalmente para voltar a página anterior, clique em voltar. 
                </p>
            </div>
            <div class="ctx-col ctx-form">
                <h2 class="ctx-title">Cadastro</h2>
                <form>
                    <app-input 
                        data-value=""
                        data-label="Nome"
                        data-name="name"
                        data-icon="account_box"
                    ></app-input>

                    <app-input 
                        data-value=""
                        data-label="E-mail"
                        data-name="email"
                        data-icon="mail"
                    ></app-input>

                    <app-input 
                        data-value=""
                        data-label="Telefone"
                        data-name="phone"
                        data-icon="phonelink_ring"
                    ></app-input>

                    <div class="ctx-buttons">
                        <app-grid data-col="2">
                            <app-button 
                                data-theme="white" 
                                data-type="elastic"> 
                                    Cancelar 
                            </app-button>

                            <app-button 
                                data-theme="blue" 
                                data-type="elastic"
                                data-is-disabled="true">
                                    Incluir
                            </app-button>
                        </app-grid>
                    </div>
                </form>
            </div>
        </app-grid>
    </app-container>

`
