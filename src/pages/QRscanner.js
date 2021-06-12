import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";
import axios from "axios";
import AlertDialogSlide from "../components/ModalApprove";
import { motion } from "framer-motion";

function QRscanner() {
  const [qrscan, setQrscan] = useState();
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState();
  const [participante, setPar] = useState();
  const [evento, setEvento] = useState();
  const [edicao, setEdicao] = useState();
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      axios
        .post(
          "https://servicos.ibsoltelecom.com.br/unicheckapi/participante/validacao.php",
          { token: qrscan }
        )
        .then((response) => handleMsg(response.data))
        .catch(function (e) {
          if (e.response.status === 1) {
            console.log(e);
          }
        });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleMsg = (data) => {
    setOpen(true);
    setMsg(data["message"]);
    setPar(data["participante"]);
    setEvento(data["evento"]);
    setEdicao(data["edicao"]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ minHeight: "500px" }}>
        <Link to="/">
          <Fab style={{ marginRight: 10 }} color="primary">
            <ArrowBack />
          </Fab>
        </Link>

        <center>
          <div style={{ marginTop: 30 }}>
            <QrScan
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ height: 240, width: 320 }}
            />
          </div>
        </center>
        <br />
        <br />
        <AlertDialogSlide
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleMsg}
          msg={msg}
          participante={participante}
          evento={evento}
          edicao={edicao}
        />
      </div>
    </motion.div>
  );
}

export default QRscanner;
