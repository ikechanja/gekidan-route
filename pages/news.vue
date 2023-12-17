<template>
    <Header />
    <section class="news-wrapper">
        <div class="container">
            <h1 class="center">NEWS</h1>
            
            <div class="article-parent">
                <div class="article-list contents" v-for="{ _path: slug, title, thumbnail } in blogPosts" :key="slug">
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
        </div>
    </section>
    <Footer />
</template>
<script setup lang="ts">
const blogPosts = await queryContent('/news')
    .sort({ createdAt: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .limit(48)
    .find();
</script>
