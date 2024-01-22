/* eslint-disable import/prefer-default-export */

'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './network/store'

export function ReduxProviders({ children }: { children: any }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
