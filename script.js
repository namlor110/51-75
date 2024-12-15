const questions = [
    {
        question: "Câu 51: Cuộc chiến đấu chống Pháp ở đô thị của quân và dân Hà Nội diễn ra trong bao nhiêu ngày đêm?",
        options: ["40 ngày đêm", "50 ngày đêm", "60 ngày đêm", "70 ngày đêm"],
        answer: 2
    },
    {
        question: "Câu 52: Chiến dịch nào còn có tên là chiến dịch Hoàng Hoa Thám?",
        options: ["Trung Du", "Đường 18", "Hà Nam Ninh", "Biên giới"],
        answer: 1 // B: Đường 18
    },
    {
        question: "Câu 53: Sau Cách mạng tháng Tám đến 1954, kẻ thù chính của nhân dân Việt Nam là...",
        options: ["Pháp", "Anh", "Mĩ", "Nhật Bản"],
        answer: 0 // A: Pháp
    },
    {
        question: "Câu 54: Căn cứ địa cách mạng của Việt Nam trong cuộc kháng chiến chống Pháp xâm lược lần thứ hai là...",
        options: ["Hà Nội", "Đông Khê", "Việt Bắc", "Điện Biên Phủ"],
        answer: 2 // C: Việt Bắc
    },
    {
        question: "Câu 55: Hội nghị văn hoá toàn quốc lần thứ hai diễn ra khi nào?",
        options: ["6/1948", "7/1948", "7/1949", "8/1949"],
        answer: 1
    },
    {
        question: "Câu 56: Ý nào sau đây là nguyên tắc quan trọng nhất của Đảng Cộng sản Đông Dương trong chính sách đối ngoại giai đoạn 1945-1946?",
        options: [
            "Tránh một lúc phải đối đầu với nhiều kẻ thù",
            "Mềm dẻo về sách lược, cứng rắn về nguyên tắc",
            "Không chủ động khơi mào đối đầu quân sự với đối phương",
            "Tranh thủ thời gian hòa bình để xây dựng, củng cố lực lượng"
        ],
        answer: 1 // B: Mềm dẻo về sách lược, cứng rắn về nguyên tắc
    },
    {
        question: "Câu 57: Đại hội Văn hoá toàn quốc lần thứ hai xác định phương châm xây dựng nền văn hoá mới:",
        options: ["Dân tộc hoá", "Đại chúng hoá", "Khoa học hoá", "Cả ba phương án trên"],
        answer: 3
    },
    {
        question: "Câu 58: Chính phủ và Chủ tịch Hồ Chí Minh kêu gọi đồng bào thực hiện “Tuần lễ vàng”, “Quỹ độc lập” nhằm mục đích gì?",
        options: ["Giải quyết khó khăn về tài chính", "Hỗ trợ giải quyết nạn đói", "Xây dựng chính quyền cách mạng", "Giải quyết nạn mù chữ"],
        answer: 0 // A: Giải quyết khó khăn về tài chính
    },
    {
        question: "Câu 59: Tại sao Đảng lại lựa chọn giải pháp thương lượng với Pháp?",
        options: [
            "Chấm dứt cuộc kháng chiến ở Nam Bộ",
            "Buộc quân Tưởng phải rút ngay về nước, tránh được tình trạng cùng một lúc phải đối phó với nhiều kẻ thù",
            "Phối hợp với Pháp tấn công Tưởng",
            "Lực lượng của ta còn yếu"
        ],
        answer: 1 // B: Buộc quân Tưởng phải rút ngay về nước
    },
    {
        question: "Câu 60: Việc kí Hiệp định Sơ bộ ngày 6/3/1946 chứng tỏ...",
        options: [
            "sự mềm dẻo của Việt Nam trong việc phân hóa kẻ thù",
            "sự thỏa hiệp của Đảng và Chính phủ Việt Nam Dân chủ Cộng hòa",
            "Việt Nam không có khả năng đánh bại quân Pháp",
            "sự non yếu trong lãnh đạo của Đảng Cộng sản Đông Dương"
        ],
        answer: 0
    },
    {
        question: "Câu 61: Văn kiện nào dưới đây KHÔNG được coi như Cương lĩnh kháng chiến của Đảng ta?",
        options: [
            "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
            "Chỉ thị toàn dân kháng chiến của Trung ương Đảng",
            "Tác phẩm 'Kháng chiến nhất định thắng lợi' của Tổng Bí thư Trường Chinh",
            "Đường cách mệnh của Nguyễn Ái Quốc"
        ],
        answer: 3 // D: Đường cách mệnh của Nguyễn Ái Quốc
    },
    {
        question: "Câu 62: Trận đánh tiêu biểu nhất của Việt Nam trên đường số 4 trong chiến dịch Việt Bắc thu – đông năm 1947 là...",
        options: ["Thất Khê", "Đông Khê", "Đèo Bông Lau", "Đoan Hùng"],
        answer: 2 // C: Đèo Bông Lau
    },
    {
        question: "Câu 63: Để chuẩn bị tấn công lên Việt Bắc lần thứ hai, Pháp – Mĩ thực hiện kế hoạch nào?",
        options: ["Kế hoạch Rove", "Kế hoạch Đờ Lát đơ Tátxinhi", "Kế hoạch Nava", "Kế hoạch 'đánh nhanh thắng nhanh'"],
        answer: 0 // A: Kế hoạch Rove
    },
    {
        question: "Câu 64: Cụm cứ điểm nào được Việt Nam chọn làm nơi mở đầu cho chiến dịch Biên giới thu - đông năm 1950?",
        options: ["Cao Bằng", "Thất Khê", "Đông Khê", "Đình Lập"],
        answer: 2 // C: Đông Khê
    },
    {
        question: "Câu 65: Nhiệm vụ hàng đầu của nhân dân ta trong quá trình kháng chiến chống thực dân Pháp:",
        options: [
            "Chống đế quốc giành độc lập dân tộc",
            "Xoá bỏ những tàn tích phong kiến đem lại ruộng đất cho nông dân",
            "Xây dựng chế độ dân chủ mới",
            "Xây dựng chính quyền mới"
        ],
        answer: 0
    },
    {
        question: "Câu 66: Chọn phương án đúng nhất: Phương châm chiến lược của cuộc kháng chiến chống Pháp là:",
        options: [
            "Toàn dân",
            "Toàn diện",
            "Lâu dài và dựa vào sức mình là chính",
            "Toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính"
        ],
        answer: 3
    },
    {
        question: "Câu 67: Khi bắt đầu tiến hành xâm lược Việt Nam, thực dân Pháp đã thực hiện chiến lược:",
        options: [
            "Dùng người Việt đánh người Việt",
            "Lấy chiến tranh nuôi chiến tranh",
            "Đánh nhanh, thắng nhanh",
            "Dùng người Việt đánh người Việt, lấy chiến tranh nuôi chiến tranh"
        ],
        answer: 2 // C: Đánh nhanh, thắng nhanh
    },
    {
        question: "Câu 68: Ngày 15-10-1947, để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, Ban Thường vụ Trung ương Đảng đã đề ra:",
        options: [
            "Chỉ thị kháng chiến, kiến quốc",
            "Chỉ thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'",
            "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng",
            "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp"
        ],
        answer: 1
    },
    {
        question: "Câu 69: Đầu năm 1948, TW Đảng đã đề ra cách thức thực hiện cách mạng ruộng đất theo đường lối riêng biệt của cách mạng Việt Nam, đó là:",
        options: [
            "Cải cách ruộng đất",
            "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ",
            "Sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân",
            "Cải cách ruộng đất, sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân"
        ],
        answer: 1 // B: Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ
    },
    {
        "question": "Câu 70: Tại sao Đảng lại lựa chọn giải pháp thương lượng với Pháp?",
        "options": [
            "Chấm dứt cuộc kháng chiến ở Nam Bộ",
            "Buộc quân Tưởng phải rút ngay về nước, tránh được tình trạng cùng một lúc phải đối phó với",
            "Phối hợp với Pháp tấn công Tưởng",
            "Cả A, B và C"
        ],
        "answer": 3
    },
    {
        "question": "Câu 71: Sự kiện mở đầu cho sự hòa hoãn giữa Việt Nam và Pháp?",
        "options": [
            "Pháp ngừng bắn ở miền Nam",
            "Việt Nam với Pháp nhân nhượng quyền lợi ở miền Bắc",
            "Ký kết hiệp định Sơ bộ 6-3-1946 giữa Việt Nam với Pháp",
            "Pháp và Tưởng ký hiệp ước Trùng Khánh trao đổi quyền lợi cho nhau"
        ],
        "answer": 2
    },
    {
        "question": "Câu 72: Sau khi ký bản Hiệp định Sơ bộ, ngày 9-3-1946, Ban Thường vụ Trung ương Đảng đã ra chỉ thị gì?",
        "options": [
            "Chỉ thị kháng chiến kiến quốc",
            "Chỉ thị Hòa để tiến",
            "Chỉ thị Toàn quốc kháng chiến",
            "Cả A, B và C"
        ],
        "answer": 1
    },
    {
        "question": "Câu 73: Sau bản Hiệp định sơ bộ, ngày 14-9 Chủ tịch Hồ Chí Minh đã thay mặt Chính phủ ký bản Tạm ước với Chính phủ Pháp với nội dung gì?",
        "options": [
            "Pháp thừa nhận các quyền dân tộc cơ bản của nước Việt Nam",
            "Chấm dứt chiến tranh ở Việt Nam",
            "Đình chỉ xung đột ở miền Nam và sẽ tiếp tục đàm phán vào 1-1947",
            "Cả A, B và C"
        ],
        "answer": 3
    },
    {
        "question": "Câu 74: Cuối năm 1946, thực dân Pháp đã bội ước, liên tục tăng cường khiêu khích và lấn chiếm thêm một số địa điểm như:",
        "options": [
            "Thành phố Hải Phòng, thị xã Lạng Sơn",
            "Đà Nẵng, Sài Gòn",
            "Hải Phòng, Hải Dương, Lào Cai, Yên Bái",
            "Thành phố Hải Phòng, thị xã Lạng Sơn, Đà Nẵng, Hà Nội"
        ],
        "answer": 3
    },
    {
        "question": "Câu 75: Hiệp ước Hoa - Pháp được ký kết ở đâu?",
        "options": [
            "Paris",
            "Trùng Khánh",
            "Hương Cảng",
            "Ma Cao"
        ],
        "answer": 1
    }    
];


let currentQuestionIndex = 0;

// Hiển thị câu hỏi
function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Xóa nội dung cũ

    const questionData = questions[currentQuestionIndex];
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questionData.question;

    quizContainer.appendChild(questionTitle);

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.textContent = option;

        // Gắn sự kiện click cho mỗi lựa chọn
        optionButton.addEventListener("click", () => handleAnswer(index));
        quizContainer.appendChild(optionButton);
    });
}

// Xử lý chọn đáp án
function handleAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Kiểm tra đúng hay sai
    options.forEach((option, index) => {
        if (index === questionData.answer) {
            option.classList.add("correct"); // Đáp án đúng
        }
        if (index === selectedIndex && index !== questionData.answer) {
            option.classList.add("incorrect"); // Đáp án sai
        }
        option.style.pointerEvents = "none"; // Vô hiệu hóa các lựa chọn
    });

    // Hiển thị nút "Câu tiếp theo"
    document.getElementById("next-btn").style.display = "block";
}

// Chuyển đến câu hỏi tiếp theo
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Hiển thị câu hỏi tiếp theo
        document.getElementById("next-btn").style.display = "none"; // Ẩn nút
    } else {
        // Kết thúc bài trắc nghiệm
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = `<h2>Bạn đã hoàn thành bài trắc nghiệm!</h2>`;
        document.getElementById("next-btn").style.display = "none";
    }
});

// Bắt đầu bài trắc nghiệm
showQuestion();