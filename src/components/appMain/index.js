import template from "./template"
import styles from "./styles"

import { appHeader } from '../appHeader'
import { appButton } from '../appButton'
import { appTitle } from '../appTitle'
import { appIcon } from '../appIcon'
import { appFilter } from '../appFilter'

export const appMain = () => {  

    const children = () => ({
        appHeader,
        appButton,
        appTitle,
        appIcon,
        appFilter,        
    })

    return { template, styles, children }
}