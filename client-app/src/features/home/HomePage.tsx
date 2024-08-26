import { Container } from "@mui/material";
import { Link } from "react-router-dom";



export default function HomePage() {
    return (
        <Container sx={{ mt: '7em' }}>
            <h1>Home Page</h1>
            <h3> Go to <Link to='/activities'>Activities</Link></h3>
        </Container>
    )

}