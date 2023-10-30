import { FC } from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"

interface INavbarProps { }

const Navbar: FC<INavbarProps> = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6">Open Jira</Typography>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar