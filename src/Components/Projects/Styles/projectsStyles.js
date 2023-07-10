import { makeStyles } from "@mui/styles";

export const useProjectStyles = makeStyles((theme) => ({
  projectCard: {
    position:'relative',
    width: "100%",
    // height:'100%',
    display: "flex",
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection: "column",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
      backgroundColor: "#F8F7F1",

      // zoom its child image
      "& img": {
        transition: "1000ms cubic-bezier(0.17, 0.67, 0, 1.01)",
        scale: "1.1",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      margin: "10px 0px",
      padding: "10px 0px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
      },
    },

  },

  projectStatus: {
    position:'absolute',
    right:6,
    top:5,
    display:'flex',
    color:'#646665'
  }
}));
