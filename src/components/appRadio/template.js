export default ({ state, props }) => /*html*/ `
    <label class="ctx-label">
        <input 
            class="ctx-input"
            type="radio" 
            name="${props.name}"
            value="${props.value}"
        > 
        ${props.label}
    </label>
`
