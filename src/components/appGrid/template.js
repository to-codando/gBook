export default ({ state, props }) => /*html*/ `
<div class="ctx-grid ctx-grid-col-${props.col || 1}">
<slot></slot>
</div>
`   
