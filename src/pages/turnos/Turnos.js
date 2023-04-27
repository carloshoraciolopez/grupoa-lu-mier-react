import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Divider, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import StorageIcon from '@mui/icons-material/Storage';
import EditIcon from '@mui/icons-material/Edit';

function Turnos() {
    const opciones = [
        {
            id: 1,
            opcion: 'Particular'
        },
        {
            id: 2,
            opcion: 'Obra Social'
        },
        {
            id: 3,
            opcion: 'Pami'
        },
        {
            id: 4,
            opcion: 'Prepagas'
        },
        {
            id: 5,
            opcion: 'Atencion embarazadas'
        }
    ]

    const navigate = useNavigate();

    const irA = () => {
        //uso del api de react router dom para navegar
        navigate('/formulario');
    }

    const irARedux = () => {
        navigate('/redux');
    }
    return (
        <>
            <Container maxWidth='lg' 
                disableGutters>
                <Stack spacing={2}
                    direction={{ xs: 'row' }}
                    justifyContent="center"
                >
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" secondary="July 20, 2014" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" secondary="Jan 7, 2014" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" secondary="July 20, 2014" />
                        </ListItem>
                    </List>
                </Stack>
            </Container>
            <Divider />
            <Container maxWidth='lg'>
                <Stack spacing={2}
                    direction={{ xs: 'row' }}
                    justifyContent="space-between"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBackIcon />}
                    >
                        Volver
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<HomeIcon />}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={irA}
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                    >
                        Formulario
                    </Button>
                    <Button
                        onClick={irARedux}
                        variant="contained"
                        color="primary"
                        startIcon={<StorageIcon />}
                    >
                        Redux
                    </Button>
                </Stack>
            </Container>
        </>
    );
}

export default Turnos;