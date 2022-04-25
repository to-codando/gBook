export default (root, props) =>   /*css*/`
${root} { 
    display:flex;
    width:100%;
    padding:1rem 0;
    background: #3E47FE;
}  

${root} .ctx-container {
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:100%;
    max-width:1180px;
    margin:0 auto
}

${root} .ctx-title {
    width:calc(100% - 10rem);    
}

${root} .ctx-action {
    display:flex;
    justify-content:flex-end    
}

${root} .ctx-other {
    width:100%
}
`
