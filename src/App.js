import React,{useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ClassIcon from '@mui/icons-material/Class';
import SuperAdminDashboard from './components/Dashboard/Dashboard'
import Books from './components/Books/Books';
import Journals from './components/Journals/Journals';
import AddBooks from './components/Books/AddBooks'





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const sideBar=[
  {
    path: '/superadmin-dashboard',
    text: 'Dashboard',
    icon:<PeopleAltIcon/>
  },
  {
    path: '/books',
    icon: <LibraryBooksIcon />,
    text: 'Books'
  },
  {
    path: '/journals',
    icon: <ClassIcon />,
    text: 'Journals'
  }
]

  const routes=[
    //side bar routes
    {
      path: '/superadmin-dashboard',
      main: SuperAdminDashboard
    },
    {
      path: '/books',
      main:Books
    },
    {
      path: '/journals',
      main:Journals
    },
    //end sidebar routes


    {
      path: '/addbooks',
      main:AddBooks
    }
   
  ]
  const [active,setActive]=useState('Dashboard')
  return (
    <BrowserRouter>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background:'white'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{color:'black'}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{color:'black'}}>
            USC Library Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#388e3c'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBar.map((row,index) => (
            <Link to={row.path} style={{textDecoration:'none',color:'black'}} onClick={()=>setActive(row.text)}>
            <ListItem button key={index} style={{background:active===row.text?'white':''}} >
              <ListItemIcon>
                {row.icon}
              </ListItemIcon>
              <ListItemText primary={row.text} />
            </ListItem>
            </Link>
          ))}
        
        </List>
       

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

      </Main>
    </Box>
    </BrowserRouter>
  );
}
