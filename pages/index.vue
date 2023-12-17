<template>
    <Header />
    <div class="container top-wrapper-inner">
        <section class="top-wrapper">
            <img class="top-wrapper-img" src="/_nuxt/assets/img/top-wrapper.jpg">
            <div class="bg-black top-bg-black">
                <div>
                    <h1 class="top-impact-1">物語はいつもここから。</h1>
                    <h1 class="top-impact-2">非日常へようこそ。</h1>
                    <h2 class="top-impact-3">劇団ルート</h2>
                </div>
            </div>
            <div class="top-stars">
                <div class="star-square">
                </div>
                <div class="star-moji">
                    <p>今年の公演は終了しました！<br>ありがとうございました！</p>
                </div>
            </div>
        </section>
    </div>
    <section class="top-kouen">
        <div class="sp-top-message">
            <div class="container">
                <h1 class="center">物語はいつもここから。</h1>
                <h1 class="center">非日常へようこそ。</h1>
                <h2 class="right">劇団ルート</h2>
                <div class="star-sp">
                    <div>
                        <div class="star-square2">
                        </div>
                        <div class="star-moji2">
                            <p>今年の公演は終了しました！<br>ありがとうございました！</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-kouen-middle">
            <div class="container">
                <div class="top-kouen-inner">
                    <img class="top-kouen-img" src="/_nuxt/assets/img/kouen/2023/1.jpg">
                    <div class="top-kouen-info">
                            <div>
                            <h1 class="center">俺たちは決して<br>自分自身を見放したりしないんだよ…！</h1>
                            <p class="center">・</p>
                            <p class="center">・</p>
                            <p class="center">・</p>
                            <p class="center">数年ぶりにエジプトに戻ってきた元海賊たち。<br>
                                しかし、着いた途端にまたしてもトラブルに！<br>
                                「俺達、いつになったら幸せになれるの？」<br>
                                その問いの答えは意外なところに。<br>
                                猫たちがどうして人間のように喋れるかが解き明かされる第3弾！
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="slider">
        <div><img src="/_nuxt/assets/img/slider/1.jpg" alt="" /></div>
        <div><img src="/_nuxt/assets/img/slider/2.jpg" alt="" /></div>
        <div><img src="/_nuxt/assets/img/slider/3.jpg" alt="" /></div>
        <div><img src="/_nuxt/assets/img/slider/4.jpg" alt="" /></div>
        <div><img src="/_nuxt/assets/img/slider/5.jpg" alt="" /></div>
    </div>
    <section class="top-news-wrapper">
        <div class="container">
            <h1 class="center">NEWS</h1>
            <div class="article-parent">
                <div class="article-list" v-for="{ _path: slug, title, thumbnail } in blogPosts" :key="slug">
                    <div class="center">
                        <a :href="slug">
                            <img class="profile-img" :src="thumbnail" />
                        </a>
                    </div>
                    <div class="moji-card">
                        <a class="article-title center" :href="slug">{{ title }}</a>
                    </div>
                </div>
            </div>
            <a class="top-btn-link" href="/news">NEWS一覧</a>
        </div>
    </section>
    <Footer />
</template>
<script setup lang="ts">
const blogPosts = await queryContent('/news')
    .sort({ createdAt: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .limit(3)
    .find();
</script>