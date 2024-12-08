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
        question: "Câu 70: Để giữ vững cuộc kháng chiến lâu dài trong tình hình quốc tế thay đổi, Đảng và Chính phủ đã quyết định:",
        options: [
            "Tranh thủ sự viện trợ của Liên Xô và Trung Quốc",
            "Giành lại các khu vực đồng bằng và đẩy mạnh kháng chiến",
            "Tổ chức lại lực lượng và chuẩn bị cho chiến tranh lâu dài",
            "Thỏa hiệp với Pháp trong một số tình huống"
        ],
        answer: 3 // D: Thỏa hiệp với Pháp trong một số tình huống
    },
    {
        question: "Câu 71: Mùa xuân năm 1954, Việt Nam quyết định:",
        options: [
            "Tiến hành chiến dịch Biên giới",
            "Đẩy mạnh các cuộc tấn công vào các cứ điểm mạnh của địch",
            "Tổ chức chiến dịch đánh vào Đông Khê",
            "Tổ chức chiến dịch Điện Biên Phủ"
        ],
        answer: 2 // C: Tổ chức chiến dịch đánh vào Đông Khê
    },
    {
        question: "Câu 72: Cuối năm 1953, chiến lược phòng thủ của quân đội Việt Nam đã được chỉ đạo qua những văn kiện nào?",
        options: [
            "Văn kiện chiến lược, chiến thuật",
            "Văn kiện nghị quyết đại hội Đảng",
            "Nghị quyết của Hội đồng Chính trị",
            "Văn kiện chiến dịch Điện Biên Phủ"
        ],
        answer: 1 // B: Văn kiện nghị quyết đại hội Đảng
    },
    {
        question: "Câu 73: Kết quả nổi bật nhất của cuộc kháng chiến chống Pháp là:",
        options: [
            "Giành độc lập cho dân tộc",
            "Đánh bại hoàn toàn quân đội Pháp",
            "Giành được quyền tự quyết",
            "Tạo nền tảng cho sự thống nhất đất nước"
        ],
        answer: 3 // D: Tạo nền tảng cho sự thống nhất đất nước
    },
    {
        question: "Câu 74: Trong giai đoạn 1950-1954, cuộc kháng chiến chống Pháp đã có sự giúp đỡ đáng kể từ các quốc gia nào?",
        options: [
            "Mĩ và Liên Xô",
            "Liên Xô và Trung Quốc",
            "Trung Quốc và Mĩ",
            "Liên Xô và các nước xã hội chủ nghĩa"
        ],
        answer: 3
    },
    {
        question: "Câu 75: Để chuẩn bị cho cuộc tổng tiến công vào Việt Bắc năm 1954, quân đội Việt Nam đã tập trung lực lượng tại đâu?",
        options: [
            "Quảng Ninh",
            "Tây Bắc",
            "Điện Biên Phủ",
            "Hà Nội"
        ],
        answer: 1 // B: Tây Bắc
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