import { RefObject } from "react";
import { toJpeg, toPng } from "html-to-image";
export const downloadImgFromContainer = (format: string, ref: RefObject<HTMLDivElement>) => {
  const container = ref.current;
  if (container) {
    const toImage = format === "jpeg" ? toJpeg : toPng;
    toImage(container)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `qr-code.${format}`;
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  }
};
