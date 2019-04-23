<template>
    <zk-table
     ref="table"
      sum-text="sum"
      index-text="#"
      :data="data"
      :columns="columns"
      :stripe="props.stripe"
      :border="props.border"
      :show-header="props.showHeader"
      :show-summary="props.showSummary"
      :show-row-hover="props.showRowHover"
      :show-index="props.showIndex"
      :tree-type="props.treeType"
      :is-fold="props.isFold"
      :expand-type="props.expandType"
      :selection-type="props.selectionType"
      @row-click='demo1'
    >
    <!--  @cell-dblclick='demo' -->
    <!-- @row-dblclick失效，原因未知 -->
    </zk-table>
</template>
<script>
export default {
  data () {
    return {
      props: {
        stripe: true,
        border: true,
        showHeader: true,
        showSummary: false,
        showRowHover: true,
        showIndex: false,
        treeType: true,
        isFold: true,
        expandType: false,
        selectionType: false
      },
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        }
      ],
      columns: [
        {
          label: 'name',
          prop: 'name',
          width: '400px'
        },
        {
          label: 'sex',
          prop: 'sex',
          minWidth: '50px'
        },
        {
          label: 'score',
          prop: 'score'
        },
        {
          label: 'likes',
          prop: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes'
        }
      ]
    }
  },
  computed: {
    propList () {
      return Object.keys(this.props).map(item => ({
        name: item
      }))
    }
  },
  methods: {
    demo (rowIndex) {
      console.log('单元格')
    },
    demo1 (row, rowIndex, $event) {
      console.log(': event', event)
      console.log(': rowIndex', rowIndex)
      console.log(': row', row)
    }
  }
}
</script>
