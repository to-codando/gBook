export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:100%;
    }  

    ${root} .ctx-button {
        display:flex;
        justify-content: center;
        align-items:center;
        padding:.5rem 1.5rem;
        border:1px #ddd solid;
        border-radius:5px;
        text-transform: uppercase;
        color: #9394AA
    }   

    ${root} .ctx-default {
        background: #ccc;
        color: #fff
    }
    
    ${root} .ctx-light {
        background: none;
        color: #fff
    }

    ${root} .ctx-white {
        background: #fff;
        color: #c4c6ee;
        border-color: #C3D1FF;
        padding:1rem 2rem
    }

    ${root} .ctx-blue {
        background: #24B0FF;
        color: #fff;
        border-color: #C3D1FF;
        padding:1rem 2rem
    }

    ${root} .ctx-glassy {
        background:none;
        border:0;
        color:#fff;
        padding:0;
    }

    ${root} .ctx-glassy-dark {
        background:none;
        border:0;
        color:#3B4976;
    }   
    
    ${root} .ctx-type-elastic {
        width:100%
    }

    ${root} .ctx-button:disabled {
        background:#F1F3F9;
        color: #D1D8EC
    }
`
