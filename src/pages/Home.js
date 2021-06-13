import { Button } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiQrcodeScan } from "@mdi/js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
        <div style={{ fontFamily: "Yanone Kaffeesatz" }}>
          <h1>Hackhathon FAM </h1>
          <h6>Leia o QR Code para ter acesso ao evento</h6>
        </div>

        <Link to="validacao/qr_scanner">
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
    </motion.div>
  );
}

export default Home;
