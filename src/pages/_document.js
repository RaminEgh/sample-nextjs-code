import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body dir='rtl'>
          <Main />
          <NextScript />
          <div id='notifications'></div>
          <div id='modal'></div>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
