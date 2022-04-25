const defaultWidth = '100%'

export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:${props.width || defaultWidth };
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
