import React from "react";
import { View } from "react-native";
import {Button, ButtonText, Text, VStack, Heading} from "@gluestack-ui/themed"
import { useErrorBoundary } from "react-error-boundary"; 

const FallbackComponent = ({error}) => {
    const {resetBoundary} = useErrorBoundary()
    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: 'center', padding: 20
        }}>
            <VStack space="md" alignItems="center">
                <Heading size="xl">Oops, something went wrong!</Heading>
                    <Text>{error.message}</Text>
                    <Button onPress={resetBoundary}>
                        <ButtonText>
                            Try Again
                        </ButtonText>
                    </Button>
            </VStack>
        </View>
    )
}

export default FallbackComponent