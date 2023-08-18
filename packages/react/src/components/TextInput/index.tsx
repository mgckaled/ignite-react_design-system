import { ComponentProps, ElementType } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

interface IconProps {
  value: ElementType
  size: number
  weight?: 'thin' | 'light' | 'bold' | 'fill' | 'duotone'
}

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  icon?: IconProps
}

export function TextInput({ prefix, icon: Icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {!!Icon && <Icon.value size={Icon.size} weight={Icon.weight} />}
      <Input {...props} />
    </TextInputContainer>
  )
}
