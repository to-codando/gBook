export default ({ state, props }) => /*html*/ `
    <button class="ctx-button ctx-${props.theme || 'default'}">
        <slot></slot>
    </button>
`
