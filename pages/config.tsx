import { StatusBar } from 'expo-status-bar'
import { Cloud } from 'lucide-react-native'
import { useCallback, useContext, useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'
import { api as _api } from '../lib/axios'
import EnvContext from '../components/EnvContext'

export default function Config() {
  const [isInputSelected, setIsInputSelected] = useState<boolean>(false)
  const { data, setData } = useContext(EnvContext)

  const handleSetIsInputSelected = useCallback(
    () => setIsInputSelected((prevState) => !prevState),
    []
  )

  const handleSetInputUrl = useCallback(
    (newInput: string) => setData({ baseUrl: newInput }),
    []
  )

  async function getApiStatus() {
    const api = new _api(data?.baseUrl ?? '')
    await api
      .get('pokemon/ditto')
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <View style={s.container}>
      <StatusBar style="light" />

      <View style={s.card}>
        <Text style={s.cardTittle}>insira as configurações do PDV</Text>
        <View
          style={{
            borderBottomColor: isInputSelected ? '#6090B7' : '#326F66',
            ...s.ipInputContainer,
          }}
        >
          <Cloud color="#6090B7"></Cloud>
          <TextInput
            value={data?.baseUrl}
            onChangeText={(newValue) => handleSetInputUrl(newValue)}
            onFocus={handleSetIsInputSelected}
            onBlur={handleSetIsInputSelected}
            placeholderTextColor="#2E3220"
            placeholder="192.168.15.7"
            style={s.ipInput}
          ></TextInput>
        </View>
      </View>
      <TouchableHighlight
        style={{ height: 50, width: 200, alignSelf: 'center' }}
        onPress={() => getApiStatus()}
      >
        <View style={s.confirmButton}>
          <Text>CONFIRMAR</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTittle: {
    color: '#E2ECB6',
    fontSize: 16,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#171910',
    width: '100%',
    height: 250,
    borderRadius: 20,
    padding: 16,
    marginBottom: 25,
  },
  ipInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ipInput: {
    textAlign: 'right',
    color: '#F2F4E7',
    width: 250,
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#6090B7',
    justifyContent: 'center',
    borderRadius: 16,
    height: '100%',
    width: '100%',
  },
})
