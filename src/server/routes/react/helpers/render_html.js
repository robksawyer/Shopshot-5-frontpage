const renderHTML = (title, componentHTML, initialState) => {
    return `
    <!DOCTYPE html>
      <html lang="en-US" style="height: 100%;">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <link rel="icon" href="/favicon.png">
          <link href='//fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
          <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
          <!-- <link rel="stylesheet" href="/public/css/styles.css"> -->
      </head>
      <body style="position: relative; min-height: 100%;">
        <!-- Bug fix: Extra div fixes issue https://stackoverflow.com/questions/33521047/warning-react-attempted-to-reuse-markup-in-a-container-but-the-checksum-was-inv -->
        <div id="react-view"><div>${componentHTML}</div></div>
        <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
          </script>
        <script type="application/javascript" src="/js/bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderHTML;
