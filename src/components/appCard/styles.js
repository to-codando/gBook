export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        flex-wrap: wrap;
        width:100%;
        padding: 0 0 3rem 0;
        margin-bottom: 2rem;
        border-bottom: 1px #3B4976 solid
    }  

    ${root} > .ctx-icon {
        width:75px;
        background:red;
        font-size: 4rem;
        background:#fff;
        border-radius:15px;
        box-shadow: 3px 0 15px rgba(0, 0, 0, .2);
        margin-right:1.5rem;
        padding: .3rem;
        color: #9ba7b9
    }

    ${root} a {
        display: flex;
        flex-wrap: wrap;
        width:calc(100% - 100px);
    }

    ${root} header {
        display:flex;
        width:100%;
        font-size: 1.3rem;
        font-weight: 400;
        color:#3B4976;
        margin:6px 0 .5rem 0;

    }

    ${root} content {
        display:flex;
        flex-wrap: wrap;
        width:100%;
    }

    content > * {
        width:100%;
        font-size: .875rem;
        color: #9394AA;
        line-height:1.3rem
    }

    content > *:first-of-type {
        font-weight: 500;
        font-size: 1rem;
    }

    content > *:last-of-type {
        font-weight: lighter
    }
`
