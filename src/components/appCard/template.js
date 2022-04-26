export default ({ state, props }) => /*html*/ `
    <i class="material-symbols-outlined ctx-icon">
        account_circle
    </i>
    <a href="#/contact/${props.id}">
        <slot></slot> 
    </a>
`
