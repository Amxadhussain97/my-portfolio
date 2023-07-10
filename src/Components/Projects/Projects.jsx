import React from "react";
import { Box, Typography, Stack, Paper, Card } from "@mui/material";
import { useProjectStyles } from "./Styles/projectsStyles";
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';

export default function Projects() {
  const classes = useProjectStyles();

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box  className="flex-items-center">
      <Typography
        variant="overline"
        display="block"
        color="primary"
        gutterBottom
        sx={{
          fontSize: "14px",
          letterSpacing: "0.2rem",
          width: "100%",
          textAlign: "center",
        }}
        className="section-title"
      >
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </Typography>

      <Typography
        variant="h3"
        gutterBottom
        // make font weight bold
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "2rem",
            sm: "3.5rem",
          },
          width: "100%",
          textAlign: "center",
        }}
        className="section-tag"
      >
        My Projects
      </Typography>
      <Box fullWidth sx={{ width: "90%", mt: 6, }}>
        {/* make stack */}
        <Stack
          direction="row"
          gap={4}
          // decrease horizontal gap
          alignItems="stretch"
          sx={{
            width: "100%",
            justifyContent: {
              xs: "center",
              sm: "space-around",
            },
          }}
          flexWrap="wrap"
        >
          {items.map((item, index) => {
            return (
              <Paper
                elevation={1}
                sx={{
                  px: 3,
                  pt:4,
                  width: {
                    xs: "90%",
                    sm: "31%",
                  },
                  borderRadius: "15px",
                  height: {
                    xs: "280px",
                    sm: "480px",
                  },
                }}
                className={classes.projectCard}
              >
                {/* make image */}
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    overflow: "hidden",
                    borderRadius: "15px",
                  }}
                >
                  <Box className={classes.projectStatus}>
                    <Typography variant="caption" display="block" gutterBottom sx={{fontSize:'0.6rem',}}>
                      Public
                    </Typography>
                    <PublicIcon sx={{ fontSize:'0.9rem',pt:0.3,mx:0.5}}/>
                  </Box>
                  <img
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg"
                    alt="merchandise"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  
                </Box>

                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{ fontWeight: "450",my:2 }}
                >
                BughiChugi Site
                </Typography>

                {/* <PrimaryButton fullWidth sx={{ my: 3 }}>
                  Get this for 550
                </PrimaryButton> */}
              </Paper>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
