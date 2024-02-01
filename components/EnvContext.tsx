import { ReactNode, createContext, useState } from 'react'

interface IEnvContext {
  baseUrl: string
}

interface IEnvContextProps {
  data: IEnvContext | undefined
  setData: React.Dispatch<React.SetStateAction<IEnvContext | undefined>>
}

const init: IEnvContext = {
  baseUrl: '',
}

const EnvContext = createContext<IEnvContextProps>({
  data: init,
  setData: () => {},
})

export function EnvContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IEnvContext | undefined>()
  return (
    <EnvContext.Provider value={{ data, setData }}>
      {children}
    </EnvContext.Provider>
  )
}

export default EnvContext
