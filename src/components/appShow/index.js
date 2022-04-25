import template from "./template"
import styles from "./styles"

import { appContainer } from '../appContainer'
import { appHeader } from '../appHeader'
import { appButton } from '../appButton'
import { appTitle } from '../appTitle'
import { appIcon } from '../appIcon'
import { appFilter } from '../appFilter'
import { appOrder } from '../appOrder'

export const appShow = () => { 

    const children = () => ({
        appHeader,
        appButton,
        appTitle,
        appIcon,
        appFilter,
        appOrder,
        appContainer
    })

    return { template, styles, children }
}