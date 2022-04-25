import template from "./template"
import styles from "./styles"
import { observerFactory } from "lemejs"

export const appInput = ({ props }) => {  
    const empty = ''
    const state = observerFactory({
        name: props.name || empty,
        label: props.label || empty,
        value: props.value || empty
    })

    return { template, styles, state }
}