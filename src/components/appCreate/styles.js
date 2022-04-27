export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:100%;        
     }  

    ${root} .ctx-col {
        display:flex;
        width:100%;
        padding:1rem;
    }

    ${root} .ctx-col + .ctx-col {
        background: #fff;
        margin-top: 2rem;
        border-radius:10px;
    }

    ${root} .ctx-text,
    ${root} .ctx-text > p,
    ${root} .ctx-title {
        display: flex;
        width:100%;
    }

    ${root} .ctx-text {
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: column;
        padding-top:4rem
    }

    ${root} .ctx-title {
        font-size: 1.3rem;
        font-weight:normal;
        padding: 0 0 2rem 0;
        margin-bottom: 2rem;
        color: #434686;
        border-bottom: 1px #434686 solid
    }

    ${root} .ctx-text > p {
        max-width:450px;
        font-size: .875rem;
        font-weight: lighter;
        margin-bottom: 1rem;
        line-height: 1.2rem;
        color:#434686
    }

    ${root} .ctx-form,
    ${root} .ctx-form > form {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    ${root} .ctx-form > .ctx-title  {
        margin: 1rem 0 2rem 0
    }

    ${root} .ctx-form > form > * {
        margin-bottom: 1rem;
    }

    ${root} .ctx-form > form input {
        border: 1px #ebebeb solid
    }

    ${root} .ctx-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

`
