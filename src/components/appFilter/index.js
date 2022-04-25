import template from "./template"
import styles from "./styles"

import { appInput } from '../appInput'
import { appRadio } from '../appRadio'

export const appFilter = () => {  

    const children = () => ({
        appInput,
        appRadio
    })

    return { template, styles, children }
}