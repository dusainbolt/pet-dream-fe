import TestIcon from '@asset/icons/TestIcon';
import CustomizedBreadcrumbs from '@common/Breadcrumb/BreadcrumbCustom';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Chip, Container, Hidden, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DEFAULT_STYLE } from '@styles/theme';
import * as React from 'react';
import AccountPopoverMenu from './LayoutComponent/AccountPopoverMenu';
import { userAuthenticationLayoutStyles } from './styles/UserAuthenticationLayout.style';

const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function UserAuthenticationLayout(props: any) {
  const { window, children, background } = props as any;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const styles = userAuthenticationLayoutStyles(drawerWidth)();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider textAlign="left">
        <Chip style={{ background: DEFAULT_STYLE.primaryColorLight }} label="Menu" />
      </Divider>
      <List>
        {['Pet Của Bạn', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ minWidth: 35 }}>{index % 2 === 0 ? <TestIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider textAlign="left">
        <Chip style={{ background: DEFAULT_STYLE.primaryColorLight }} label="Menu" />
      </Divider>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar style={{ padding: 0 }}>
          <Container>
            <Hidden smUp>
              <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Responsive drawer
                </Typography>
              </Stack>
            </Hidden>
            <Hidden smDown>
              <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                <CustomizedBreadcrumbs />
                <Stack>
                  <AccountPopoverMenu />
                </Stack>
              </Stack>
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            className={styles.navDrawer}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer variant="permanent" className={styles.navDrawer} open>
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
      <Box component="main" className={styles.boxMain} style={{ background, width: '100%' }}>
        <Container>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </Box>
  );
}
