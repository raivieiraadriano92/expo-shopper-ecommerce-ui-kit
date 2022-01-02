import { useCallback, useRef, useState } from 'react'

import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native'
import { RootStackScreenComponentProps } from 'src/navigation'

export const useVerifyCodeScreen = ({
  navigation
}: Pick<RootStackScreenComponentProps<'VerifyCode'>, 'navigation'>) => {
  const refInput0 = useRef<TextInput>()

  const refInput1 = useRef<TextInput>()

  const refInput2 = useRef<TextInput>()

  const refInput3 = useRef<TextInput>()

  const [code, setCode] = useState<string[]>([])

  const goToChangePassword = useCallback(() => navigation.navigate('ChangePassword'), [navigation])

  const handleChange = useCallback(
    (index: number, value: string) => {
      const copyCode = [...code]

      copyCode[index] = value

      setCode(copyCode)

      if (value) {
        switch (index) {
          case 0:
            refInput1.current?.focus()

            return

          case 1:
            refInput2.current?.focus()

            return

          case 2:
            refInput3.current?.focus()
        }
      }
    },
    [code]
  )

  const handleKeyPress = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      if (e.nativeEvent.key === 'Backspace' && !code[index]) {
        switch (index) {
          case 1:
            refInput0.current?.focus()

            return

          case 2:
            refInput1.current?.focus()

            return

          case 3:
            refInput2.current?.focus()
        }
      }
    },
    [code]
  )

  return {
    code,
    goToChangePassword,
    handleChange,
    handleKeyPress,
    refInput0,
    refInput1,
    refInput2,
    refInput3
  }
}
