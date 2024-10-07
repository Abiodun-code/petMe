import React from 'react'
import Main from '@navigation/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ConfigureWrapper from '@components/configures'

const App = () => {
  return (
    <ConfigureWrapper>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </ConfigureWrapper>
  )
}

export default App