import { Container, Logo, BackButton, BackIcon } from "./styles"

import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean; /* ? = opcional */
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton && /* Se showBackButton for verdadeiro */ 
                <BackButton>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    )
}