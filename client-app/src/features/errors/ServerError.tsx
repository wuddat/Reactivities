import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Box, Container, Typography } from "@mui/material";


export default observer(function ServerError() {
    const { commonStore } = useStore();
    return (
        <Container>
            <Typography variant='h1'>Server Error</Typography>
            <Typography variant='h5' color='red' sx={{ mb: 2 }}>{commonStore.error?.message}</Typography>
            {commonStore.error?.details && (
                <Box sx={{ backgroundColor: 'white', border: '1px gray solid', p: 3 }}>
                    <Typography variant='h4'>Stack trace</Typography>
                    <code style={{ marginTop: '1em' }}>{commonStore.error.details}</code>
                </Box>
            )}
        </Container>
    )
})