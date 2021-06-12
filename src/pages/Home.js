import { Grid, Button, Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiQrcodeScan } from "@mdi/js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div>
        <h1>Hackhaton FAM </h1>
        <h6>Leia o QR Code para ter acesso ao evento</h6>
      </div>

      <Link to="/qr_scanner">
        <Button variant="contained" size="large" color="primary">
          <Icon
            style={{ padding: 10 }}
            path={mdiQrcodeScan}
            title="QR Scanner"
            size={10}
            color="white"
          />
        </Button>
      </Link>
    </div>
  );
}

export default Home;
