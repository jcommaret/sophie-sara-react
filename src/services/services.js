import { getData } from "."

export function getSiteInfo() {
  return getData().then(function (data) {
    const siteInfo = data
    return siteInfo
  })
}

export function getPages() {
  return getData("wp/v2/pages").then(function (data) {
    const pages = data
    return pages
  })
}

export function getPagesContent() {
  return getData("wp/v2/pages/").then(function (data) {
    const pageContent = data
    return pageContent
  })
}

export function getPosts() {
  return getData("wp/v2/posts").then(function (data) {
    const postContent = data
    return postContent
  })
}