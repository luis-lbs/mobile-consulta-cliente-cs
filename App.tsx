import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { api as _api } from './lib/axios'
import { EnvContextProvider } from './components/EnvContext'
import Config from './pages/config'

export default function App() {
  return (
    <EnvContextProvider>
      <View style={s.container}>
        <StatusBar style="light" />
        <Config />
      </View>
    </EnvContextProvider>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101208',
    paddingTop: 45,
    paddingHorizontal: 15,
  },
})
