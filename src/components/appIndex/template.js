export default ({ state, props }) => /*html*/ `
    <div class="ctx-index" id="${props.index}">${props.index}</div>
    <slot></slot>
`