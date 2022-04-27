export default (root, props) =>   /*css*/`
    ${root} { 
        display:grid;
        gap: 1rem;
        grid-template-columns: repeat(${props.col}, 1fr);
        width:100%;
    }
`
