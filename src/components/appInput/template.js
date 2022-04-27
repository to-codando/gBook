export default ({ state, props, html }) => html`
    <label class="ctx-label">
        
        ${
            state.icon
            ? html`<span class="material-symbols-outlined ctx-icon">${state.icon}</span>`
            : ''
        }
        
        <input 
            class="ctx-input" 
            type="text" 
            value="${state.value}"
            placeholder="${state.label}"
        >

    </label>
`
