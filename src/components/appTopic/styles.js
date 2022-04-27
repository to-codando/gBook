const defaultWidth = '100%'

export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:${props.width || defaultWidth };
        padding:1rem 0;
        margin-top:1rem;
        border-radius:10px;
        background: #f5f9fe;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .1);
    }  

    ${root} > ul {
        display:grid;
        grid-template-columns: repeat(26, 1fr);
        width:100%;
    }

    ${root} > ul li {
        display:flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-size: .785rem;
        font-weight: normal;
        color: #666;
        position:relative;
        transition: .15s ease-in-out;
        cursor: pointer;
        border-right: 1px #EBF3FF solid;
    }

    ${root} > ul li:hover {
        color: #FE419B;
        font-size: 1.4rem
    }

    ${root} .active {
        font-weight: 600;
        color:#3B4976;
        font-size: 1.4rem;
    }
`
