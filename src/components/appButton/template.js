export default ({ state, props }) => /*html*/ `
    <button 
        ${state.isDisabled ? 'disabled="true"' : ''}
        class="
            ctx-button ctx-${state.theme || 'default'} 
            ctx-type-${state.type || 'default'}
        "
    >
        <slot></slot>
    </button>
`
