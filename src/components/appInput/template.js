export default ({ state, props }) => /*html*/ `
    <label class="ctx-label">
        <span class="material-icons ctx-icon">search</span>
        <input 
            class="ctx-input" 
            type="text" 
            value="${state.value}"
            placeholder="${state.label}"
        >
    </label>
`