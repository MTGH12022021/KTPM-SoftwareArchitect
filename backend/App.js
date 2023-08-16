// Import các thư viện cần thiết
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');

const PORT = 5000;

// Middleware để xử lý JSON trong yêu cầu
app.use(express.json());
// Sử dụng middleware CORS
// app.use(cors());

const users = [];

// Route xử lý đăng ký
app.post('/signup', (req, res) => {
    try {
        console.log(users);
        const { email, phoneNumber, password } = req.body;

        if (users.some(user => user.email === email)) {
            return res.status(409).json({ message: 'Email đã tồn tại' });
        }

        const newUser = { email, phoneNumber, password };
        users.push(newUser);

        return res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Lỗi xử lý yêu cầu đăng ký:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu' });
    }
});


// Route xử lý đăng nhập
app.post('/login', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    // Kiểm tra xem người dùng có tồn tại và thông tin đăng nhập chính xác không
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // Tạo token JWT khi đăng nhập thành công
    const token = jwt.sign({ email }, 'your_secret_key');
    return res.json({ token });
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
