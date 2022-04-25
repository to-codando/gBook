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
        color: #3B4976;
        border-color: #C3D1FF
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
`
