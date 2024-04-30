<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  type: String as PropType<'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'>
})
// 1.  使用validator 验证枚举  , 存在问题：即使返回false外部值还是能传入，只不过会报警告
// defineProps({
//   type: {
//     type: String,
//     required: true,
//     default: 'default',
//     validator: (value: string) => {
//       return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(
//         value,
//       )
//     },
//   },
// })
</script>

<template>
  <button>{{ type }}</button>
</template>