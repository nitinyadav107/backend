import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/data', (req, res) => {
    const data = [
        {
            name: 'John Doe',
            age: 20,
            major: 'Computer Science'
        },
        {
            name: 'Jane Smith',
            age: 22,
            major: 'Mathematics'
        },
        {
            name: 'Sam Johnson',
            age: 19,
            major: 'Physics'
        }
    ];
    res.send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
