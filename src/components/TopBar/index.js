import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <img
              alt="unloaded"
              src={"https://i.imgur.com/TEtQYW8.png"}
              width="200px"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
