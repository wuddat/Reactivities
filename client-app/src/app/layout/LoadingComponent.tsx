import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Skeleton, Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"

interface Props {
    loading?: boolean;
    content?: string;
}

export default function LoadingComponent({ loading = true, content = 'Loading...' }: Props) {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',  // Horizontally center
            alignItems: 'center',      // Vertically center
            height: '100vh',           // Full viewport height
            width: '100vw',            // Full viewport width
        }}>
            <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            ><span>{content}</span></LoadingButton>
        </Box>

    )
}