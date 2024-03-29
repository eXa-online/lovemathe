import { createRouter, createWebHistory } from 'vue-router'
import AddQuantities from '@/components/AddQuantities.vue'
import CompleteSeriation from '@/components/CompleteSeriation.vue'
import CountUp from '@/components/CountUp.vue'
import ExplainApp from '@/components/ExplainApp.vue'
import GamesEvaluation from '@/components/GamesEvaluation.vue'
import IntroductionGame from '@/components/IntroductionGame.vue'
import LetsStart from '@/components/LetsStart.vue'
import OneLook from '@/components/OneLook.vue'
import OverallBadge from '@/components/OverallBadge.vue'
import QuantityComparison from '@/components/QuantityComparison.vue'
import ReduceQuantities from '@/components/ReduceQuantities.vue'
import BadgeSimulator from '@/components/BadgeSimulator.vue'

const routes = [
  { path: '/', component: LetsStart },
  { path: '/explain', component: ExplainApp },
  { path: '/introduction', component: IntroductionGame },
  { path: '/sim', component: BadgeSimulator },
  { path: '/eval', component: GamesEvaluation },

  { path: '/overall-badge', component: OverallBadge },
  { path: '/add_quantities', component: AddQuantities },
  { path: '/count_up', component: CountUp },
  { path: '/one_look', component: OneLook },
  { path: '/quantity_comparison', component: QuantityComparison },
  { path: '/reduce_quantities', component: ReduceQuantities },
  { path: '/complete_seriation', component: CompleteSeriation },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
