import template from "./template"
import styles from "./styles"

import { appGrid } from '../appGrid'
import { appContainer } from '../appContainer'
import { appInput } from '../appInput'
import { appButton } from '../appButton'


export const appCreate = () => {  

    const children = () => ({
        appGrid,
        appContainer,
        appInput,
        appButton
    })

    return { template, styles, children }
}