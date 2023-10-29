import Head from 'next/head'
import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

import Navbar from '@/components/ui/Navbar';

interface ILayoutProps {
    title?: string;
    children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ title = 'Open Jira', children }) => {
    return (
        <Box sx={{
            flexFlow: 1,

        }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout