import React, {useState} from "react";
import QrCodeReader from "./index";
import {
    Box,
    ChakraProvider,
    Container,
    Fade,
    Flex,
    Heading,
    Table,
    Tbody,
    Td,
    Tr
} from "@chakra-ui/react"

const QrCodeResult: React.FC<{qrCodes: string[] }> = ({qrCodes}:any) => {
    return (
        <Table>
            <Tbody>
                {qrCodes.map((qr:string,i:number) => <Tr key={i}>
                    <Td>
                        <Fade in={true}>{qr}</Fade>
                    </Td>
                </Tr>)}
            </Tbody>
        </Table>
    )
}

const QrApp = () => {
    const [qrCodes, setQrCodes] = useState<string[]>([])

    return (
        <ChakraProvider>
            <Container>
                <p>QRコードリーダー</p>
                <Flex flexDirection="column">
                    <Box flex={1} height={"60vh"}>
                        <QrCodeReader onReadQRCode={(result) => {
                            setQrCodes((codes) => {
                                return [result.getText(), ...codes]
                            })
                        }}/>
                    </Box>
                    <Box flex={1} height={"40vh"}>
                        <Heading>Result</Heading>
                        <QrCodeResult qrCodes={qrCodes}/>
                    </Box>
                </Flex>
            </Container>
        </ChakraProvider>
    )
}

const QrHome = () => {
    return (
        <ChakraProvider>
            <QrApp />
        </ChakraProvider>
    )
}

export default QrHome