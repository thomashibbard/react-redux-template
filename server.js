const express = require('express')
		, app = express()
		, path = require('path')
		, serveindex = require('serve-index');

const PORT = 5501;

app.use(express.static(__dirname));
app.use('/dist', serveindex(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log('listening on', PORT);
});