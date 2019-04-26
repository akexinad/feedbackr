module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${ survey.body }</p>
          <div>
            <a href="http://localhost:3000" target="_blank">Yes</a>
          </div>
          <div>
            <a href="http://localhost:3000" target="_blank">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
