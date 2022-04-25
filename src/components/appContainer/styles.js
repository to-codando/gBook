export default (root, props) =>   /*css*/`
${root} { 
    display:flex;
    flex-wrap: wrap;
    width:100%;
}  

    ${root} .ctx-container {
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width:100%;
        max-width:1180px;
        margin:0 auto
    }
`
