import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import css from "./style.module.css";
function HomePage() {
  return (
    <div className={css.homepage}>
      <Sidebar  active="home" />
      <div>lorem
        loremIrure laboris et in duis aute cupidatat exercitation nostrud laboris labore. Mollit consequat qui excepteur reprehenderit officia qui labore. Nulla aliqua magna veniam ullamco non. Reprehenderit mollit enim ex nostrud aliquip aliquip qui veniam enim deserunt ipsum veniam id. Dolor esse proident nulla dolore sit ex commodo excepteur voluptate nostrud minim nisi velit. Veniam enim ad veniam cillum voluptate qui quis. Dolor reprehenderit esse in sit quis ipsum duis mollit reprehenderit sunt.
      </div>
    </div>
  )
}

export default HomePage