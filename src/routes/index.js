import { routerFactory } from "lemejs"

import { appNotFound } from "../components/appNotFound"
import { appShow } from "../components/appShow"
import { appCreate } from "../components/appCreate"

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appShow,
  isInitial: true
})

router.add({
  hash: '/',
  validator: /^#\/create$/,
  component: appCreate,
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }