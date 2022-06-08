import React from 'react';
import Header from "../../component/header/Header";
import Image from "../../component/Image/Image";
import CardSlider from "../../component/cardSlider";
import MovieSlider from "../../component/movieSlider";

const twitter =  require("../../assets/img/img_icon01.svg")
const instagram =  require("../../assets/img/img_icon02.svg")

const about1 = require("../../assets/img/icon/img_icon01.svg")
const about2 = require("../../assets/img/icon/img_icon02.svg")
const about3 = require("../../assets/img/icon/img_icon03.svg")

const support1 = require("../../assets/img/icon/img_icon04.svg")
const support2 = require("../../assets/img/icon/img_icon05.svg")
const support3 = require("../../assets/img/icon/img_icon06.svg")

const event = require("../../assets/img/icon/img_icon07.svg")

const events1 = require("../../assets/img/img_event01.jpg")
const events2 = require("../../assets/img/img_event02.jpg")
const events3 = require("../../assets/img/img_event03.jpg")
const events4 = require("../../assets/img/img_event04.jpg")


const FrontTop = () => {
    return (
        <div className="App">
            <Header />
            <div id="slider-wrap">
                <CardSlider />
                <div className="mask"></div>
                <div className="title-area">
                    <h2>Connect with us at events</h2>
                    <h3>イベントで繋がる、イベントで輪を広げる</h3>
                </div>
            </div>

            <div id="pre-section" className="mt-2">
                <div className="center-line"></div>
                <p><span>N</span>ext About</p>
            </div>

            <section id="section1">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>やってみたいから、やってみようへ</h2>
                    <p>Let's try it</p>
                </div>

                <div className="about-area">
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd className="mb-2">1.全会員本人確認済み！</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about2} /></dt>
                        <dd className="mb-2">2.事前決済システム導入！</dd>
                        <dd>イベントアプリ（仮）では、イベント参加時に事前に登録した方法にて決済をいただくシステムを導入しております。現地でのお金のやりとりをなくし
                        スムーズな運用ができます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about3} /></dt>
                        <dd className="mb-2">3.QRコードで楽々イベント運営！</dd>
                        <dd>イベントアプリ（仮）では、イベント運営に便利なQRコードでの来場者管理が行えます。手間な受付業務などをスキップすることができます。</dd>
                    </dl>
                </div>
            </section>

            <div id="result-area">
                <div id="result-message">
                    <h3>今日からできるイベント運営！</h3>
                    <Image path={event} />
                    <p>イベントアプリ（仮）では、主催者様、来場者様共にスムーズで快適なイベントのお手伝いをいたします。</p>
                </div>
            </div>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext Events</p>
            </div>

            <section id="section2">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>現在注目のイベント</h2>
                    <p>Pickup Events</p>
                </div>

                <div>
                {/*    ４列×2  */}
                    <ul className="event-area">
                       <li>
                           <Image path={events1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                       </li>
                        <li>
                            <Image path={events2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events3} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events4} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events4} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events3} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={events1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                <button>自分にあったイベントを探す　→　</button>
            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext Support</p>
            </div>

            {/*背景色変更する*/}
            <section id="section3">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>充実のサポート</h2>
                    <p>Support</p>
                </div>

                <div className="service-area">
                    <dl>
                        <dt><Image path={support1} /></dt>
                        <dd className="mb-2">1.事前相談サービス</dd>
                        <dd>イベントアプリ（仮）では、初めてのお客様にも不安なくご使用頂くために、イベント開催に向けた
                        事前相談サービスを行っております。
                        お気軽にチャットまたは、お問い合わせフォームよりご連絡ください。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={support2} /></dt>
                        <dd className="mb-2">2.イベント分析サービス</dd>
                        <dd>イベントアプリ（仮）では、一目でわかるようにイベントの結果を閲覧できるようにいたします。
                            次回開催に向けた、改善ポイントを見つけることできます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={support3} /></dt>
                        <dd className="mb-2">3.運営立ち会いサービス</dd>
                        <dd>イベントアプリ（仮）では、運営の進行に不安がある方に対し、別途有料サービスにて当日立ち会いサービスを
                        行っております。時間、場所、条件によって異なりますのでお気軽にチャットまたは、お問い合わせフォームよりご連絡ください。</dd>
                    </dl>
                </div>

            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext Creators</p>
            </div>

            <section id="section4">
                {/*丸の背景いれる*/}
                <div className="wrapper">
                    <div className="section-title-area">
                        <h2>ユーザ制作実績</h2>
                        <p>User Creators</p>
                    </div>

                    {/*わしの動画でもスライドショーでいれとく*/}
                    <MovieSlider />

                </div>
            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext News</p>
            </div>

            <section id="section5">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>お知らせ</h2>
                    <p>News</p>
                </div>

                {/*新着情報など*/}
                <ul>
                    <li>2022/04/01 <span>NEWS</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>RELEASE</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>PICKUP</span> ホームページを開設しました。</li>
                </ul>
            </section>

            <footer className="mt-8">
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
                        <p>© 2022 いべこね！</p>
                        <p><Image path={twitter} /></p>
                        <p><Image path={instagram} /></p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default FrontTop;
