export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:100%;
    }  

    ${root} .ctx-label,
    ${root} .ctx-input {
        display:flex;
        width:100%;
    }

    ${root}  .ctx-label {
        flex-wrap: wrap;
        position:relative;
    }

    ${root} .ctx-icon {
        font-size: 1.5rem;
        color: #666;
        position: absolute;
        left: 1rem;
        top:50%;
        transform: translateY(-50%)
    }

    ${root} .ctx-input {
        padding: 1rem 1rem 1rem 3rem;
        border:0;
        border-radius: 5px;
        background: #fff;
        font-size: 1rem;
        color: #666;
        outline-color: #3E47FE;
    }

    ${root} .ctx-input::placeholder {
        
    }
`
