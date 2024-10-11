import Main from '@/navigation/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ConfigureWrapper from '@/components/configures'
import { Provider } from 'react-redux'
import { store } from '@/services/state/store'

export default function App (){
  return (
    <ConfigureWrapper>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </ConfigureWrapper>
  )
}
