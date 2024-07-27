import React, { useState, useRef } from "react";
import Logo from "../assets/Logo";
import QRCode from "react-qr-code";
import { HexColorPicker } from "react-colorful";
import {
  Button,
  Stack,
  Popover,
  TextField,
  Typography,
  Slider,
  FormLabel,
  Box,
} from "@mui/material";
import { contrastColor } from "../helpers/contrastColor";
import { downloadImgFromContainer } from "../helpers/downloadImgFromContainer";
import { FileDownload } from "@mui/icons-material";

function Home() {
  const [url, setUrl] = useState("");
  const [QRColor, setQRColor] = useState("#542ea6");
  const [backgroundColor, setBackgroundColor] = useState("#beaaea");
  const [rounded, setRounded] = useState(10);
  const [margin, setMargin] = useState(10);

  const [QRColorAnchorEl, setQRColorAnchorEl] =
    useState<HTMLButtonElement | null>(null);
  const [backgroundColorAnchorEl, setBackgroundColorAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const QRContainerRef = useRef<HTMLDivElement>(null);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleQRColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQRColorAnchorEl(event.currentTarget);
  };

  const handleBackgroundColorPicker = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setBackgroundColorAnchorEl(event.currentTarget);
  };

  const handleCloseQrColorPicker = () => {
    setQRColorAnchorEl(null);
  };

  const handleCloseBackgroundColorPicker = () => {
    setBackgroundColorAnchorEl(null);
  };

  const openQRColor = Boolean(QRColorAnchorEl);
  const openBackgroundColor = Boolean(backgroundColorAnchorEl);
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#443cba] via-[#542EA6] to-[#956bff] bg-clip-padding animate-gradient">
      <div className="w-full m-auto max-w-screen-lg min-h-dvh p-4 md:p-6 md:place-content-center">
        <div className="m-auto max-w-screen-md rounded-lg bg-white/80 backdrop-blur-md p-4 md:p-6">
          <div className="w-40 m-auto mb-2">
            <Logo />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* QR Code */}
            <div className="place-content-center">
              <div
                ref={QRContainerRef}
                className="shadow-md"
                style={{
                  height: "fit-content",
                  maxWidth: "100%",
                  width: "100%",
                  borderRadius: rounded,
                  backgroundColor: backgroundColor,
                  padding: margin,
                }}
              >
                <QRCode
                  size={256}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                    borderRadius: rounded,
                  }}
                  value={url}
                  bgColor={backgroundColor}
                  fgColor={QRColor}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </div>

            {/* QR Settings */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Typography variant="h6" sx={{ mb: 2 }}>
                Configuración
              </Typography>
              <TextField
                id="outlined-basic"
                label="Ingresa la URL"
                variant="outlined"
                value={url}
                onChange={handleUrlChange}
                fullWidth
              />
              <Box className="mt-4">
                <FormLabel>Colores</FormLabel>
                <Stack direction="row" spacing={1} className="mt-2">
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    onClick={handleQRColorPicker}
                    sx={{
                      backgroundColor: QRColor,
                      color: contrastColor(QRColor),
                      "&:active": { backgroundColor: QRColor },
                      "&:hover": { backgroundColor: QRColor },
                    }}
                  >
                    Color QR
                  </Button>
                  <Popover
                    open={openQRColor}
                    onClose={handleCloseQrColorPicker}
                    anchorEl={QRColorAnchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    <HexColorPicker
                      className="m-2"
                      color={QRColor}
                      onChange={setQRColor}
                    />
                  </Popover>
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    onClick={handleBackgroundColorPicker}
                    sx={{
                      backgroundColor: backgroundColor,
                      color: contrastColor(backgroundColor),
                      "&:active": { backgroundColor: backgroundColor },
                      "&:hover": { backgroundColor: backgroundColor },
                    }}
                  >
                    Color Fondo
                  </Button>
                  <Popover
                    open={openBackgroundColor}
                    onClose={handleCloseBackgroundColorPicker}
                    anchorEl={backgroundColorAnchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    <HexColorPicker
                      color={backgroundColor}
                      className="m-2"
                      onChange={setBackgroundColor}
                    />
                  </Popover>
                </Stack>
              </Box>

              <Box className="mt-4">
                <FormLabel>Borde redondeado</FormLabel>
                <Slider
                  size="medium"
                  value={rounded}
                  defaultValue={50}
                  onChange={(e, v) => setRounded(v as number)}
                  min={0}
                  max={100}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(v) => `${v}%`}
                />
              </Box>
              <Box className="mt-4">
                <FormLabel>Margen</FormLabel>
                <Slider
                  size="medium"
                  value={margin}
                  defaultValue={0}
                  onChange={(e, v) => setMargin(v as number)}
                  min={0}
                  max={50}
                  step={1}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Stack direction="row" spacing={2} className="mt-4">
                <Button
                  startIcon={<FileDownload />}
                  variant="contained"
                  disableElevation
                  fullWidth
                  className="mt-4"
                  disabled={!url}
                  onClick={downloadImgFromContainer.bind(
                    null,
                    "png",
                    QRContainerRef
                  )}
                >
                  PNG
                </Button>
                <Button
                  startIcon={<FileDownload />}
                  variant="contained"
                  disableElevation
                  fullWidth
                  className="mt-4"
                  disabled={!url}
                  onClick={downloadImgFromContainer.bind(
                    null,
                    "jpeg",
                    QRContainerRef
                  )}
                >
                  JPG
                </Button>
              </Stack>
            </div>
          </div>

          <div className="text-center mt-12">
            <Typography variant="caption">
              Hecho con ❤️ por{" "}
              <a
                href="https://github.com/Mateo172001"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                Mateo172001
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
