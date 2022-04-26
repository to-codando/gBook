import template from "./template"
import styles from "./styles"

import { appContainer } from '../appContainer'
import { appHeader } from '../appHeader'
import { appButton } from '../appButton'
import { appTitle } from '../appTitle'
import { appIcon } from '../appIcon'
import { appFilter } from '../appFilter'
import { appOrder } from '../appOrder'
import { appIndex } from '../appIndex'
import { appCard } from '../appCard'
import { appGrid } from '../appGrid'

export const appShow = () => { 

    const children = () => ({
        appHeader,
        appButton,
        appTitle,
        appIcon,
        appFilter,
        appOrder,
        appContainer,
        appIndex,
        appCard,
        appGrid
    })

    return { template, styles, children }
}