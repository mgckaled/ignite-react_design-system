import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      {/* receber demais propriedades do AvatarImage */}
      <AvatarImage {...props} />

      {/* esperar 600ms para mostrar o Fallback mesma que não tenha carregado */}
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
