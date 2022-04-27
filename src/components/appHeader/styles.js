export default (root, props) =>   /*css*/`
${root} { 
    display:flex;
    flex-wrap: wrap;
    width:100%;
    padding:0 0 1rem 0;
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

${root} .ctx-links {
    display: flex;
    justify-content: flex-end;
    width:100%;
    padding:1rem calc((100% - 1180px) / 2);
    margin-bottom: 1rem;
    color: #fff;
    font-size: .775rem;
    text-transform: uppercase;
    font-weight: lighter;
    background: #333bde
}

${root} .ctx-links  a {
    display: inline;
    padding-left: 1rem;
}
`
