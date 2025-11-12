"use client";
import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sitemap from "@/components/Sitemap";

export default function TaskLayout({ children }) {

    return (
        <>
            <Header />
            <div className="product">
                <section className="top">
                    <div className="top-img">
                        <Image
                            width={100}
                            height={100}
                            src="/assets/images/top-img.png"
                            alt=""
                        />
                        <Image
                            width={100}
                            height={100}
                            src="/assets/images/top-img02.png"
                            className="sp"
                            alt=""
                        />
                    </div>
                    <img src="/assets/images/logo.svg" className="top-logo-img" alt="" />
                    <p className="top-text1">
                        ロイヤルジャパン
                        <br />
                        公式オンラインショッピング
                    </p>
                    <p className="top-text2">愛の証を超濃厚に、超濃密に</p>
                    <p className="top-text3">ふたりだけの夜をもっと愉しむために</p>
                </section>
                <section >
                    <div className="min-h-[50vh]"
                    >
                        {children}
                    </div>
                    {/* <div className="contain">
                        <div className="wrap">
                            <div className="site-part">
                                <div className="site-part-thumb">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/site01.png"
                                        alt=""
                                    />
                                </div>
                                <h3 className="site-part-title">
                                    大自然の恵み”トンカットアリ” <br />
                                    製造している製品の含有成分は７種類の自然成分です。
                                </h3>
                            </div>
                            <div className="site-part">
                                <div className="site-part-thumb">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/site02.png"
                                        alt=""
                                    />
                                </div>
                                <h3 className="site-part-title">
                                    私たちはETUMAX社マレーシアで純正ロイヤルハニーを
                                    <br />
                                    製造しているため、安心の販売実績があります。
                                </h3>
                            </div>
                            <div className="site-part">
                                <div className="site-part-thumb">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/site03.png"
                                        alt=""
                                    />
                                </div>
                                <h3 className="site-part-title">
                                    円満な夫婦・恋人との夜の性生活に <br />
                                    天然の性欲増強剤です。愛を深める秘密の秘薬できっかけを
                                </h3>
                            </div>
                        </div>
                        <a href="" className="site-link">
                            <p>当サイトについて</p>
                            <span></span>
                        </a>
                    </div> */}
                </section>
                {/* <section className="list">
                    <div className="list-title">全ての商品</div>
                    <div className="contain">
                        {products.map((item, index) => (
                            <div className="list-item" key={index}>
                                <div className="list-item-thumb">
                                    <Image width={300} height={300} src={item.image} alt="" />
                                </div>
                                <h3 className="list-item-title">{item.title}</h3>
                                <div className="list-item-package">{item.package}</div>
                                <p className="list-item-content">{item.description}</p>
                                <div className="list-item-price">
                                    <div className="wrap">
                                        <div className="list-item-price-title">特別限定価格</div>
                                        <p>
                                            {parseInt(item.price_sell)
                                                .toLocaleString("en-US")
                                                .toString()}{" "}
                                            <span>(税込)</span>
                                        </p>
                                    </div>
                                    <a href={`/products/${id}/${item.id}`}>今すぐ購入する</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section> */}
                <section className="social">
                    <div className="contain">
                        <div className="social-part">
                            <div className="social-left">
                                <div className="social-title">
                                    <p>Twitter</p>
                                    <p>
                                        <img src="/assets/images/icon-instagram.png" alt="" />
                                        <span>Instagram</span>
                                    </p>
                                </div>
                                <div className="social-left-title">
                                    フォロー&投稿
                                    <br />
                                    プレゼントキャンペーン
                                </div>
                            </div>
                            <div className="social-right">
                                <img src="/assets/images/twitter-thumb.png" alt="" />
                                <p>9,800円相当をプレゼント！</p>
                            </div>
                        </div>
                        <div className="social-part">
                            <div className="social-top">
                                <div className="social-title">
                                    <p>
                                        <span>LINE</span>の<br />
                                        友達追加で
                                    </p>
                                </div>
                                <div className="social-top-title">
                                    <p>今すぐ使える</p>
                                    <div className="social-top-perc">
                                        ¥500 OFF
                                        <br />
                                        クーポンゲット!
                                    </div>
                                </div>
                                <a href="" className="line-btn">
                                    <img src="/assets/images/line.png" alt="" />
                                    <p>友だち追加はこちら</p>
                                </a>
                            </div>
                            <div className="social-bottom">
                                <p>最新情報やお得なクーポンをLINEでお届けします♫</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="others">
                    <div className="contain">
                        <div className="others-item">
                            <div className="others-item-left">
                                <img src="/assets/images/people-line-solid.svg" alt="" />
                            </div>
                            <div className="others-item-right">
                                <h3 className="others-item-title">取扱について</h3>
                                <p>
                                    クレジットカード決済がご利用可能になりました。平素よりVITAMAX公式通販ショップをご利用頂き、誠に有難うございます。
                                    この
                                </p>
                            </div>
                        </div>
                        <div className="others-item">
                            <div className="others-item-left">
                                <img src="/assets/images/cart-arrow-down-solid.svg" alt="" />
                            </div>
                            <div className="others-item-right">
                                <h3 className="others-item-title">定期購入</h3>
                                <p>
                                    クレジットカード決済がご利用可能になりました。平素よりVITAMAX公式通販ショップをご利用頂き、誠に有難うございます。
                                    この
                                </p>
                            </div>
                        </div>
                        <div className="others-item">
                            <div className="others-item-left">
                                <img src="/assets/images/headset-solid.svg" alt="" />
                            </div>
                            <div className="others-item-right">
                                <h3 className="others-item-title">サポート</h3>
                                <p>
                                    クレジットカード決済がご利用可能になりました。平素よりVITAMAX公式通販ショップをご利用頂き、誠に有難うございます。
                                    この
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <Sitemap />
        </>
    );
}