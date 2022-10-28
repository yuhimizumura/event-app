import React from 'react';
import Image from "../../component/Image/Image";
const twitter =  require("../../assets/img/img_icon01.svg")
const instagram =  require("../../assets/img/img_icon02.svg")

const Footer = () => {
  return (
      <footer>
        <div className="wrap">
          <div className="footer-list">
            <ul>
              <li>SERVICE - サービス</li>
              <li><a href="#">ログイン</a></li>
              <li><a href="#">新規会員登録</a></li>
              <li><a href="#">イベント検索</a></li>
            </ul>
            <ul>
              <li>SUPPORT - サポート</li>
              <li><a href="#">運営会社</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">ご利用案内</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
          <div className="copyright">
            <p>© 2022 <span>いべこね！ </span></p>
            <p><Image path={twitter} /></p>
            <p><Image path={instagram} /></p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
