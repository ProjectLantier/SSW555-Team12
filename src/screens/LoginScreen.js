import { useState } from "react";
import { Alert, Button, Text, TextInput } from "react-native";
import loginstyles from './loginstyles'

export default function LoginScreen() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginFunction = () => {
        //Do firebase and auth stuff here
    }

    return (
        <>
            <Text>Login:</Text>
            <TextInput
                placeholder="Enter Username"
                value={username}
                onChangeText={(x) => setUsername(x)}
            />
            <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={(x) => setPassword(x)}
            />
            <Button title="Log in"
            onPress={loginFunction}
            />
        </>
    )

}
