// Vietnamese release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Mười theme mới, sáng và tối: Fern, Tide, Blossom, Dune và Graphite.',
    'Đồ thị commit đọc giống bản đồ hơn: một dải màu của branch chạy từ nhãn, xuyên qua đồ thị tới message commit, và branch tạo từ branch đang checkout sẽ nằm thẳng hàng với nó, kể cả khi dài nhiều commit.',
    'Commit đang checkout dễ nhận ra: vòng đôi quanh avatar và một dải đậm hơn chạy ngang dòng.',
    'Kéo một branch thả lên branch khác luôn thao tác trên branch bạn kéo, bất kể branch nào đang checkout: *Fast-forward f tới develop* khi f đi sau, *Rebase f lên develop*, *Merge f vào develop* (ẩn khi không có gì để merge).',
    'Menu branch ghi rõ sẽ xoá gì: *Xoá branch local “f”*, hoặc *Xoá “f” và “origin/f”* khi có upstream. Tên được đặt trong ngoặc kép nên tên ngắn không còn trông như bị cắt.',
    'Danh sách nhãn mở ra khi rê chuột lên dòng có nhiều branch có đủ menu chuột phải cho từng branch.',
    'Hộp xác nhận Xoá, Force push và các thao tác phá huỷ khác có nút màu đỏ.',
    'Bấm vào khoảng dưới dòng cuối của đồ thị vẫn giữ commit đang chọn; số file thay đổi vẫn đọc được trong panel hẹp.',
    'File chưa stage và đã stage cuộn trong panel riêng, header được ghim; diff đang mở đi theo file khi bạn stage hoặc unstage nó, và commit từ đó sẽ mở commit mới.',
    'Nút đóng diff nằm ở đầu bên phải, dễ bấm hơn.',
    'Keychain không chịu trả token đã lưu không còn khiến tài khoản bị đánh dấu là đã đăng xuất.',
  ],
  '1.0.2': [
    'Bản xem trước dữ liệu AI hiển thị dạng văn bản: chỉ dẫn cho AI và yêu cầu của bạn với ngắt dòng thật, phần bị che được đánh dấu, model và giới hạn nằm trên một dòng. Công tắc Dễ đọc / JSON vẫn cho xem nguyên văn yêu cầu.',
  ],
  '1.0.1': [
    'Đóng cửa sổ cuối cùng giờ chỉ ẩn nó: bấm biểu tượng trên Dock là cửa sổ quay lại ngay, giữ nguyên tab, đồ thị và terminal, thay vì tải lại mọi repository.',
    'Sửa lỗi: khi cửa sổ đã thật sự bị đóng, bấm biểu tượng trên Dock lại mở ra trang bắt đầu trống thay vì các repository của bạn.',
    'Pull request không còn báo GitHub từ chối thông tin đăng nhập đã lưu khi tài khoản mặc định của repository có token hết hạn nhưng tài khoản khác vẫn dùng được: tài khoản đó được bỏ qua lặng lẽ, và tài khoản cần đăng nhập không còn được chọn mặc định.',
    'Token chỉ được đọc từ Keychain một lần, nên Keychain đang bận không còn trông như đăng nhập bị từ chối.',
    'Dấu ⚠ cạnh branch có upstream đã bị xoá trên remote tự giải thích khi rê chuột lên, và cho biết cần làm gì.',
  ],
  '1.0.0': [
    'Bản phát hành công khai đầu tiên. Chưa được notarize: lần mở đầu tiên macOS sẽ hỏi — Cài đặt hệ thống ▸ Quyền riêng tư & bảo mật ▸ Vẫn mở. Các bản sau sẽ đến qua trình cập nhật riêng của app.',
    'Đồ thị commit cho repository lớn (hơn 100k commit), chi tiết commit và diff (song song hoặc gộp, theo từng từ), lịch sử file và blame.',
    'Stage theo file, hunk hoặc dòng; commit với amend, sign-off, ký (GPG/SSH), đồng tác giả và quy ước của team.',
    'Branch và tag, fetch / pull / push có theo dõi upstream, stash, hoàn tác và làm lại cho hầu hết thao tác.',
    'Merge, rebase, cherry-pick và revert bằng kéo thả trên đồ thị; rebase tương tác; trình giải xung đột ba chiều.',
    'Tab, nhiều cửa sổ, profile — mỗi profile giữ tab, repository gần đây và danh tính commit riêng.',
    'Tài khoản SSH tự chọn đúng key cho từng repository; đăng nhập GitHub và GitLab cho pull request, issue, review và Actions.',
    'Terminal tích hợp, trình sửa file, tìm kiếm và bộ lọc, worktree, submodule, bisect, khôi phục qua reflog, Git LFS.',
    'AI viết commit message và giải thích bằng nhà cung cấp của riêng bạn; MCP server để công cụ khác điều khiển GitLoom.',
    'Tuỳ biến theme, bố cục và bàn phím; 16 ngôn ngữ.',
  ],
};
export default notes;
