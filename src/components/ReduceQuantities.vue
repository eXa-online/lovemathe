<template>
  <GameTemplate
    gameName="Reduce_Quantities"
    title="Ich brauche genau so viele Tomaten wie Schaufeln. Was ist zu viel?"
    :countButtons="2"
    :showDemo="true"
    :solutions="[1,0,1,0,1,1]"
    :audioDuration="4000"/>
</template>

<script>
import GameTemplate from './generic/GameTemplate'
export default {
  name: 'ReduceQuantities',
  components: {GameTemplate}
}
</script>
