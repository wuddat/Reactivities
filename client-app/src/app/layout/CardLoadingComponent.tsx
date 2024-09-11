import { Skeleton, Card, CardActions, CardContent, Box, Grid, CardHeader } from '@mui/material/';
import React from 'react';


export default function CardLoadingComponent() {

    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ flexGrow: 1 }}>
                        <CardHeader sx={{ mb: 0 }}
                            avatar={
                                <Skeleton variant="circular" width={100} height={100} />
                            }
                            action={null}
                            title={<Skeleton

                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />}
                            subheader={
                                <Skeleton height={10} width="40%" />}
                        />
                        <CardContent>
                            <React.Fragment>
                                <Skeleton height={10} style={{ marginBottom: 6 }} />
                                <Skeleton height={10} width="80%" />
                            </React.Fragment>
                        </CardContent>
                        <CardContent>
                            <React.Fragment>
                                <Skeleton height={10} style={{ marginBottom: 6 }} />
                                <Skeleton height={10} width="80%" />
                            </React.Fragment>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}