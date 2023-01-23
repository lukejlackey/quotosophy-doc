import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <Box 
            sx={{
                pt: 6, 
                px: 3, 
                mt: 3, 
                bgcolor: 'primary.light', 
                flexGrow: 1,
            }}>
            <Typography variant='h1' color={'primary.dark'} component={'em'}
                sx={{
                    mb: 3,
                }}>
                Available <Box component={'span'} sx={{color: 'secondary.dark'}}>Plans</Box>
            </Typography>
            <stripe-pricing-table
            pricing-table-id="prctbl_1M9fJ5K0iLhH7WHDnPf977tB"
            publishable-key="pk_test_51LxbgDK0iLhH7WHDqVx6EEJMXkJH7GzuxMVfFVXFMLgIyY6W84iujSsopGgzYkFfdaPL5hx4m87TbenHULXhR0Uo001xaRspc7"
            >
            </stripe-pricing-table>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, py: 3, width: 'fit-content', mx: 'auto'}}>
                <Typography variant='body1' color={'primary.dark'}>
                    Upon subscription, a new API key will be generated and sent to the email provided at checkout. For lost or stolen API keys, click <Typography component={Link} to="/recover" variant='body1' color={'primary.dark'} sx={{fontWeight: 'bolder'}}>here</Typography>.
                </Typography>
                <Typography component={'a'} href="https://stripe.com/legal/link-account-terms" target="_blank" variant='body1' color={'primary.dark'}>
                    Terms and Conditions
                </Typography>
                <Typography component={'a'} href="https://stripe.com/privacy" target="_blank" variant='body1' color={'primary.dark'}>
                    Privacy Policy
                </Typography>
                <Typography variant='body2' color={'primary.dark'}>
                    Powered by Stripe
                </Typography>
            </Box>
        </Box>
    );
}