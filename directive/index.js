import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'


const install = function (Vue) {
  Vue.directive('hasRole', hasRole)
  Vue.directive('hasPermi', hasPermi)
}


export default install
