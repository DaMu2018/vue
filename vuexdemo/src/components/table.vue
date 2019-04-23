<template>
    <div>
        <slotdemo>
            <p slot="one">一些内容</p>
            <p slot="two">另外的内容</p>
            <p>不带slot属性</p>
        </slotdemo><br/>
        <div>
            <slotdemo>
              <div slot="list" slot-scope="props">
                  <li>{{props.myId + '1'}}</li>
              </div>
            </slotdemo>
        </div>
        <div>
            <slotdemo></slotdemo>
        </div>
    </div>
</template>
<script>
import slotdemo from './slotdemo'
export default {
  components: {
    slotdemo
  }
}
</script>
