import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { borders } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "#FFC288",
  border: "3px solid #fcecdd",
  boxShadow: 24,
  p: 4,
  color: "#white"
};
function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="bot-links" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="popup-top">
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.name}
            </Typography>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.desc}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.time}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default function CardOutline(props) {
  return (
    <Grid
      container
      spacing={2}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      // style={{ minHeight: "100vh" }}
    >
      <Card className="card-whole" sx={{ minWidth: 275 }}>
        <div className="card-top">
          <CardContent>
            <Typography
              sx={{ fontFamily: "Red Hat Mono", color: "black" }}
              variant="h5"
              component="div"
            >
              {props.name}
            </Typography>
            <Typography
              sx={({ fontSize: 14 }, { color: "black" })}
              gutterBottom
            >
              Created by {props.creator}
            </Typography>
            <br />
          </CardContent>
        </div>
        <br />
        <Typography sx={({ mb: 1.5 }, { paddingX: 2 })} color="text.secondary">
          {props.desc}
        </Typography>
        <div className="interest-text">
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.userInterest}
          </Typography>
        </div>
        <CardActions>
          <Button style={{ color: "black" }} className="text-btn" size="small">
            <BasicModal
              name={props.name}
              desc={props.desc}
              userInterest={props.userInterest}
              time={props.time}
              creator={props.creator}
            />
          </Button>
          <Button className="bot-links">JOIN</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
