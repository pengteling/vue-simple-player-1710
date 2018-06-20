<script>
const Child = {
  functional:true,
  template:`
    <div>
      {{ props }}
    </div>
  `
}
export default {
  data: () => ({
    list: [
      { name: 'zs', age: 18 },
      { name: 'ls', age: 17 },
    ],
  })
}
</script>
<template>
  <ul>
    <li v-for="(item,index) in list" :key="index">
      {{ item }}
      <!-- <Child :name="item.name" :age="item.age"></Child> -->
      <Child v-bind="item"></Child>
    </li>
  </ul>
</template>

