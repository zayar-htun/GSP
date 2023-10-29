import { Box, Card, CardContent, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from "react";
import { PieChart } from "@mui/icons-material";
import PieChartDash from "./charts/PieChartDash";
import BarChartDash from "./charts/BarChartDash";
import LineChartDash from "./charts/LineChartDash";
import ViewAllCourses from "./comforTea/ViewAllCourses";
import ViewAllReview from "./comforTea/ViewAllReview";
import AddCourse from "./AddCourse";

function TeaDash() {
    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Total Ammount
                                </Typography>
                                <Typography variant="h4" component="div">
                                    $30000
                                </Typography>
                                <Box sx={{display:"flex",alignItems:"center"}}>
                                  <IconButton>
                                    <ArrowUpwardIcon sx={{color:"green"}}/>
                                  </IconButton>
                                  <Typography sx={{color:"green"}}>30% up</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Total Income
                                </Typography>
                                <Typography variant="h4" component="div">
                                    $6600
                                </Typography>
                                <Box sx={{display:"flex",alignItems:"center"}}>
                                  <IconButton>
                                    <ArrowUpwardIcon sx={{color:"green"}}/>
                                  </IconButton>
                                  <Typography sx={{color:"green"}}>30% up</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Total Student
                                </Typography>
                                <Typography variant="h4" component="div">
                                    30
                                </Typography>
                                <Box sx={{display:"flex",alignItems:"center"}}>
                                  <IconButton>
                                    <ArrowUpwardIcon sx={{color:"green"}}/>
                                  </IconButton>
                                  <Typography sx={{color:"green"}}>22 up</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Total Course
                                </Typography>
                                <Typography variant="h4" component="div">
                                    9
                                </Typography>
                                <Box sx={{display:"flex",alignItems:"center"}}>
                                  <IconButton>
                                    <ArrowUpwardIcon sx={{color:"green"}}/>
                                  </IconButton>
                                  <Typography sx={{color:"green"}}>2 new</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{my:2}}/>
            <Box sx={{mt:2,display:"flex",justifyContent:"space-around"}}>
              <PieChartDash />
              <BarChartDash/>
            </Box>
            <Divider sx={{my:2}}/>
            
            <Box>
              <LineChartDash/>
            </Box>
            <Divider sx={{my:2}}/>
            <Box>
              <AddCourse/>
            </Box>
            <Divider sx={{my:2}}/>
            <Box>
              <Typography variant="h5">View All Courses</Typography>
              <ViewAllCourses/>
            </Box>
            <Divider sx={{my:2}}/>
            <Box>
              <Typography variant="h5">View All Reviews</Typography>
              <ViewAllReview/>
            </Box>
            <Divider sx={{my:2}}/>
            
        </Box>
    );
}

export default TeaDash;
