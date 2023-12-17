<template>
    <div class="c-pagination-wrap">
      <ul class="c-pagination">
        <li v-if="current > 1" class="c-pagination-btn c-pagination-prev">
          <nuxt-link :to="getPath(current - 1)" class="c-pagination-btn__link">←</nuxt-link>
        </li>
        <li v-if="3 < current" class="c-pagination-item">
          <nuxt-link :to="getPath(1)" class="c-pagination-item__link">1</nuxt-link>
        </li>
        <li v-if="4 < current" class="c-pagination-omit">
          <span>...</span>
        </li>
        <li
          v-for="p in pages"
          :key="p"
          v-show="current - 2 <= p && p <= current + 2"
          class="c-pagination-item"
          :class="{ active: current === p }"
        >
          <nuxt-link :to="getPath(p)" class="c-pagination-item__link">{{ p }}</nuxt-link>
        </li>
        <li v-if="current + 3 < pages" class="c-pagination-omit">
          <span>...</span>
        </li>
        <li v-if="current + 2 < pages" class="c-pagination-item">
          <nuxt-link :to="getPath(pages)" class="c-pagination-item__link">{{ pages }}</nuxt-link>
        </li>
        <li v-if="current < pages" class="c-pagination-btn c-pagination-next">
          <nuxt-link :to="getPath(current + 1)" class="c-pagination-btn__link">→</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pages: {
        type: Number,
        required: false,
      },
      current: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: false,
      },
      tag: {
        type: String,
        required: false,
      },
    },
    data () {
      return {
        p: "",
      }
    },
    methods: {
      getPath (p) {
        if (this.category !== undefined) {
          if (p === 1) {
            return `/category/${this.category}/`;
          } else {
            return `/category/${this.category}/page/${p}/`;
          }
        } else if (this.tag !== undefined) {
          if (p === 1) {
            return `/tag/${this.tag}/`;
          } else {
            return `/tag/${this.tag}/page/${p}/`;
          }
        } else {
          if (p === 1) {
            return `/new_post/`;
          } else {
            return `/new_post/page/${p}/`;
          }
        }
      },
    },
  };
  </script>
  
  <style>
  .c-pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .c-pagination li {
    list-style: none;
  }
  .c-pagination li:not(:first-child) {
    margin-left: 10px;
  }
  </style>
  上記コードが、ペ