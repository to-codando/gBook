export default (root, props) =>   /*css*/`
    ${root} { 
        display:flex;
        width:100%;
    }  

    ${root} .ctx-grid {
        display:grid;
        width:100%;
        gap: 1rem
    }

    ${root} .ctx-grid-col-1 {
        grid-template-columns: 1fr;
    }

    ${root} .ctx-grid-col-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    ${root} .ctx-grid-col-3 {
        grid-template-columns: repeat(3, 1fr);
    }
    ${root} .ctx-grid-col-4 {
        grid-template-columns: repeat(4, 1fr);
    }
    ${root} .ctx-grid-col-5 {
        grid-template-columns: repeat(5, 1fr);
    }
    ${root} .ctx-grid-col-6 {
        grid-template-columns: repeat(6, 1fr);
    }
    ${root} .ctx-grid-col-7 {
        grid-template-columns: repeat(7, 1fr);
    }
    ${root} .ctx-grid-col-8 {
        grid-template-columns: repeat(8, 1fr);
    }
    ${root} .ctx-grid-col-9 {
        grid-template-columns: repeat(9, 1fr);
    }
    ${root} .ctx-grid-col-10 {
        grid-template-columns: repeat(10, 1fr);
    }
    ${root} .ctx-grid-col-11 {
        grid-template-columns: repeat(11, 1fr);
    }
    ${root} .ctx-grid-col-12 {
        grid-template-columns: repeat(12, 1fr);
    }


`
