import { observerFactory } from "lemejs"

import template from "./template"
import styles from "./styles"

export const appButton = ({props}) => {  
    const state = observerFactory({ ...props })
    return { template, styles, state }
}