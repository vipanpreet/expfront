import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
          ></script>
          {/* <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> */}
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
