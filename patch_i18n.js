const fs = require('fs');
const path = require('path');

const viPath = path.resolve('messages/vi.json');
const enPath = path.resolve('messages/en.json');
const zhPath = path.resolve('messages/zh.json');

const vi = JSON.parse(fs.readFileSync(viPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

function addKeys(data, isVi, isZh) {
  data.Community = data.Community || {};
  Object.assign(data.Community, {
    tour_pre: isVi ? "GIẢI ĐẤU" : (isZh ? "赛事" : "GLORIOUS"),
    tour_suf: isVi ? "HÀO HÙNG" : (isZh ? "荣耀" : "TOURNAMENT"),
    sched_pre: isVi ? "Lịch Thi Đấu" : (isZh ? "赛事日程" : "Tournament"),
    sched_suf: isVi ? "Sắp Tới" : (isZh ? "即将开始" : "Schedule"),
    join_pre: isVi ? "Tham Gia" : (isZh ? "加入" : "Join The"),
    join_suf: isVi ? "Chiến Tuyến" : (isZh ? "战线" : "Frontline"),
    btn_register_tour: isVi ? "ĐĂNG KÝ THAM CHIẾN" : (isZh ? "报名参战" : "REGISTER NOW")
  });

  data.Admin = data.Admin || {};
  Object.assign(data.Admin, {
    btn_create_new: isVi ? "BÀI VIẾT MỚI" : (isZh ? "新建文章" : "NEW ARTICLE"),
    btn_cancel: isVi ? "Hủy / Trở về" : (isZh ? "取消 / 返回" : "Cancel / Back")
  });

  data.Auth = data.Auth || {};
  data.Auth.help = isVi ? "TRỢ GIÚP" : (isZh ? "帮助" : "HELP");

  data.Verify = data.Verify || {};
  data.Verify.btn_login_now = isVi ? "ĐĂNG NHẬP NGAY" : (isZh ? "立即登录" : "LOGIN NOW");
}

addKeys(vi, true, false);
addKeys(en, false, false);
addKeys(zh, false, true);

fs.writeFileSync(viPath, JSON.stringify(vi, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2));

console.log('JSON keys updated successfully!');
