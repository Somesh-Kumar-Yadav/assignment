import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
export function Grids() {
    const pages = new Array(12).fill(0).map((a, i) => i + 1);
    return <>
        <Grid container spacing={2}>
            {
                pages.map((item) => (
                    <Grid item key={item} xs={12} sm={6} md={4} lg={3} sl={6}>
                        <Paper>
                            <Box>
                                <Typography>{ item}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
        <Typography variant="h3">Next</Typography>
        <Grid container spacing={2}>
            <Grid item container xs={12} spacing={2}>
           {
               pages.map((item) => (
                   <Grid item key={item} xs={12} sm={6}>
                        <Paper>
                            <Box>
                                <Typography>{ item}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))
            } 
           {
               pages.map((item) => (
                   <Grid item key={item} md={4}>
                        <Paper>
                            <Box>
                                <Typography>{ item}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))
            } 
            </Grid>
        </Grid>
    </>
}