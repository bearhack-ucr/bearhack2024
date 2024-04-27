import { useZxing } from "react-zxing";

const ScanQRCode = ({ setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} />;
};

export default ScanQRCode;
