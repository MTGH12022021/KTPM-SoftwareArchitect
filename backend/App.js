const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const session = require('express-session');

const PORT = 5000;


app.use(express.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
const users = [];

app.post('/signup', (req, res) => {
    try {
        console.log(req.body);
        const { email, phoneNumber, password, role } = req.body;
        if (role == "admin")
            console.log("Ban la admin");
        else if (role == "user")
            console.log("ban la khach hang");
        else if (role == "driver")
            console.log("Ban la tai xe");

        if (users.some(user => user.email === email)) {
            return res.status(409).json({ message: 'Email đã tồn tại' });
        }

        const newUser = { email, phoneNumber, password };
        users.push(newUser);

        req.session.user = { email, role };

        return res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        console.error('Lỗi xử lý yêu cầu đăng ký:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu' });
    }
});
app.post('/login', (req, res) => {
    console.log(req.body);
    const { email, password, role } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }
    const token = jwt.sign({ email }, 'your_secret_key');
    req.session.user = { email, role };
    return res.json({ token });
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
