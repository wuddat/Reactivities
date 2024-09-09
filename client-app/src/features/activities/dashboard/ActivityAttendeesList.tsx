import { observer } from "mobx-react-lite";
import { Grid, Avatar } from '@mui/material';
import { Profile } from "../../../app/models/profile";
import HoverCard from "../../profiles/HoverCard";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityAttendeesList({ attendees }: Props) {

    
    return (
        <Grid container spacing={2}>
            {attendees.map(attendee => {
                return (
                    <Grid item key={attendee.username}>
                        <HoverCard
                            key={`${attendee.username}hovercard`}
                            baseContent={<Grid item key={attendee.username}>
                                {attendee.following ?
                                    <Avatar
                                        alt={attendee.username}
                                        src={attendee.image || '/assets/user.png'} component='a' href={`/profiles/${attendee.username}`}
                                        sx={{ border: '2px solid rgb(25, 118, 210)' }}
                                    /> :
                                    <Avatar
                                        alt={attendee.username}
                                        src={attendee.image || '/assets/user.png'} component='a' href={`/profiles/${attendee.username}`}
                                    />
                                }
                            </Grid>}
                            hoverContent={<ProfileCard profile={attendee} />} />
                    </Grid>


                );
            })}
        </Grid>
    )

})