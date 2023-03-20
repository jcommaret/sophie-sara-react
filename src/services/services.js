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