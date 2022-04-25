const defaultSize = '1rem'

export default (root, props) =>   /*css*/`
    ${root} { 
        display:inline;
        font-size: ${props.size || defaultSize}
    }  
`

