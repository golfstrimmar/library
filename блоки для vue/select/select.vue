<template lang="pug">
.v-select
    p.v-select-header(    
          @click="areOptionsVisible=!areOptionsVisible"
        ) {{selected}}
    transition(name="slide") 
      .v-select-options(
        v-if="areOptionsVisible"
        )
        p(
          v-for= '(option, index)  in options'
          :key = 'option.index'
          @click="SelectOption(option)"
        ) {{option.title}}
</template>

<script>
export default {
name: "v-select",
  data: () => ({
    areOptionsVisible :false
  }),
  props: {
    options:{
       type: Array,
          default(){
          return []
            } 
          },
    selected:{
       type: String,
               default(){
                  return ''
                  }
  },
  },
  components: {},
  methods: {
SelectOption(option){
  this.$emit('SelectOption', option)
  this.areOptionsVisible = false;
},
hideSelect(){
      return this.areOptionsVisible = false;
    }
  },
  mounted(){
document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy(){
document.removeEventListener('click', this.hideSelect.bind(this))
  },
}
</script>

<style lang="sass">
.v-select
  border: .1rem solid blue
  max-width: 20rem
  cursor: pointer
.v-select-options
  p
    border-top: .1rem solid blue 
    margin: 0 0 0 0
    cursor: pointer
    transition: all 0.2s ease-in-out
    &:hover
      background: #e5e5e5
      color:  #42A5F5!important

.v-select-header
  color: #6200EA
  background: #64FFDA
  margin: 0 0 0 0
.slide-enter-active 
   -moz-transition-duration: 0.3s
   -webkit-transition-duration: 0.3s
   -o-transition-duration: 0.3s
   transition-duration: 0.3s
   -moz-transition-timing-function: ease-in
   -webkit-transition-timing-function: ease-in
   -o-transition-timing-function: ease-in
   transition-timing-function: ease-in


.slide-leave-active 
   -moz-transition-duration: 0.3s
   -webkit-transition-duration: 0.3s
   -o-transition-duration: 0.3s
   transition-duration: 0.3s
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1)

.slide-enter-to, .slide-leave 
   max-height: 100px
   overflow: hidden


.slide-enter, .slide-leave-to 
   overflow: hidden
   max-height: 0
</style>



комментарии

1. на компоненте родителя этого селекта должны быть:

===============================================
  VSelect(
    :options="products"
    :selected="selected"
    @SelectOption="Select"
  )



======================
import VSelect from '@/components/select';
  components: {
VSelect
  },

===========================

  data: () => ({
    products: [
        {title: "title1" , valume: "1"},
        {title: "title2" , valume: "2"},
        {title: "title3" , valume: "3"},
    ],
    selected:'select'
  }),

==========================

methods: { 
      Select(option){
          this.selected= option.title
        }
        }
=============================






