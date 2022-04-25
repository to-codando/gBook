const themeList = {
    default: { color: '#666' },
    white: { color: '#fff' }
}

export default (root, props) =>   /*css*/`
    ${root} { 
        display:inline;
        font-size: .95rem;
        font-weight: lighter;
        color: ${themeList[props.theme || 'default'].color};
    }  

    ${root} > label {
        margin-right: 1rem;
        cursor: pointer
    }

    ${root} > label > input {
        padding:0;
        margin:0 2px 1rem 0;
    }
`
