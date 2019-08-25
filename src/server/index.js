import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3030;

//app.use('/scripts', express.static(path.join(__dirname, './scripts')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});