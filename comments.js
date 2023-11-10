// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create handler
// 5. Connect handler to route
// 6. Connect route to router
// 7. Connect router to server
// 8. Start server
// 9. Test in browser
// 10. Test in Postman

// 1. Create web server
const express = require('express');
const server = express();

// 2. Create router
const commentsRouter = express.Router();

// 3. Create route
commentsRouter.get('/', (req, res) => {
    res.send('Comments page');
});

// 4. Create handler
commentsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comment ${id}`);
});

// 5. Connect handler to route
// 6. Connect route to router
// 7. Connect router to server
server.use('/comments', commentsRouter);

// 8. Start server
server.listen(3000, () => {
    console.log('Server started');
});

// 9. Test in browser
// 10. Test in Postman