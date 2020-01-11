import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'

const AuthScreen = () => {
    return (
        <Container>
            <Content
                contentContainerStyle = { styles.root }
                padder>
                <Text>Auth</Text>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export default AuthScreen