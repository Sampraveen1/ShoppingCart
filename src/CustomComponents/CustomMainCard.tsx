import { Avatar, Box, Paper} from '@mui/material';
import React from 'react'



interface MainCardProps {
    icon: React.ReactNode;
    title: string;
}




const CustomMainCard: React.FC<MainCardProps> = ({ icon, title }) => {

    return (
        <div>

            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                    width: '90%',
                    p: 1,
                    borderBottom: 'none'
                }}
            >

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ background: 'white' }}>
                        {icon}
                    </Avatar>

                    <Box sx={{ ml: 1 }}>
                        {title}
                    </Box>
                </Box>
                <Box>
                    +
                </Box>
            </Paper>


        </div>
    )
}

export default CustomMainCard;