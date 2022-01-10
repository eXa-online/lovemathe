import { createRouter, createWebHistory } from 'vue-router'
import AddQuantities from '@/components/AddQuantities.vue'
import CountingOne from '@/components/CountingOne.vue'
import OverallBadge from '@/components/OverallBadge.vue'
import QuantityComparison from '@/components/QuantityComparison.vue'
import QuantityEquality from '@/components/QuantityEquality.vue'
import ReduceQuantities from '@/components/ReduceQuantities.vue'

const routes = [
  { path: '/', component: OverallBadge },
  { path: '/add_quantities', component: AddQuantities },
  { path: '/counting_one', component: CountingOne },
  { path: '/quantity_comparison', component: QuantityComparison },
  { path: '/quantity_equality', component: QuantityEquality },
  { path: '/reduce_quantities', component: ReduceQuantities },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router