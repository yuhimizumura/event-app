import React from 'react';
import Header from "../../component/header/Header";
import Image from "../../component/Image/Image";
import SimpleSlider from "../../component/slider";
import CardSlider from "../../component/cardSlider";

const slide1 = require("../../assets/img/img_slide01.jpg")
const slide2 = require("../../assets/img/img_slide02.jpg")
const slide3 = require("../../assets/img/img_slide03.jpg")

const about1 = require("../../assets/img/img_about01.png")

const FrontTop = () => {
    return (
        <div className="App">
            <Header />
            {/*<CardSlider />*/}
            {/*<CardSlider />*/}
            <div id="slider-wrap">
                <CardSlider />
                {/*<SimpleSlider />*/}
                <div className="mask"></div>
                <div className="title-area">
                    <h2>Appreciate the moment.</h2>
                    <h3>この瞬間に感謝せよ。</h3>
                </div>
            </div>
            <section id="section1" className="mt-8">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>やってみたいから、やってみようへ</h2>
                    <p>サブタイトル</p>
                </div>

                <div className="d-flex">
                    <dl>
                        <dt>1.全会員本人確認済み</dt>
                        <dd><Image path={about1} /></dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                    <dl>
                        <dt>2.タイトル</dt>
                        <dd>画像</dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                    <dl>
                        <dt>3.タイトル</dt>
                        <dd>画像</dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                </div>

                <div>
                    <h3>結論付けた言葉</h3>
                    <p>ダメ押しのキャッチコピー、一言文など</p>
                </div>
            </section>

            <section id="section2">
                {/*丸の背景いれる*/}
                <div className="title-area">
                    <h2>実際に開かれているイベントなど</h2>
                    <p>なんかいい感じの文言</p>
                </div>

                <div className="d-flex">
                {/*    ４列×2  */}
                    <ul id="event-list">
                       <li>
                           <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                       </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={slide2} />
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

            {/*背景色変更する*/}
            <section id="section3">
                {/*丸の背景いれる*/}
                <div className="title-area">
                    <h2>サポート内容</h2>
                    <p>サブタイトル</p>
                </div>

                <div className="d-flex">
                    <dl>
                        <dt>1.タイトル</dt>
                        <dd>画像</dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                    <dl>
                        <dt>2.タイトル</dt>
                        <dd>画像</dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                    <dl>
                        <dt>3.タイトル</dt>
                        <dd>画像</dd>
                        <dd>ひとことこめんと</dd>
                    </dl>
                </div>

                <div>
                    <h3>結論付けた言葉</h3>
                    <p>ダメ押しのキャッチコピー、一言文など</p>
                </div>
            </section>

            <section id="section4">
                {/*丸の背景いれる*/}
                <div className="title-area">
                    <h2>event-app Movies</h2>
                    <p>サブタイトル</p>
                </div>

                {/*わしの動画でもスライドショーでいれとく*/}
                <div className="d-flex">
                   <div className="movie">どうが</div>
                    <div className="movie">どうが</div>
                    <div className="movie">どうが</div>
                </div>

                <div>
                    <h3>結論付けた言葉</h3>
                    <p>ダメ押しのキャッチコピー、一言文など</p>
                </div>
            </section>

            <section id="section5">
                {/*丸の背景いれる*/}
                <div className="title-area">
                    <h2>event-app Movies</h2>
                    <p>サブタイトル</p>
                </div>

                {/*新着情報など*/}
                <ul>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
                </ul>
            </section>

            <footer>
                <div className="d-flex">
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
                <div className="d-flex">
                    <p>こぴーらいと</p>
                    <p>twitter icon</p>
                    <p>insta icon</p>
                </div>
            </footer>

        </div>
    );
}

export default FrontTop;
