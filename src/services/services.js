import { getData } from "."

export function getPages() {
  return getData("pages").then(function (data) {
    const pages = data
    return pages
  })
}