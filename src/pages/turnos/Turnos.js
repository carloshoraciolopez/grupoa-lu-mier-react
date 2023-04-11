import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

function Turnos () {
    const opciones = [
        {
            id:1,
            opcion: 'Particular'
        },
        {
            id:2,
            opcion: 'Obra Social'
        },
        {
            id:3,
            opcion: 'Pami'
        },
        {
            id:4,
            opcion: 'Prepagas'
        },
        {
            id:5,
            opcion: 'Atencion embarazadas'
        }
    ]
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', padding: 1,margin: 1}}  >
                    <Stack spacing={1}                         
                        direction={{ xs: 'column', sm: 'row' , md: 'column'}}
                        >
                        {
                            opciones.map(o => <Button 
                                    key={o.id} 
                                    variant="contained" 
                                    color="primary"
                                    startIcon={<AddCircleIcon />}
                                    >
                                        {o.opcion}
                                </Button>)
                        }
                    </Stack>
                </Box>
            </Container>            
            <Container maxWidth='lg'>
                    <Stack spacing={5}
                        direction={{ xs: 'row' } }
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
                    </Stack>
            </Container>            
        </>
    );
}

export default Turnos;