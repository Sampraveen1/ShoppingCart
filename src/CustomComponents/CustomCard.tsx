import { Avatar, Box, Grid, Link, Paper,  Typography } from '@mui/material'
import React  from 'react'



interface CustomCardProps {
    icon: React.ReactNode;
    title: string;
    count: number;
}


const CustomCard: React.FC<CustomCardProps> = ({ icon, title, count }) => {
  
    return (
        <div>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 1,
                    borderRadius: 3,
                    boxShadow:'none',
                    border:'1px solid #ddd',
                    textAlign: 'left',
                    width: { xs: '100%', sm: 'auto' },
                    height:80
                }}

                
            >
                <Avatar
                    variant='square'
                    sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#f0f0f0',
                        borderRadius: 1,
                        mr: 2
                    }}
                >
                    {icon}
                </Avatar>

                <Box sx={{ display:'flex' }} >
                    <Grid>
                        <Typography variant="body2" fontWeight="bold" >
                            {title}
                        </Typography>
                        <Link href="#" color="error" sx={{ mt: 1, cursor: 'pointer', display: 'block' }}>
                            Show All
                        </Link>
                    </Grid>
                    <Grid sx={{pl:5}}>
                        <Typography variant="body2" color="text.secondary" >
                            ({count})
                        </Typography>
                    </Grid>
                </Box>
            </Paper>

        </div>
    )
}

export default CustomCard;





