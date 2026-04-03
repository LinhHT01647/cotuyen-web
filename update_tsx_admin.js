const fs = require('fs');

// Replace in Group 5: admin/news/page.tsx
const pathAdminNews = 'src/app/[locale]/admin/news/page.tsx';
let contentAdminNews = fs.readFileSync(pathAdminNews, 'utf8');
if (!contentAdminNews.includes("useTranslations('Admin')")) {
  contentAdminNews = contentAdminNews.replace('export default function AdminNewsPage() {', 'import { useTranslations } from "next-intl";\nexport default function AdminNewsPage() {\n  const t = useTranslations(\'Admin\');');
}
const repAdmin = {
  '"Không thể tải danh sách bài viết từ Backend."': "t('err_fetch')",
  '"Lỗi mạng: "': "`${t('err_net')} `",
  '`Bạn có chắc chắn muốn xóa bài viết "${title}" vĩnh viễn không?`': "t('confirm_del')",
  '"Xóa thành công!"': "t('del_success')",
  'data.message || data.error || "Lỗi khi xóa bài viết"': "data.message || data.error || t('del_fail')",
  '"Lỗi kết nối: "': "`${t('err_net')} `",
  '>Đang kiểm tra quyền hạn...<': '>{t(\'checking_auth\')}<',
  'Khu Vực Quản Trị': '{t(\'dashboard\')}',
  'QUẢN LÝ TIN TỨC / SỰ KIỆN': '{t(\'manage_news\')}',
  '>BÀI VIẾT MỚI<': '>{t(\'new_post\')}<',
  '>BÀI VIẾT<': '>{t(\'col_post\')}<',
  '>PHÂN LOẠI<': '>{t(\'col_type\')}<',
  '>NGÀY ĐĂNG<': '>{t(\'col_date\')}<',
  '>TÁC GIẢ<': '>{t(\'col_author\')}<',
  '>THAO TÁC<': '>{t(\'col_action\')}<',
  '>Đang tải danh sách bài viết...<': '>{t(\'loading_list\')}<',
  '>Chưa có bài viết nào được đăng tải.<': '>{t(\'empty_list\')}<',
  'title="Xem trên trang"': 'title={t(\'view\')}',
  'title="Chỉnh sửa"': 'title={t(\'edit\')}',
  'title="Xóa bài viết"': 'title={t(\'delete\')}'
};
for (const [key, value] of Object.entries(repAdmin)) {
  contentAdminNews = contentAdminNews.split(key).join(value);
}
fs.writeFileSync(pathAdminNews, contentAdminNews);


// Replace in Group 5: admin/news/edit/[id]/page.tsx
const pathAdminEditId = 'src/app/[locale]/admin/news/edit/[id]/page.tsx';
let contentAdminEditId = fs.readFileSync(pathAdminEditId, 'utf8');
if (!contentAdminEditId.includes("useTranslations('Admin')")) {
  contentAdminEditId = contentAdminEditId.replace('export default function EditNewsPage', 'import { useTranslations } from "next-intl";\nexport default function EditNewsPage');
  contentAdminEditId = contentAdminEditId.replace('  const params = useParams();', '  const params = useParams();\n  const t = useTranslations(\'Admin\');');
}
contentAdminEditId = contentAdminEditId.replace(/ĐANG KẾT NỐI HỒ SƠ TỪ TIỀN TUYẾN\.\.\./g, '{t(\'connecting\')}');
fs.writeFileSync(pathAdminEditId, contentAdminEditId);


// Replace in Group 5: admin/news/NewsForm.tsx
const pathForm = 'src/app/[locale]/admin/news/NewsForm.tsx';
let contentForm = fs.readFileSync(pathForm, 'utf8');
if (!contentForm.includes("useTranslations('Admin')")) {
  contentForm = contentForm.replace('export default function NewsForm({', 'import { useTranslations } from "next-intl";\nexport default function NewsForm({');
  contentForm = contentForm.replace('  const [title, setTitle] = useState', '  const t = useTranslations(\'Admin\');\n  const [title, setTitle] = useState');
}
const repForm = {
  '"Gặp lỗi kết nối tự máy chủ. Không thể lưu bài viết."': "t('err_save')",
  '"Cập nhật bài viết thành công!"': "t('save_success_edit')",
  '"Đăng bài viết mới thành công!"': "t('save_success_new')",
  '"Lỗi mạng hoặc không thể kết nối tới Backend."': "t('err_save')",
  '>Đang kiểm tra quyền hạn...<': '>{t(\'checking_auth\')}<',
  '>1. THÔNG TIN CHUNG<': '>{t(\'sec_general\')}<',
  '>Phân loại Tag<': '>{t(\'lbl_tag\')}<',
  '>TIN TỨC BÌNH THƯỜNG (NEWS)<': '>{t(\'type_news\')}<',
  '>SỰ KIỆN QUAN TRỌNG (EVENT)<': '>{t(\'type_event\')}<',
  '>Ảnh Đại Diện (URL)<': '>{t(\'lbl_img\')}<',
  '>Hiển thị công khai với mọi người (Published)<': '>{t(\'lbl_pub\')}<',
  '>2. NỘI DUNG ĐA NGÔN NGỮ (I18N)<': '>{t(\'sec_i18n\')}<',
  '"🇻🇳 TIẾNG VIỆT"': 't(\'lbl_vi\')',
  '"🇬🇧 HIỂN THỊ QUỐC TẾ (ENGLISH)"': 't(\'lbl_en\')',
  '"🇨🇳 TIẾNG TRUNG"': 't(\'lbl_zh\')',
  'Tiêu đề <span': '{t(\'lbl_title\')} <span',
  '`Nhập tiêu đề (${activeTab.toUpperCase()})...`': '`${t(\'ph_title\')} (${activeTab.toUpperCase()})...`',
  'Thân bài viết (Hỗ trợ HTML/iframe) <span': '{t(\'lbl_body\')} <span',
  '`<p>Chi tiết bài viết ngôn ngữ ${activeTab.toUpperCase()}...</p>`': '`<p>${t(\'ph_body\')} ${activeTab.toUpperCase()}...</p>`',
  '>Hủy / Trở về<': '>{t(\'btn_cancel\')}<',
  '"ĐANG XỬ LÝ..."': "t('btn_saving')",
  '"☑ LƯU THAY ĐỔI"': "t('btn_save_edit')",
  '"🚀 ĐĂNG TẢI LÊN MẶT TRẬN"': "t('btn_save_new')",
  'isEdit ? "✏️ CHỈNH SỬA BÀI VIẾT" : "⚔ ĐĂNG TẢI LÊN MẶT TRẬN"': 'isEdit ? t(\'lbl_edit\') : t(\'lbl_new\')'
};
for (const [key, value] of Object.entries(repForm)) {
  contentForm = contentForm.split(key).join(value);
}
fs.writeFileSync(pathForm, contentForm);
