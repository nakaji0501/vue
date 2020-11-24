const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;
const cors = require('cors')({origin: true});

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレート
const adminContents = data => {
  return `Vuefolioからご連絡いただきました

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.contents}
`;
};

// cors(data, context, () => {
exports.sendMail = functions.https.onCall(async (data, context) => {

  // メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "Vuefolioから連絡",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
   } catch (e) {
    console.error(`send failed. ${e}`);
    throw new functions.https.HttpsError('internal', 'send failed');
   }
// });
});