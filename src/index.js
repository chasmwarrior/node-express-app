const express = require('express');
const homeRouter = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', homeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
