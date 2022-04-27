import template from "./template"
import styles from "./styles"

import { appContainer } from '../appContainer'

import { appTopic } from '../appTopic'
import { appIndex } from '../appIndex'
import { appCard } from '../appCard'
import { appGrid } from '../appGrid'

export const appShow = () => { 

    const children = () => ({
        appTopic,
        appContainer,
        appIndex,
        appCard,
        appGrid
    })

    return { template, styles, children }
}