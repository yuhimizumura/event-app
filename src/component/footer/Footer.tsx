import React from 'react';
import Image from "../../component/Image/Image";
import SpMenuBar from "../spMenuBar/SpMenuBar";
const twitter =  require("../../assets/img/img_icon01.svg")
const instagram =  require("../../assets/img/img_icon02.svg")

type Props = {
  disp?: boolean
}

const Footer = (props:Props) => {
  let {disp} = props
  if (disp === undefined) {
    disp = true
  }
  return (
      <>
        {
          disp &&
            <SpMenuBar />
        }
        <footer>
          <div className="wrap">
            <div className="footer-list">
              <ul>
                <li>SERVICE - サービス</li>
                <li><a href="/login">ログイン/新規会員登録</a></li>
                {/*<li><a href="#login">新規会員登録</a></li>*/}
                <li><a href="#search">イベント検索</a></li>
              </ul>
              <ul>
                <li>SUPPORT - サポート</li>
                <li><a href="/company">運営会社</a></li>
                <li><a href="/privacy">プライバシーポリシー</a></li>
                <li><a href="/guide">ご利用案内</a></li>
                {/*<li><a href="/contact">お問い合わせ</a></li>*/}
              </ul>
            </div>
            <div className="copyright">
              <p>© 2022 <span>いべこね！ </span></p>
              <p><Image path={twitter} /></p>
              <p><Image path={instagram} /></p>
            </div>
          </div>
        </footer>
      </>
  );
}

export default Footer;
