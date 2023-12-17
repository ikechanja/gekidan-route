<template>
  <Header />
  <article>
    <div class="container">
      <div class="inner article-inner">
        <ContentDoc v-slot="{ doc }">
          <h1 class="center article-title">{{ doc.title }}</h1>
        </ContentDoc>
        <ContentDoc v-slot="{ doc }">
          <img class="article-image" :src="doc.thumbnail" />
        </ContentDoc>
        <ContentDoc v-slot="{ doc }">
          <p>作成日：{{ doc.createdAt }}</p>
        </ContentDoc>
        <div class="article-wrapper">
          <ContentDoc />
        </div>
      </div>
    </div>
  </article>
  <Footer />
</template>