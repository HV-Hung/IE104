import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { useParams } from "react-router-dom";

const deal_detail = [
  {
    id: "d_1",
    name: "LỄ HỘI ĐA SẮC MÀU",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080.jpg",
    date: "Từ ngày 18/11/2022 - 02/01/2023.",
    content1:
      "- Khách hàng mua combo có sản phẩm của Pepsi sẽ được bốc thăm trúng các phần quà hấp dẫn.",
    content2:
      "- Đối với combo có sản phẩm là Pepsi Black, khách sẽ được tặng thêm 1 phiếu thăm.",
    content3: "",
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội và Huế.",
    object1: "- Tất cả khách hàng.",
    object2: "",
    object3: "",
    other1: `- Trừ giải nhất là chuyến du lịch, tất cả các giải còn lại đều được áp dụng ngay thời điểm trúng, bao
    gồm cả ngày Tết Dương Lịch 2023.`,
    other2: `- Chuyến du lịch: có giá trị đến hết 30/06/2023. BHDS trao voucher tượng trưng về giải thưởng, khách
    hàng tự liên hệ trực tiếp với công ty du lịch khi sử dụng.`,
    other3: `- Gift Card: có hạn sử dụng đến hết 31.12.2023 : được sử dụng như tiền mặt dùng để các sản phẩm đồ ăn 
    thức uống tại các rạp BHD Star – Không áp dụng mua vé.`,
  },
  {
    id: "d_2",
    name: "ĐỒNG HÀNH CÙNG WORLD CUP",
    img: "https://www.bhdstar.vn/wp-content/uploads/2022/12/S%C3%BAtB%C3%B3ngChallenge-1920X1080-1.png",
    date: "Từ ngày 03/12 - 18/12/2022.",
    content1:
      "- Khách hàng mua: 2 vé hoặc 1 Combo bất kì sẽ được tham gia chơi 01 lần trò chơi xoay vòng đá bóng vào Gôn Mini (không giới hạn số lần).",
    content2:
      "- Khách hàng sẽ cần xoay vòng xung quanh vị trí bóng , sau khi xoay xong sẽ phải sút trái bóng ngay trong 2s.",
    content3: "- Nhận được phần quà khi sút trái bóng vào trúng gôn.",
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội.",
    object1: "- Tất cả khách hàng.",
    object2: "",
    object3: "",
    other1: `- Ðịa điểm đặt bóng: 4m cách gôn.`,
    other2: `- Xoay 5 vòng sút vào Goal : tặng ngay 1 nước 22oz.`,
    other3: `- Xoay 7 vòng sút vào Goal : tặng ngay 1 vé xem phim (áp dụng thứ 2,3,4,5).`,
  },
  {
    id: "d_3",
    name: "XÀI VISA NHẬN NGAY BẮP LỚN",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
    date: "Từ ngày 23/09/2022 - 31/03/2023 vào các ngày thứ 6, thứ 7 và Chủ Nhật hàng tuần.",
    content1:
      "- Khách hàng mua 02 vé xem phim thanh toán bằng Visa Chạm sẽ được tặng 01 phần bắp ngọt.",
    content2: "",
    content3: "",
    address: "Tất cả các rạp BHD Star trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
    object3: "",
    other1: `- Chỉ áp dụng cho giao dịch mua 02 vé xem phim.`,
    other2: `- Không giới hạn số lượng túi bắp tặng cho mỗi khách hàng.`,
    other3: `- Áp dụng phụ thu 5,000 nếu muốn đổi vị bắp caramel hoặc pho mai.`,
  },
  {
    id: "d_4",
    name: "ƯU ĐÃI ĐẶC BIỆT CHO U22",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    date: "Từ ngày 08/09/2017.",
    content1:
      "- Giá vé 2D đặc biệt dành cho khách hàng là thành viên và từ 22 tuổi trở xuống.",
    content2: "",
    content3: "",
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội.",
    object1:
      "-  Chỉ áp dụng cho khách hàng đã kích hoạt chức năng ưu đãi U22 trên tài khoản thẻ thành viên.",
    object2: "",
    object3: "",
    other1: `- Tùy theo mỗi cụm rạp sẽ có chính sách giá vé U22 khác nhau.`,
    other2: `- Không áp dụng cho ngày Lễ, Tết.`,
    other3: `- Chỉ áp dụng cho khách hàng đã kích hoạt chức năng ưu đãi U22 trên tài khoản thẻ thành viên. 
    (Mang theo CMND hoặc Thẻ Học Sinh để kích hoạt tại rạp sau khi đăng ký thành viên).`,
  },
  {
    id: "d_5",
    name: "HAPPY MONDAY – THỨ 2 VUI VẺ",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
    date: "Từ ngày 17/05/2016.",
    content1:
      "- Giá vé 2D đặc biệt cho khách hàng xem phim vào ngày thứ 2 hàng tuần.",
    content2: "",
    content3: "",
    address: "Tất cả các rạp BHD Star trên toàn quốc.",
    object1: "- Vé người lớn.",
    object2: "",
    object3: "",
    other1: `- Áp dụng cho mọi suất chiếu phim 2D trong ngày thứ 2 hàng tuần trừ các suất chiếu sớm đặc biệt.`,
    other2: `- Thay đổi tuỳ vào các cụm rạp.`,
    other3: `- Không áp dụng kèm các chương trình giảm giá vé khác.`,
  },
  {
    id: "d_6",
    name: "GIÁ VÉ ƯU ĐÃI CHO SUẤT KHUYA",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
    date: "Từ ngày 01/04/2016.",
    content1:
      "- Giá vé 2D đặc biệt cho khách hàng xem phim vào các suất chiếu sau 22:00.",
    content2: "",
    content3: "",
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội.",
    object1: "- Tất cả đối tượng khách hàng.",
    object2: "",
    object3: "",
    other1: `- Áp dụng cho mọi suất chiếu phim 2D sau 22:00.`,
    other2: `- Áp dụng phụ thu đối với phim 3D, phim bom tấn.`,
    other3: `- Không áp dụng kèm các chương trình giảm giá vé khác.`,
  },
  {
    id: "d_7",
    name: "RA RẠP GẶP LUFFY RINH QUÀ XINH HẾT Ý",
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/350wx495h.jpg",
    date: "Từ ngày 02/12/2022 đến khi hết quà tặng.",
    content1:
      "- Khách hàng mua một lần 2 vé xem phim ONE PIECE FILM RED sẽ được tặng 1 huy hiệu và 1 bìa hồ sơ hoặc 2 huy hiệu hoặc 2 bìa hồ sơ.",
    content2:
      "- Khách hàng mua một lần 4 vé xem phim ONE PIECE FILM RED sẽ được tặng 1 huy hiệu, 2 bìa hồ sơ và 1 giá đỡ điện thoại.",
    content3: "",
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội, Huế, Cần Thơ, Bình Dương...",
    object1: "- Tất cả khách hàng.",
    object2: "",
    object3: "",
    other1: `- Mỗi khách hàng chỉ được tặng đúng với số lượng quà theo thể lệ.`,
    other2: `- Không áp dụng cho vé 0đ.`,
    other3: `- Đặt vé CGV và thanh toán qua các ứng dụng thanh toán điện tử như Zalopay, Momo,... và các ứng dụng ngân hàng vẫn được áp dụng, 
    miễn không xuất vé 0 đồng.`,
  },
  {
    id: "d_8",
    name: "NHẬP HỘI U22 ZALOPAY VỚI CHỈ 1K/VÉ CGV! GIẢM TƯNG BỪNG, GIẢM ĐẬM SÂU",
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/CGVU22-main_350x495.jpg",
    date: "Từ ngày 05/12 - 31/12/2022.",
    content1:
      "- Bạn mới: Chỉ 1.000đ/vé khi thành viên U22 thanh toán bằng Ví điện tử ZaloPay.",
    content2: "",
    content3: "",
    address: "Website cgv.vn, Ứng dụng CGV Cinemas.",
    object1: "- Chỉ áp dụng cho Khách hàng là thành viên U22 của CGV.",
    object2:
      "- Khách hàng có độ tuổi từ 12 – 22 (trước ngày sinh nhật lần thứ 23).",
    object3:
      "-  Bạn mới: Lần đầu tiên liên kết thẻ/ tài khoản ngân hàng mới với ZaloPay trong thời gian diễn ra chương trình và chưa từng thực hiện giao dịch thanh toán trên ZaloPay.",
    other1: `- Khách hàng mới: Giao dịch thanh toán phải từ nguồn ví & có GD nạp tiền từ nguồn thẻ vừa liên kết.`,
    other2: `- Vé 1.000đ chỉ áp dụng duy nhất cho 01 vé đầu tiên.`,
    other3: `- Không áp dụng cho các Suất chiếu sớm/ Suất chiếu đặc biệt/ Suất chiếu phim cũ/ Suất chiếu ngày Lễ Tết  Suất chiếu 2D trong phòng chiếu đặc biệt HOẶC các phòng chiếu như: 
    IMAX, 4DX, GOLD CLASS, STARIUM, L’AMOUR…..`,
  },
  {
    id: "d_9",
    name: "QUÀ TẶNG SINH NHẬT THÀNH VIÊN CGV THÁNG 12",
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/350x495.jpg",
    date: "Từ ngày 01/12/2022 - 31/12/2022.",
    content1:
      "-  CGV tặng Combo 1 Bắp 2 Nước cho những khách hàng là thành viên có sinh nhật trong tháng 12.",
    content2: "",
    content3: "",
    address: "Các cụm rạp CGV trên toàn quốc.",
    object1: "- Khách hàng là thành viên có sinh nhật trong tháng 12.",
    object2:
      "- Thành viên có ít nhất 01 giao dịch trong vòng 12 tháng gần nhất",
    object3: "",
    other1: `- Thông tin ngày tháng năm sinh trên CMND/CCCD của khách hàng phải trùng khớp với thông tin được sử dụng để đăng ký tài khoản thành viên CGV. Nếu 2 thông tin này không khớp nhau, 
    nhân viên có quyền từ chối trao quà sinh nhật cho khách hàng.`,
    other2: `- Nếu chưa đủ điều kiện, thành viên có thể thực hiện giao dịch và nhận quà sau 02 ngày với điều kiện thời điểm đó vẫn còn trong tháng sinh nhật.`,
    other3: ``,
  },
  {
    id: "d_10",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ CITI TẠI CGV “MUA 02 VÉ XEM PHIM TẶNG 01 MY COMBO”",
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/350x495_2.png",
    date: "Áp dụng vào thứ 6 hàng tuần từ 02/12/2022 – 02/06/2023  từ 6:00 đến 23:59.",
    content1: `- Khách hàng sẽ nhận một (01) ưu đãi MY COMBO bao gồm một (01) phần Bắp lớn (44oz) và một (01) Ly Nước Ngọt cỡ vừa (32oz) khi mua hai (02) vé xem phim có xuất chiếu tại các cụm
    rạp CGV tại Hồ Chí Minh và Hà Nội, và thanh toán trực tuyến trên trang www.cgv.vn hoặc ứng dụng CGV trên điện thoại di động (sau đây gọi chung là “Website CGV”) với Thẻ Tín Dụng Citi vào mỗi thứ Sáu.`,
    content2: "",
    content3: "",
    address: "Các cụp rạp CGV Hồ Chí Minh, Hà Nội.",
    object1:
      "- Chủ thẻ tín dụng citi Việt Nam có đầu BIN: 437374, 533948, 531922, 534763, 546079.",
    object2: "",
    object3: "",
    other1: `- My Combo áp dụng quy đổi tại tất cả các cụm rạp CGV tại Thành phố Hồ Chí Minh và Hà Nội.`,
    other2: `- Chương trình khyến mại áp dụng cho giao dịch mua vé xem phim cùng một bộ phim, một suất chiếu và cùng hạng ghế, áp dụng cho tất cả loại vé, suất chiếu và phòng chiếu của CGV (2D, 3D, IMAX, 4DX, 
    GOLD CLASS, STARIUM, L’AMOUR, SCREENX, PREMIUM, SWEETBOX…).`,
    other3: `- Chương trình khyến mại có thể kết thúc trước thời hạn nếu số lượng vé ưu đãi tặng khách hàng đạt số lượng vé quy định trước thời gian kết thúc chương trình và theo quy tắc mua trước, hưởng khuyến mại trước.`,
  },
  {
    id: "d_11",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ NGÂN HÀNG BẢN VIỆT TẠI CGV",
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/adapt_kenh_doi_tac_350x495.png",
    date: "Thứ Năm, Thứ Sáu, Thứ Bảy và Chủ Nhật hàng tuần từ ngày  30/11/2022– 31/12/2023.",
    content1:
      "- Mua 02 vé xem phim CGV chỉ với 90.000 đồng khi mua vé trực tuyến trên ứng dụng CGV Cinema hoặc website www.cgv.vn.",
    content2:
      "- Chương trình chỉ áp dụng cho hạng ghế thường và hạng ghế VIP cho phim 2D. Mỗi cặp vé được áp dụng cho cùng một bộ phim, một suất chiếu và cùng hạng ghế.",
    content3:
      " -Chương trình bắt đầu từ 09h00 - 23h59 các ngày Thứ Năm,Thứ Sáu,Thứ Bảy và Chủ Nhât hàng tuần.",
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội và Huế..",
    object1: "- Áp dụng cho tất cả Chủ thẻ với những đầu BIN sau: 356515.",
    object2: "",
    object3: "",
    other1: `- Khuyến mãi không áp dụng vào các ngày lễ tết.`,
    other2: `- Vé xem phim không có giá trị đổi thành tiền mặt hay hoàn trả.`,
    other3: `- CGV bảo lưu quyền không chấp nhận hoặc từ chối người tham gia có dấu hiệu vi phạm các quy định chương trình (căn cứ theo Điều khoản sử dụng dịch vụ hoặc có bất kì hành vi nào mà bên tổ chức cho rằng là không phù hợp 
    hoặc không thể chấp nhận).`,
  },
  {
    id: "d_12",
    name: "THỨ TƯ VUI VẺ - VÉ PHIM ƯU ĐÃI",
    img: "https://www.cgv.vn/media/wysiwyg/2021/112021/350x495_2x-100.jpg",
    date: "Thứ tư hàng tuần từ ngày 30/11/2022.",
    content1: "- Giá chỉ từ 75k - 95k/vé.",
    content2: "",
    content3: "",
    address: "Khu vực Hồ Chí Minh, Hà Nội, Bình Dương.",
    object1: "- Tất cả đối tượng khách hàng.",
    object2: "",
    object3: "",
    other1: `- Giá vé Thứ Tư Vui Vẻ áp dụng cho ghế thường, ghế VIP, ghế Deluxe và ghế đôi. Giá vé trên chưa bao gồm phụ thu cho ghế Sweetbox và các phim định dạng Dolby Atmos.`,
    other2: `- Giá vé Thứ Tư Vui Vẻ không áp dụng vào các ngày lễ, Tết, suất chiếu đặc biệt, suất chiếu sớm và định dạng phim IMAX.`,
    other3: `- Không áp dụng cùng các chương trình khuyến mãi khác.`,
  },
  {
    id: "d_13",
    name: "NĂNG LƯỢNG TRÀN ĐẦY - NHẬN NGAY TÚI HOT",
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/N_0-350x495.jpg",
    date: "Từ ngày 25/11 - 11/12/2022 hoặc đến khi hết quà tặng",
    content1:
      "- Khách hàng mua 01 Milo Premium Combo sẽ được tặng 01 Túi Milo Eco Friendly.",
    content2:
      "- 01 Milo Premium Combo (109K) gồm 02 Milo Active 01 Bắp Mix 44Oz.",
    content3: "",
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội.",
    object1: "- Tất cả khách hàng.",
    object2: "",
    object3: "",
    other1: `- Áp dụng cho các giao dịch trực tuyến và giao dịch tại quầy.`,
    other2: `- Số lượng quà tặng có hạn. Chương trình có thể kết thúc sớm khi hết quà tặng.`,
    other3: `- Không áp dụng chương trình đối với Vé 0Đ, Voucher 0Đ từ đối tác, CGVian, Thẻ CJ Membership, sử dụng điểm thưởng CGV quy đổi vé 0Đ và các CTKM giảm giá riêng của các ứng 
    dụng thanh toán điện tử như Zalo Pay, MoMo,.. và các ứng dụng ngân hàng.`,
  },
];

const news_detail = [
  {
    id: "n_1",
    name: "BHD STAR GARDEN",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/79370240_2569712226416336_1975243523716284416_o-1.jpg",
    date: "Từ ngày 01/12/2022",
    content1:
      "- Cụm rạp thứ 10 của BHD Star Cineplex sẽ chính thức khai trương vào ngày 21/12/2019 tại Hà Nội với ưu đãi xem phim miễn phí cùng hàng ngàn chương trình khuyến mãi siêu khủng!.",
    content2: "",
    content3: "",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_2",
    name: "QUÉT MÃ QR NHANH VÀO RẠP!",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/08/BHD-Star-ScanQR-1080x793.jpg",
    date: "Từ ngày 12/08/2019",
    content1: `- Với tiêu chí GO GREEN chung tay bảo vệ môi trường của BHD Star Cineplex ☘️ chúng tôi hy vọng đóng góp nho nhỏ sẽ tạo nên kết quả to to.
    Không những tăng sự tiện lợi cũng như tiết kiệm thời gian của các bạn, BHD Star mong muốn lượng vé in ra sẽ ít hơn, đồng nghĩa với việc giảm lượng cây xanh bị đốn để sản xuất giấy tiêu dùng ?.`,
    content2: "",
    content3: "",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_3",
    name: "ỨNG DỤNG MUA VÉ MỚI",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/03/BHD-Star-APP-1920x1080-Web.jpg",
    date: "Từ ngày 01/11/2022 - 31/12/2022",
    content1:
      "- Với ứng dụng đặt vé chính thức từ BHD Star Cineplex, bạn có thể:",
    content2: "+ Đặt trước ghế đẹp mà không phải xếp hàng tại rạp.",
    content3:
      "+ Đồng bộ hóa quyền lợi thành viên, đặt trước đồ ăn thức uống với ưu đãi đến 20%.",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_4",
    name: "ĐIỂM HẸN MỚI CỦA GIỚI TRẺ",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/08/BHD-STAR-CHECK-IN-CUNG-GAU-314X420-248x330.jpg",
    date: "Từ ngày 01/12/2022",
    content1:
      "- Cụm rạp chiếu phim BHD Star 3/2 toạ lạc tại địa chỉ Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM vốn đã rất quen thuộc với giới trẻ bởi chính sách giá vé hấp dẫn..",
    content2:
      "- Với góc chụp ảnh đơn giản mà chất và một chương trình “tâm lý”, dễ hiểu vì sao rạp BHD Star 3/2 luôn được “play-dân” ưu ái lựa chọn. Thế nên, hãy thử đi và trải nghiệm điểm hẹn này ngay nhé!",
    content3: "",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_5",
    name: "THẺ THÀNH VIÊN ĐIỆN TỬ",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/07/HDSDapp.jpeg",
    date: "Từ ngày 01/11/2022 - 29/11/2022",
    content1: "- Hướng dẫn mua vé trên ứng dụng BHD Star.",
    content2: "",
    content3: "",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_6",
    name: "BHD STAR HUẾ",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHD-Star-HUE-KhaiTruong-Teasing-710x320-1.jpg",
    date: "Từ ngày 01/12/2022",
    content1: `- Thành Phố Huế là điểm hẹn du lịch nổi tiếng trong và ngoài nước, chính vì thế nhu cầu vui chơi, giải trí của du khách và cả người dân Cố Đô cũng rất cao và đa dạng. Nắm bắt và thấu hiểu được điều này, 
    BHD Star sẽ chính thức khai trương rạp chiếu phim đầu tiên của mình tại mảnh đất mộng mơ sau chuỗi các rạp phim tại TPHCM và Hà Nội.`,
    content2:
      "- BHD Star Huế sẽ “chào làng” vào ngày 19/5/2018, tại địa chỉ Vincom Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế.",
    content3:
      "- Với mong muốn trở thành điểm giải trí hấp dẫn mới cho khán giả Huế, BHD Star Huế còn sẵn sàng nhiều cơn bão khuyến mãi siêu hấp dẫn và sự kiện khai trương đặc sắc chờ đón khán giả “phá đảo”.",
    address: "Các cụm rạp BHD tại Huế.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_7",
    name: "ĐƯỜNG DÂY NÓNG BHD STAR",
    img: "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg",
    date: "Từ ngày 01/12/2022",
    content1:
      "- Từ ngày 15.10.2017, Đường Dây Nóng của BHD Star chính thức hoạt động. Các khách hàng thân thiết của BHD Star sẽ có thêm kênh thông tin để cập nhật tin tức, giải đáp thắc mắc một cách nhanh chóng và dễ dàng nhất.",
    content2:
      "- Bao điều thắc mắc không biết giải bày cùng ai, hãy gọi ngay số: 1900 2099 để được tư vấn nhanh chóng nhất.",
    content3: "",
    address: "Các cụm rạp BHD trên toàn quốc.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
  {
    id: "n_8",
    name: "BHD STAR PHẠM NGỌC THẠCH",
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/11/BHDSTAR-HA-NOI-KHAI-TRUONG-248x330.png",
    date: "Từ ngày 03/11/2016",
    content1:
      "- Bắt đầu từ 02/11/2016, BHD Star chính thức khai trương cụm rạp đầu tiên tại Hà Nội: BHD STAR VINCOM PHẠM NGỌC THẠCH, tầng 8 TTTM Vincom, số 2 Phạm Ngọc Thạch, Đống Đa, Hà Nội.",
    content2:
      "- Nhân dịp khai trương, BHD Star Vincom Phạm Ngọc Thạch mang đến cho khán giả nhiều chương trình khuyến mãi hấp dẫn: Xem phim Miễn Phí, Phim Bom Tấn giá chỉ 30K, Thăng hạng nhanh chưa từng có, Du lịch Châu Á…",
    content3: "",
    address: "Rạp BHD Phạm Ngọc Thạch.",
    object1: "- Tất cả khách hàng.",
    object2: "",
  },
];

export const NewsDetail = () => {
  const params = useParams();
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full h-850px bg-white">
        <div className="w-[980px] h-[850px] mx-auto bg-white">
          {deal_detail.map((item) => {
            if (item.id === params.id) {
              return (
                <div>
                  <div className="py-[30px]">
                    <h2 className="text-[22px] text-[#e71a0f] font-[500] my-[0]">
                      {item.name}
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      className="w-[350px] h-fit mr-[30px]"
                      src={item.img}
                      alt=""
                    />
                    <div className="">
                      <p className="text-[16px]">
                        <b>1. Thời gian áp dụng: </b>
                        {item.date}
                      </p>
                      <p className="text-[16px] mb-[0]">
                        <b>
                          2. Nội dung chương trình: <br />
                        </b>
                        {item.content1}
                      </p>
                      <p className="text-[16px] mb-[0]">{item.content2}</p>
                      <p className="text-[16px]">{item.content3}</p>
                      <p className="text-[16px]">
                        <b>3. Địa điểm áp dụng: </b>
                        {item.address}
                      </p>
                      <p className="text-[16px] mb-[0]">
                        <b>
                          4. Đối tượng khuyến mại: <br />
                        </b>
                        {item.object1}
                      </p>
                      <p className="text-[16px] mb-[0]">{item.object2}</p>
                      <p className="text-[16px]">{item.object3}</p>
                      <p className="text-[16px] mb-[0]">
                        <b>
                          5. Quy định khác: <br />
                        </b>
                        {item.other1}
                      </p>
                      <p className="text-[16px] mb-[0]">{item.other2}</p>
                      <p className="text-[16px] mb-[0]">{item.other3}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          ;
          {news_detail.map((item) => {
            if (item.id === params.id) {
              return (
                <div>
                  <div className="py-[30px]">
                    <h2 className="text-[22px] text-[#e71a0f] font-[500] my-[0]">
                      {item.name}
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      className="w-[350px] h-fit mr-[30px]"
                      src={item.img}
                      alt=""
                    />
                    <div className="">
                      <p className="text-[16px]">
                        <b>1. Thời gian áp dụng: </b>
                        {item.date}
                      </p>
                      <p className="text-[16px] mb-[0]">
                        <b>
                          2. Nội dung chương trình: <br />
                        </b>
                        {item.content1}
                      </p>
                      <p className="text-[16px] mb-[0]">{item.content2}</p>
                      <p className="text-[16px]">{item.content3}</p>
                      <p className="text-[16px]">
                        <b>3. Địa điểm áp dụng: </b>
                        {item.address}
                      </p>
                      <p className="text-[16px] mb-[0]">
                        <b>
                          4. Đối tượng khuyến mại: <br />
                        </b>
                        {item.object1}
                      </p>
                      <p className="text-[16px] mb-[0]">{item.object2}</p>
                      <p className="text-[16px]">{item.object3}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          ;
        </div>
      </div>
    </Layout>
  );
};
