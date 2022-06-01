import React from 'react';
import Header from "../../component/header/Header";
import Image from "../../component/Image/Image";
import CardSlider from "../../component/cardSlider";
import MovieSlider from "../../component/movieSlider";

const about1 = require("../../assets/img/img_about01.png")

const twitter =  require("../../assets/img/img_icon01.svg")
const instagram =  require("../../assets/img/img_icon02.svg")


const FrontTop = () => {
    return (
        <div className="App">
            <Header />
            <div id="slider-wrap">
                <CardSlider />
                <div className="mask"></div>
                <div className="title-area">
                    <h2>Appreciate the moment.</h2>
                    <h3>この瞬間に感謝せよ。</h3>
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
                    <p>サブタイトル</p>
                </div>

                <div className="d-flex between">
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                </div>

                <div id="result-message">
                    <h3>結論付けた言葉</h3>
                    <p>ダメ押しのキャッチコピー、一言文など</p>
                </div>
            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext About</p>
            </div>

            <section id="section2">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>実際に開かれているイベントなど</h2>
                    <p>なんかいい感じの文言</p>
                </div>

                <div>
                {/*    ４列×2  */}
                    <ul className="d-flex between">
                       <li>
                           <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                       </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
                            <dl>
                                <dt>イベントタイトル</dt>
                                <dd>日時： 2022/04/01</dd>
                                <dd>参加人数：10人</dd>
                                <dd>場所：大阪府近郊</dd>
                            </dl>
                        </li>
                        <li>
                            <Image path={about1} />
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
                <p><span>N</span>ext About</p>
            </div>

            {/*背景色変更する*/}
            <section id="section3">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>サポート内容</h2>
                    <p>サブタイトル</p>
                </div>

                <div className="d-flex between">
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                    <dl>
                        <dt><Image path={about1} /></dt>
                        <dd>1.全会員本人確認済み</dd>
                        <dd>イベントアプリ（仮）では、登録時に全会員様の身分証確認を実施しておりますので、万が一の場合にも安全にご利用いただけます。</dd>
                    </dl>
                </div>

            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext About</p>
            </div>

            <section id="section4">
                {/*丸の背景いれる*/}
                <div className="wrapper">
                    <div className="section-title-area">
                        <h2>Users Movies</h2>
                        <p>サブタイトル</p>
                    </div>

                    {/*わしの動画でもスライドショーでいれとく*/}
                    <MovieSlider />

                </div>
            </section>

            <div id="pre-section" className="mt-5">
                <div className="center-line"></div>
                <p><span>N</span>ext About</p>
            </div>

            <section id="section5">
                {/*丸の背景いれる*/}
                <div className="section-title-area">
                    <h2>News</h2>
                    <p>サブタイトル</p>
                </div>

                {/*新着情報など*/}
                <ul>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
                    <li>2022/04/01 <span>カテゴリ</span> ホームページを開設しました。</li>
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
