import Layout from './layout';
import {Box, Text, InputGroup, Input, InputLeftAddon} from '@chakra-ui/react';
import React from 'react';
import styles from './LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={styles.layout}>
            <Layout>
                <Text fontSize='4xl' textAlign='center'>Welcome to Furrukh Asif's Terminal!</Text>
                <Box>
                    <InputGroup>
                        <InputLeftAddon bg='black' border='0' children="guest@Furrukh-Asifs-Terminal %" />
                        <Input type="text" border='0' />
                    </InputGroup>
                </Box>
            </Layout>
        </div>

    )
}