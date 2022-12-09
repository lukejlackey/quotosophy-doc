import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { default as MainContext } from "../../context/Index";
import { useContext } from 'react';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link } from "react-router-dom";
import qLogo from '../../img/qLogo.png'

export default function Navbar(props) {

    const {drawerWidth, tabs, links, socialLinks, scrollToItem} = useContext(MainContext);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const drawer = (
    <Box sx={{height: 1, bgcolor: 'secondary.light'}}>
        <Toolbar sx={{
            bgcolor: 'secondary.main',
            color: 'white'
        }}>
            <Typography variant="h5" color="secondary.light">
                Contents
            </Typography>
        </Toolbar>
        <Divider />
        <List sx={{
            color: 'primary.main',
            bgcolor: 'secondary.light',
        }}>
            {tabs.map((text, index) => (
            <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => scrollToItem(index)}>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <Toolbar sx={{
            bgcolor: 'secondary.main',
            color: 'white'
        }}>
            <Typography variant="h5" color="secondary.light">
                Links
            </Typography>
        </Toolbar>
        <Divider />
        <List sx={{
            color: 'primary.main',
            bgcolor: 'secondary.light',
        }}>
            {links.map((linkItem, index) => {
                const tag = linkItem['link'][0] === '/' ? Link : 'a';
                return (
            <ListItem key={linkItem['name']} disablePadding component={tag} href={tag === 'a'? linkItem['link'] : ''} to={{pathname: linkItem['link']}}>
                <ListItemButton sx={{color: 'primary.main'}}>
                    <ListItemText primary={linkItem['name']} />
                </ListItemButton>
            </ListItem>
            )})}
        </List>
        <Divider />
        <Toolbar sx={{
            bgcolor: 'secondary.main',
            color: 'white'
        }}>
            <Typography variant="h5" color="secondary.light">
                Connect
            </Typography>
        </Toolbar>
        <Divider />
        <List sx={{
            color: 'primary.main',
            bgcolor: 'secondary.light',
        }}>
            {socialLinks.map((linkItem, index) => (
            <ListItem key={linkItem['name']} disablePadding component={'a'} href={linkItem['link']} target="_blank">
                <ListItemButton sx={{color: 'primary.main'}}>
                    <ListItemText primary={linkItem['name']} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width:  { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" noWrap component={Link} to='/' color={'white'} sx={{textDecoration: 'none', display: 'flex', gap: 1, alignItems: 'center'}}>
                    <Avatar src={qLogo} variant="square"></Avatar>QUOTOSOPHY
                </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ 
                    width: { sm: drawerWidth }, 
                    flexShrink: { sm: 0 }, 
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
        </>
    );
}